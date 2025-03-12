import React, { useState } from 'react';
import Link from 'next/link';

interface Topic {
  name: string;
  link?: string;
  completed?: boolean;
  content?: {
    overview: string;
    objectives: string[];
    practice: string;
    written_guide?: string;
  };
}

interface CourseModuleProps {
  title: string;
  topics: Topic[];
  basePath: string;
  progress?: number;
  onTopicComplete?: (topicIndex: number) => void;
}

export default function CourseModule({ 
  title, 
  topics, 
  basePath,
  progress = 0,
  onTopicComplete 
}: CourseModuleProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 bg-white flex items-center justify-between hover:bg-gray-50"
      >
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center gap-2">
            <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#22d3ee] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm text-gray-500">{progress}%</span>
          </div>
        </div>
        <span className="text-gray-500">
          {isExpanded ? '−' : '+'}
        </span>
      </button>
      
      {isExpanded && (
        <div className="border-t border-gray-200">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <Link
                  href={topic.link ? `${basePath}/${topic.link}` : '#'}
                  className="flex-1 px-6 py-4 text-gray-700 flex items-center gap-3"
                >
                  {topic.completed && (
                    <span className="w-5 h-5 rounded-full bg-[#22d3ee]/10 flex items-center justify-center text-[#22d3ee]">
                      ✓
                    </span>
                  )}
                  <span>{topic.name}</span>
                </Link>
                {onTopicComplete && (
                  <button
                    onClick={() => onTopicComplete(index)}
                    className={`px-4 py-2 mr-4 text-sm font-medium rounded-full ${
                      topic.completed
                        ? 'text-[#22d3ee] hover:text-[#0891b2] bg-[#22d3ee]/10'
                        : 'text-gray-500 hover:text-gray-700 bg-gray-100'
                    }`}
                  >
                    {topic.completed ? 'Completed' : 'Mark Complete'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}