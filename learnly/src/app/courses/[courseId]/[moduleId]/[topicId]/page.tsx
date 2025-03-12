'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import courseData from '@/app/courses/courseData';
import { pythonCourseIndex, getPythonModuleTitle } from '@/app/courses/pythonCourseIndex';
import Breadcrumb from '@/components/Common/Breadcrumb';
import TopicContent from '@/app/courses/components/TopicContent';
import { pythonBasicsContent } from '@/app/courses/pythonCourseContent';
import { pythonDataScienceContent } from '@/app/courses/pythonDataScienceContent';
import { pythonAdvancedContent } from '@/app/courses/pythonAdvancedContent';

export default function TopicPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const moduleId = params.moduleId as string;
  const topicId = params.topicId as string;

  let course, module, topic, topicContent;

  if (courseId === 'python') {
    course = {
      title: 'Python Programming',
      modules: []
    };
    module = {
      title: getPythonModuleTitle(moduleId),
      id: moduleId
    };
    
    // Get the appropriate content based on the module
    if (moduleId === 'module1') {
      // Python Basics module (basics, control-structures, data-types)
      topicContent = pythonBasicsContent[topicId];
    } else if (moduleId === 'module2') {
      // Functions and Modules (functions, modules)
      topicContent = pythonBasicsContent[topicId];
    } else if (moduleId === 'module3') {
      // Data Science module (numpy, pandas, visualization)
      topicContent = pythonDataScienceContent[topicId];
    } else if (moduleId === 'module4') {
      // Advanced Python module (oop, error-handling, file-handling)
      topicContent = pythonAdvancedContent[topicId];
    }

    if (topicContent) {
      topicContent = {
        ...topicContent,
        content: {
          ...topicContent.content,
          assessment_cta: {
            text: `Would you like to test your knowledge of ${topicContent.title}?`,
            link: '/assessment'
          }
        }
      };
    }
    
    topic = pythonCourseIndex[topicId];
  } else {
    course = courseData[courseId];
    module = course?.modules.find(m => m.id === moduleId);
    topic = module?.topics.find(t => t.id === topicId);
    
    if (topic) {
      topicContent = {
        title: topic.title,
        duration: topic.duration || '30 min',
        content: {
          overview: topic.content?.overview || '',
          objectives: topic.content?.objectives || [],
          written_guide: topic.content?.written_guide || '',
          assessment_cta: {
            text: `Would you like to test your knowledge of ${topic.title}?`,
            link: `/assessment`
          }
        }
      };
    }
  }

  if (!course || !module || !topicContent) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a1628] to-[#1e3851] py-16 px-8">
        <div className="max-w-7xl mx-auto text-white">
          <h1 className="text-4xl font-bold text-[#22d3ee] mb-4">
            Topic Not Found
          </h1>
          <p className="text-gray-300">
            The topic you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Courses', link: '/courses' },
    { label: course.title, link: `/courses/${courseId}` },
    { label: module.title, link: `/courses/${courseId}#${moduleId}` },
    { label: topicContent.title }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#0a1628] border-b border-[#1e3851] sticky top-0 z-50">
        <nav className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a href="/" className="text-2xl font-bold text-[#22d3ee] hover:text-[#0891b2]">Learnly</a>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="/courses" className="text-[#22d3ee] hover:text-[#0891b2]">
                Course Content
              </a>
              <a href="/assessment" className="text-gray-300 hover:text-[#22d3ee]">
                Assessments
              </a>
              <a href="/resources" className="text-gray-300 hover:text-[#22d3ee]">
                Resources
              </a>
              <a href="#" className="text-gray-300 hover:text-[#22d3ee]">
                Community & Mentorship
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-8">
            <TopicContent
              title={topicContent.title}
              duration={topicContent.duration}
              content={topicContent.content}
            />
          </div>
        </div>
      </main>
    </div>
  );
} 