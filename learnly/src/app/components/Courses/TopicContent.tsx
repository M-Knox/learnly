import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';

interface TopicContentProps {
  title: string;
  duration: string;
  content: {
    overview: string;
    objectives: string[];
    written_guide: string;
    assessment_cta: {
      text: string;
      link: string;
    };
  };
}

const TopicContent: React.FC<TopicContentProps> = ({
  title,
  duration,
  content
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#0a1628] mb-2">{title}</h1>
        <p className="text-gray-600">Duration: {duration}</p>
      </div>

      <Card className="mb-8 p-6">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700">{content.overview}</p>
      </Card>

      <Card className="mb-8 p-6">
        <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
        <ul className="list-disc list-inside space-y-2">
          {content.objectives.map((objective, index) => (
            <li key={index} className="text-gray-700">{objective}</li>
          ))}
        </ul>
      </Card>

      <Card className="mb-8 p-6">
        <h2 className="text-2xl font-semibold mb-4">Guide</h2>
        <div className="prose max-w-none">
          <ReactMarkdown>{content.written_guide}</ReactMarkdown>
        </div>
      </Card>

      <Card className="mb-8 p-6 bg-blue-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">{content.assessment_cta.text}</h2>
          <Link href={content.assessment_cta.link}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Take Assessment
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default TopicContent; 