'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { mentorshipOperations } from '@/lib/firebase/db';
import { getCurrentUser } from '@/lib/firebase/auth';
import type { MentorshipRequest as MentorshipRequestType } from '@/types/firebase';

interface MentorshipRequestProps {
  mentorId: string;
  onRequestSent?: () => void;
}

export default function MentorshipRequest({ mentorId, onRequestSent }: MentorshipRequestProps) {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = getCurrentUser();
    if (!user) {
      setError('Please sign in to request mentorship');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await mentorshipOperations.createRequest({
        studentId: user.uid,
        mentorId,
        topic,
        message
      });

      setTopic('');
      setMessage('');
      onRequestSent?.();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Request Mentorship</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Topic</label>
          <Input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="What would you like to learn about?"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe what you hope to achieve from the mentorship..."
            rows={4}
            required
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending Request...' : 'Send Request'}
        </Button>
      </form>
    </Card>
  );
} 