import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where,
  orderBy,
  limit,
  Timestamp,
  increment,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '@/firebase';
import type { 
  UserProfile, 
  ForumPost, 
  Comment, 
  Vote, 
  Notification,
  MentorshipRequest,
  ChatMessage,
  ChatThread,
  LeaderboardEntry 
} from '@/types/firebase';

// Generic function to get a document by ID
export async function getDocumentById<T>(collectionName: string, id: string): Promise<T | null> {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? (docSnap.data() as T) : null;
}

// Generic function to create a document
export async function createDocument<T>(collectionName: string, data: Omit<T, 'id'>) {
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  return docRef.id;
}

// Generic function to update a document
export async function updateDocument<T>(collectionName: string, id: string, data: Partial<T>) {
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp()
  });
}

// Generic function to delete a document
export async function deleteDocument(collectionName: string, id: string) {
  await deleteDoc(doc(db, collectionName, id));
}

// User Profile Operations
export const userOperations = {
  async createProfile(userData: Omit<UserProfile, 'id' | 'joinedAt' | 'reputation'>): Promise<string> {
    return createDocument<UserProfile>('users', {
      ...userData,
      joinedAt: Timestamp.now(),
      reputation: 0
    });
  },

  async getProfile(uid: string): Promise<UserProfile | null> {
    return getDocumentById<UserProfile>('users', uid);
  },

  async updateProfile(uid: string, data: Partial<UserProfile>) {
    await updateDocument<UserProfile>('users', uid, data);
  }
};

// Forum Post Operations
export const forumOperations = {
  async createPost(postData: Omit<ForumPost, 'id' | 'createdAt' | 'updatedAt' | 'upvotes' | 'downvotes' | 'commentCount' | 'viewCount'>): Promise<string> {
    return createDocument<ForumPost>('posts', {
      ...postData,
      upvotes: 0,
      downvotes: 0,
      commentCount: 0,
      viewCount: 0
    });
  },

  async getPost(id: string): Promise<ForumPost | null> {
    return getDocumentById<ForumPost>('posts', id);
  },

  async updatePost(id: string, data: Partial<ForumPost>) {
    await updateDocument<ForumPost>('posts', id, data);
  },

  async incrementViewCount(id: string) {
    const docRef = doc(db, 'posts', id);
    await updateDoc(docRef, {
      viewCount: increment(1)
    });
  },

  async getPosts(category?: string, limit = 10) {
    const postsRef = collection(db, 'posts');
    const q = category
      ? query(postsRef, where('category', '==', category), orderBy('createdAt', 'desc'), limit(limit))
      : query(postsRef, orderBy('createdAt', 'desc'), limit(limit));
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ForumPost));
  }
};

// Comment Operations
export const commentOperations = {
  async createComment(commentData: Omit<Comment, 'id' | 'createdAt' | 'updatedAt' | 'upvotes' | 'downvotes'>): Promise<string> {
    const id = await createDocument<Comment>('comments', {
      ...commentData,
      upvotes: 0,
      downvotes: 0
    });

    // Increment comment count on the post
    const postRef = doc(db, 'posts', commentData.postId);
    await updateDoc(postRef, {
      commentCount: increment(1)
    });

    return id;
  },

  async getPostComments(postId: string): Promise<Comment[]> {
    const commentsRef = collection(db, 'comments');
    const q = query(commentsRef, where('postId', '==', postId), orderBy('createdAt', 'asc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Comment));
  }
};

// Vote Operations
export const voteOperations = {
  async addVote(voteData: Omit<Vote, 'id' | 'createdAt'>): Promise<string> {
    // Check if user has already voted
    const votesRef = collection(db, 'votes');
    const q = query(
      votesRef, 
      where('userId', '==', voteData.userId),
      where('targetId', '==', voteData.targetId)
    );
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const existingVote = querySnapshot.docs[0];
      if (existingVote.data().voteType === voteData.voteType) {
        return existingVote.id;
      }
      // Remove existing vote
      await deleteDocument('votes', existingVote.id);
    }

    // Add new vote
    const id = await createDocument<Vote>('votes', voteData);

    // Update vote count on target
    const targetRef = doc(db, voteData.targetType === 'post' ? 'posts' : 'comments', voteData.targetId);
    await updateDoc(targetRef, {
      [voteData.voteType === 'up' ? 'upvotes' : 'downvotes']: increment(1)
    });

    return id;
  }
};

// Notification Operations
export const notificationOperations = {
  async createNotification(notificationData: Omit<Notification, 'id' | 'createdAt' | 'read'>): Promise<string> {
    return createDocument<Notification>('notifications', {
      ...notificationData,
      read: false
    });
  },

  async getUserNotifications(userId: string): Promise<Notification[]> {
    const notificationsRef = collection(db, 'notifications');
    const q = query(
      notificationsRef,
      where('recipientId', '==', userId),
      orderBy('createdAt', 'desc'),
      limit(50)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Notification));
  },

  async markAsRead(notificationId: string) {
    await updateDocument<Notification>('notifications', notificationId, { read: true });
  }
};

// Mentorship Request Operations
export const mentorshipOperations = {
  async createRequest(requestData: Omit<MentorshipRequest, 'id' | 'createdAt' | 'updatedAt' | 'status'>): Promise<string> {
    return createDocument<MentorshipRequest>('mentorshipRequests', {
      ...requestData,
      status: 'pending'
    });
  },

  async updateRequestStatus(requestId: string, status: MentorshipRequest['status']) {
    await updateDocument<MentorshipRequest>('mentorshipRequests', requestId, { status });
  }
};

// Chat Operations
export const chatOperations = {
  async sendMessage(messageData: Omit<ChatMessage, 'id' | 'createdAt' | 'read'>): Promise<string> {
    const messageId = await createDocument<ChatMessage>('messages', {
      ...messageData,
      read: false
    });

    // Update or create chat thread
    const participants = [messageData.senderId, messageData.receiverId].sort();
    const threadId = participants.join('_');
    
    const threadRef = doc(db, 'chatThreads', threadId);
    const threadSnap = await getDoc(threadRef);
    
    if (threadSnap.exists()) {
      await updateDoc(threadRef, {
        lastMessage: messageData.content,
        lastMessageAt: serverTimestamp(),
        [`unreadCount.${messageData.receiverId}`]: increment(1)
      });
    } else {
      await createDocument<ChatThread>('chatThreads', {
        id: threadId,
        participants,
        lastMessage: messageData.content,
        lastMessageAt: Timestamp.now(),
        unreadCount: {
          [messageData.receiverId]: 1,
          [messageData.senderId]: 0
        }
      });
    }

    return messageId;
  }
};

// Leaderboard Operations
export const leaderboardOperations = {
  async updateUserPoints(userId: string, points: number) {
    const leaderboardRef = doc(db, 'leaderboard', userId);
    const leaderboardSnap = await getDoc(leaderboardRef);
    
    if (leaderboardSnap.exists()) {
      await updateDoc(leaderboardRef, {
        points: increment(points),
        lastUpdated: serverTimestamp()
      });
    } else {
      await createDocument<LeaderboardEntry>('leaderboard', {
        userId,
        points,
        postCount: 0,
        commentCount: 0,
        acceptedAnswers: 0,
        helpfulVotes: 0,
        lastUpdated: Timestamp.now()
      });
    }
  },

  async getTopUsers(limit = 10): Promise<LeaderboardEntry[]> {
    const leaderboardRef = collection(db, 'leaderboard');
    const q = query(leaderboardRef, orderBy('points', 'desc'), limit(limit));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as LeaderboardEntry));
  }
}; 