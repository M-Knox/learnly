import React from 'react';
import ReactMarkdown from 'react-markdown';

interface TopicContentProps {
  content: {
    overview: string;
    objectives: string[];
    practice: string;
    written_guide?: string;
  };
}

export default function TopicContent({ content }: TopicContentProps) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
        <p className="text-gray-700">{content.overview}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Objectives</h2>
        <ul className="list-disc list-inside space-y-2">
          {content.objectives.map((objective, index) => (
            <li key={index} className="text-gray-700">{objective}</li>
          ))}
        </ul>
      </section>

      {content.written_guide && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Guide</h2>
          <div className="prose prose-blue max-w-none">
            <ReactMarkdown>{content.written_guide}</ReactMarkdown>
          </div>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Practice Exercise</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700">{content.practice}</p>
        </div>
      </section>
    </div>
  );
} 