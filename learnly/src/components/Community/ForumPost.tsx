'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { forumOperations, voteOperations } from '@/lib/firebase/db';
import type { ForumPost as ForumPostType } from '@/types/firebase';
import { getCurrentUser } from '@/lib/firebase/auth';
import { ThumbsUp, ThumbsDown, MessageSquare, Eye } from 'lucide-react';

interface ForumPostProps {
  post?: ForumPostType;
  isCreating?: boolean;
  onPostCreated?: () => void;
}

export default function ForumPost({ post, isCreating = false, onPostCreated }: ForumPostProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreatePost = async () => {
    const user = getCurrentUser();
    if (!user) return;

    setIsSubmitting(true);
    try {
      await forumOperations.createPost({
        authorId: user.uid,
        title,
        content,
        category,
        tags: tags.split(',').map(tag => tag.trim()),
      });

      setTitle('');
      setContent('');
      setCategory('');
      setTags('');
      onPostCreated?.();
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVote = async (voteType: 'up' | 'down') => {
    const user = getCurrentUser();
    if (!user || !post) return;

    try {
      await voteOperations.addVote({
        userId: user.uid,
        targetId: post.id,
        targetType: 'post',
        voteType
      });
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  if (isCreating) {
    return (
      <Card className="p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Create New Post</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Content</label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              placeholder="Write your post content here..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select a category</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Data Analysis">Data Analysis</option>
              <option value="Statistics">Statistics</option>
              <option value="Programming">Programming</option>
              <option value="Career">Career</option>
              <option value="General">General</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tags (comma-separated)</label>
            <Input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="python, machine learning, data science"
            />
          </div>

          <Button 
            onClick={handleCreatePost} 
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? 'Creating...' : 'Create Post'}
          </Button>
        </div>
      </Card>
    );
  }

  if (!post) return null;

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
          {post.category}
        </span>
        <div className="flex items-center gap-1">
          <Eye size={16} />
          {post.viewCount}
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare size={16} />
          {post.commentCount}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-gray-700 mb-6 whitespace-pre-wrap">{post.content}</p>

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleVote('up')}
          className="flex items-center gap-2"
        >
          <ThumbsUp size={16} />
          {post.upvotes}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleVote('down')}
          className="flex items-center gap-2"
        >
          <ThumbsDown size={16} />
          {post.downvotes}
        </Button>
      </div>
    </Card>
  );
} 