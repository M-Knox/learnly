'use client';

import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { userOperations } from '@/lib/firebase/db';
import { updateUserProfile } from '@/lib/firebase/auth';
import type { UserProfile } from '@/types/firebase';

interface UserProfileProps {
  userId: string;
  isEditable?: boolean;
}

export default function UserProfile({ userId, isEditable = false }: UserProfileProps) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    bio: '',
    expertise: [] as string[],
    interests: [] as string[],
    learningGoals: [] as string[],
    socialLinks: {
      linkedin: '',
      github: '',
      twitter: ''
    }
  });

  useEffect(() => {
    const loadProfile = async () => {
      const userData = await userOperations.getProfile(userId);
      if (userData) {
        setProfile(userData);
        setFormData({
          displayName: userData.displayName,
          bio: userData.bio || '',
          expertise: userData.expertise,
          interests: userData.interests,
          learningGoals: userData.learningGoals,
          socialLinks: userData.socialLinks || {
            linkedin: '',
            github: '',
            twitter: ''
          }
        });
      }
    };
    loadProfile();
  }, [userId]);

  const handleSave = async () => {
    if (!profile) return;

    try {
      await userOperations.updateProfile(userId, {
        ...formData,
        updatedAt: new Date()
      });

      // Update display name in Auth profile
      if (formData.displayName !== profile.displayName) {
        await updateUserProfile(profile as any, { displayName: formData.displayName });
      }

      setProfile(prev => prev ? { ...prev, ...formData } : null);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{profile.displayName}</h2>
        {isEditable && (
          <Button
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? "destructive" : "default"}
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </Button>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Display Name</label>
            <Input
              value={formData.displayName}
              onChange={(e) => setFormData(prev => ({ ...prev, displayName: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Bio</label>
            <Textarea
              value={formData.bio}
              onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Expertise (comma-separated)</label>
            <Input
              value={formData.expertise.join(', ')}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                expertise: e.target.value.split(',').map(item => item.trim()) 
              }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Interests (comma-separated)</label>
            <Input
              value={formData.interests.join(', ')}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                interests: e.target.value.split(',').map(item => item.trim()) 
              }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Learning Goals (comma-separated)</label>
            <Input
              value={formData.learningGoals.join(', ')}
              onChange={(e) => setFormData(prev => ({ 
                ...prev, 
                learningGoals: e.target.value.split(',').map(item => item.trim()) 
              }))}
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Social Links</h3>
            <div>
              <label className="block text-sm font-medium mb-1">LinkedIn</label>
              <Input
                value={formData.socialLinks.linkedin}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  socialLinks: { ...prev.socialLinks, linkedin: e.target.value } 
                }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">GitHub</label>
              <Input
                value={formData.socialLinks.github}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  socialLinks: { ...prev.socialLinks, github: e.target.value } 
                }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Twitter</label>
              <Input
                value={formData.socialLinks.twitter}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  socialLinks: { ...prev.socialLinks, twitter: e.target.value } 
                }))}
              />
            </div>
          </div>

          <Button onClick={handleSave} className="w-full">Save Changes</Button>
        </div>
      ) : (
        <div className="space-y-4">
          {profile.bio && (
            <div>
              <h3 className="text-lg font-medium">Bio</h3>
              <p className="text-gray-600">{profile.bio}</p>
            </div>
          )}

          {profile.expertise.length > 0 && (
            <div>
              <h3 className="text-lg font-medium">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {profile.expertise.map((item, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {profile.interests.length > 0 && (
            <div>
              <h3 className="text-lg font-medium">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((item, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {profile.learningGoals.length > 0 && (
            <div>
              <h3 className="text-lg font-medium">Learning Goals</h3>
              <div className="flex flex-wrap gap-2">
                {profile.learningGoals.map((item, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {profile.socialLinks && Object.values(profile.socialLinks).some(link => link) && (
            <div>
              <h3 className="text-lg font-medium">Connect</h3>
              <div className="flex gap-4">
                {profile.socialLinks.linkedin && (
                  <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-800">
                    LinkedIn
                  </a>
                )}
                {profile.socialLinks.github && (
                  <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer"
                     className="text-gray-800 hover:text-gray-600">
                    GitHub
                  </a>
                )}
                {profile.socialLinks.twitter && (
                  <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                     className="text-blue-400 hover:text-blue-600">
                    Twitter
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  );
} 