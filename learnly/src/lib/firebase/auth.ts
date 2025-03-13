import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { auth } from '@/firebase';
import { userOperations } from './db';

// Sign up with email and password
export async function signUpWithEmail(email: string, password: string, displayName: string) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
  // Update profile with display name
  await updateProfile(userCredential.user, { displayName });
  
  // Create user profile in Firestore
  await userOperations.createProfile({
    uid: userCredential.user.uid,
    email,
    displayName,
    expertise: [],
    interests: [],
    learningGoals: [],
    isMentor: false
  });
  
  return userCredential.user;
}

// Sign in with email and password
export async function signInWithEmail(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

// Sign in with Google
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const userCredential = await signInWithPopup(auth, provider);
  
  // Check if user profile exists, if not create one
  const userProfile = await userOperations.getProfile(userCredential.user.uid);
  if (!userProfile) {
    await userOperations.createProfile({
      uid: userCredential.user.uid,
      email: userCredential.user.email!,
      displayName: userCredential.user.displayName!,
      expertise: [],
      interests: [],
      learningGoals: [],
      isMentor: false
    });
  }
  
  return userCredential.user;
}

// Sign out
export async function signOutUser() {
  await signOut(auth);
}

// Reset password
export async function resetPassword(email: string) {
  await sendPasswordResetEmail(auth, email);
}

// Update user profile
export async function updateUserProfile(user: User, data: { displayName?: string; photoURL?: string }) {
  await updateProfile(user, data);
  if (data.displayName || data.photoURL) {
    await userOperations.updateProfile(user.uid, data);
  }
}

// Auth state observer
export function onAuthStateChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

// Get current user
export function getCurrentUser() {
  return auth.currentUser;
} 