'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { commentOperations, voteOperations } from '@/lib/firebase/db';
import type { Comment as CommentType } from '@/types/firebase';
import { getCurrentUser } from '@/lib/firebase/auth';
import { ThumbsUp, ThumbsDown, Reply, Check } from 'lucide-react';

interface CommentProps {
  comment?: CommentType;
  postId: string;
  isCreating?: boolean;
  onCommentCreated?: () => void;
  parentCommentId?: string;
  canMarkAsAnswer?: boolean;
}

export default function Comment({ 
  comment, 
  postId, 
  isCreating = false, 
  onCommentCreated,
  parentCommentId,
  canMarkAsAnswer = false
}: CommentProps) {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isReplying, setIsReplying] = useState(false);

  const handleCreateComment = async () => {
    const user = getCurrentUser();
    if (!user) return;

    setIsSubmitting(true);
    try {
      await commentOperations.createComment({
        postId,
        authorId: user.uid,
        content,
        isAcceptedAnswer: false,
        parentCommentId
      });

      setContent('');
      onCommentCreated?.();
    } catch (error) {
      console.error('Error creating comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVote = async (voteType: 'up' | 'down') => {
    const user = getCurrentUser();
    if (!user || !comment) return;

    try {
      await voteOperations.addVote({
        userId: user.uid,
        targetId: comment.id,
        targetType: 'comment',
        voteType
      });
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  if (isCreating || isReplying) {
    return (
      <Card className={`p-4 ${parentCommentId ? 'ml-8' : ''}`}>
        <div className="space-y-4">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            placeholder="Write your comment here..."
          />
          <div className="flex justify-end gap-2">
            {isReplying && (
              <Button
                variant="outline"
                onClick={() => setIsReplying(false)}
              >
                Cancel
              </Button>
            )}
            <Button 
              onClick={handleCreateComment}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Posting...' : 'Post Comment'}
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  if (!comment) return null;

  return (
    <Card className={`p-4 ${comment.parentCommentId ? 'ml-8' : ''}`}>
      <p className="text-gray-700 mb-4 whitespace-pre-wrap">{comment.content}</p>

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleVote('up')}
          className="flex items-center gap-2"
        >
          <ThumbsUp size={16} />
          {comment.upvotes}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleVote('down')}
          className="flex items-center gap-2"
        >
          <ThumbsDown size={16} />
          {comment.downvotes}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsReplying(true)}
          className="flex items-center gap-2"
        >
          <Reply size={16} />
          Reply
        </Button>
        {canMarkAsAnswer && !comment.isAcceptedAnswer && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {/* TODO: Implement mark as answer */}}
            className="flex items-center gap-2 ml-auto"
          >
            <Check size={16} />
            Mark as Answer
          </Button>
        )}
        {comment.isAcceptedAnswer && (
          <span className="flex items-center gap-2 text-green-600 ml-auto">
            <Check size={16} />
            Accepted Answer
          </span>
        )}
      </div>
    </Card>
  );
} 