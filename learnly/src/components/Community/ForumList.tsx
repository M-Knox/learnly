'use client';

import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { forumOperations } from '@/lib/firebase/db';
import { getCurrentUser } from '@/lib/firebase/auth';
import type { ForumPost } from '@/types/firebase';
import ForumPostComponent from './ForumPost';
import { MessageSquare, Eye, Filter } from 'lucide-react';

export default function ForumList() {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, [selectedCategory]);

  const loadPosts = async () => {
    setIsLoading(true);
    try {
      const fetchedPosts = await forumOperations.getPosts(selectedCategory);
      setPosts(fetchedPosts);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreatePost = () => {
    const user = getCurrentUser();
    if (!user) {
      // TODO: Show auth modal
      return;
    }
    setIsCreating(true);
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (isCreating) {
    return (
      <div className="space-y-6">
        <Button
          variant="outline"
          onClick={() => setIsCreating(false)}
          className="mb-4"
        >
          ← Back to Posts
        </Button>
        <ForumPostComponent
          isCreating
          onPostCreated={() => {
            setIsCreating(false);
            loadPosts();
          }}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <Input
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        <Button onClick={handleCreatePost}>Create New Post</Button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        <Button
          variant={selectedCategory === '' ? 'default' : 'outline'}
          onClick={() => setSelectedCategory('')}
          size="sm"
        >
          All
        </Button>
        {['Machine Learning', 'Data Analysis', 'Statistics', 'Programming', 'Career', 'General'].map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading posts...</div>
      ) : filteredPosts.length === 0 ? (
        <Card className="p-8 text-center text-gray-500">
          No posts found. Be the first to create one!
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredPosts.map(post => (
            <Card key={post.id} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">
                {post.title}
              </h3>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
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

              <p className="text-gray-600 line-clamp-2 mb-4">
                {post.content}
              </p>

              <Button variant="ghost" className="text-blue-600">
                Read More →
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
} 