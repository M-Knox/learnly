'use client';

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, MessageSquare, ThumbsUp, Award, Sparkles } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Static data for the leaderboard
const STATIC_LEADERBOARD_DATA = [
  {
    userId: 'user1',
    points: 1250,
    postCount: 45,
    commentCount: 128,
    helpfulVotes: 89,
    user: {
      displayName: 'Sarah Chen',
      expertise: ['Machine Learning', 'Python']
    }
  },
  {
    userId: 'user2',
    points: 980,
    postCount: 32,
    commentCount: 95,
    helpfulVotes: 67,
    user: {
      displayName: 'Michael Rodriguez',
      expertise: ['Data Analysis', 'Statistics']
    }
  },
  {
    userId: 'user3',
    points: 850,
    postCount: 28,
    commentCount: 76,
    helpfulVotes: 54,
    user: {
      displayName: 'Emily Zhang',
      expertise: ['Deep Learning', 'TensorFlow']
    }
  },
  {
    userId: 'user4',
    points: 720,
    postCount: 25,
    commentCount: 62,
    helpfulVotes: 43,
    user: {
      displayName: 'David Kumar',
      expertise: ['Data Visualization', 'R']
    }
  },
  {
    userId: 'user5',
    points: 690,
    postCount: 22,
    commentCount: 58,
    helpfulVotes: 41,
    user: {
      displayName: 'Lisa Patel',
      expertise: ['NLP', 'PyTorch']
    }
  }
];

export default function Leaderboard() {
  const [timePeriod, setTimePeriod] = useState('all');
  const [entries] = useState(STATIC_LEADERBOARD_DATA);

  const getCardStyle = (index: number) => {
    switch(index) {
      case 0: // Gold
        return 'bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 shadow-lg border border-amber-200 hover:shadow-xl hover:border-amber-300';
      case 1: // Silver
        return 'bg-gradient-to-r from-gray-100 via-slate-100 to-gray-100 shadow-md border border-gray-200 hover:shadow-lg hover:border-gray-300';
      case 2: // Bronze
        return 'bg-gradient-to-r from-orange-50 via-amber-100 to-orange-50 shadow-md border border-orange-200 hover:shadow-lg hover:border-orange-300';
      default:
        return 'bg-gray-50 hover:bg-gray-100 border border-gray-100';
    }
  };

  return (
    <div className="space-y-12 mb-16">
      <Card className="p-6 bg-white shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Trophy className="text-yellow-500" />
            Top Contributors
          </h2>
          <Select
            value={timePeriod}
            onValueChange={setTimePeriod}
          >
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {entries.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No contributors found for this time period.
          </div>
        ) : (
          <div className="space-y-4">
            {entries.map((entry, index) => (
              <div
                key={entry.userId}
                className={`flex flex-col p-4 rounded-lg transition-all duration-300 ${getCardStyle(index)}`}
              >
                {/* Top section with rank and name */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    {index < 3 ? (
                      <div className="relative">
                        <Award
                          size={32}
                          className={
                            index === 0 ? 'text-yellow-500' :
                            index === 1 ? 'text-gray-400' :
                            'text-amber-600'
                          }
                        />
                        {index === 0 && (
                          <Sparkles
                            size={12}
                            className="absolute -top-1 -right-1 text-yellow-500 animate-pulse"
                          />
                        )}
                      </div>
                    ) : (
                      <span className="text-xl font-semibold text-gray-500">
                        {index + 1}
                      </span>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">
                      {entry.user?.displayName || 'Anonymous User'}
                    </h3>
                    <div className="text-lg font-bold text-blue-600">
                      {entry.points.toLocaleString()} <span className="text-xs text-gray-500">points</span>
                    </div>
                  </div>
                </div>

                {/* Middle section with expertise */}
                {entry.user?.expertise && entry.user.expertise.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3 px-12">
                    {entry.user.expertise.map((exp, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bottom section with stats */}
                <div className="flex justify-center items-center gap-8 pt-2 border-t border-gray-100">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="flex items-center gap-2">
                          <MessageSquare size={16} className="text-blue-500" />
                          <span className="text-sm font-medium">{entry.postCount + entry.commentCount}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Total Posts & Comments</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="flex items-center gap-2">
                          <ThumbsUp size={16} className="text-green-500" />
                          <span className="text-sm font-medium">{entry.helpfulVotes}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Helpful Votes</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
} 