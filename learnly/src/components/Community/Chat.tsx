'use client';

import { useState, useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { chatOperations } from '@/lib/firebase/db';
import { getCurrentUser } from '@/lib/firebase/auth';
import type { ChatMessage, ChatThread } from '@/types/firebase';
import { Send } from 'lucide-react';

interface ChatProps {
  receiverId: string;
  receiverName: string;
}

export default function Chat({ receiverId, receiverName }: ChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const user = getCurrentUser();
    if (!user) return;

    setIsLoading(true);
    try {
      await chatOperations.sendMessage({
        senderId: user.uid,
        receiverId,
        content: newMessage
      });

      setNewMessage('');
      // In a real app, you'd use a real-time listener to update messages
      // For now, we'll just add the message locally
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        senderId: user.uid,
        receiverId,
        content: newMessage,
        createdAt: new Date(),
        read: false
      }]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="flex flex-col h-[500px]">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">{receiverName}</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.senderId === getCurrentUser()?.uid ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg ${
                message.senderId === getCurrentUser()?.uid
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100'
              }`}
            >
              <p className="break-words">{message.content}</p>
              <span className="text-xs opacity-70">
                {new Date(message.createdAt).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            <Send size={20} />
          </Button>
        </div>
      </form>
    </Card>
  );
} 