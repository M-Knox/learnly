'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { courses } from '../page';
import courseData from '../courseData';
import { pythonCourseIndex, getPythonModuleTitle, getPythonModuleTopics } from '../pythonCourseIndex';
import Breadcrumb from '@/components/Common/Breadcrumb';
import CourseModule from '@/components/Courses/CourseModule';
import { Clock, BookOpen, Check } from 'lucide-react';

const mlModules = [
  {
    title: "Module 1: Introduction to Machine Learning",
    topics: [
      { name: "What is Machine Learning?", link: "module1#introduction" },
      { name: "Machine Learning Pipeline", link: "module1#ml-pipeline" },
      { name: "Supervised Learning Basics", link: "module1#supervised" },
      { name: "Model Evaluation", link: "module1#evaluation" }
    ]
  },
  {
    title: "Module 2: Supervised Learning",
    topics: [
      { name: "Linear Regression" },
      { name: "Logistic Regression" },
      { name: "Decision Trees" },
      { name: "Random Forests" },
      { name: "Support Vector Machines" }
    ]
  },
  {
    title: "Module 3: Unsupervised Learning",
    topics: [
      { name: "Clustering Algorithms" },
      { name: "Dimensionality Reduction" },
      { name: "Principal Component Analysis" },
      { name: "Association Rule Learning" }
    ]
  },
  {
    title: "Module 4: Deep Learning",
    topics: [
      { name: "Neural Networks Fundamentals" },
      { name: "Convolutional Neural Networks" },
      { name: "Recurrent Neural Networks" },
      { name: "Transfer Learning" },
      { name: "Deep Learning Frameworks" }
    ]
  },
  {
    title: "Module 5: Advanced Topics",
    topics: [
      { name: "Model Evaluation and Validation" },
      { name: "Hyperparameter Tuning" },
      { name: "Ensemble Methods" },
      { name: "Deployment and Production" },
      { name: "Ethics in Machine Learning" }
    ]
  }
];

interface TopicProgress {
  moduleIndex: number;
  topicIndex: number;
}

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const course = courses.find(c => c.id === courseId);
  const courseDetails = courseId === 'python' ? null : courseData[courseId];

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [completedTopics, setCompletedTopics] = useState<TopicProgress[]>([]);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(`course-progress-${courseId}`);
    if (savedProgress) {
      setCompletedTopics(JSON.parse(savedProgress));
    }
    const enrollmentStatus = localStorage.getItem(`course-enrolled-${courseId}`);
    setIsEnrolled(enrollmentStatus === 'true');
  }, [courseId]);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`course-progress-${courseId}`, JSON.stringify(completedTopics));
  }, [completedTopics, courseId]);

  const breadcrumbItems = [
    { label: 'Courses', link: '/courses' },
    { label: course?.title || '' }
  ];

  const handleTopicComplete = (moduleIndex: number, topicIndex: number) => {
    setCompletedTopics(prev => {
      const isCompleted = prev.some(
        t => t.moduleIndex === moduleIndex && t.topicIndex === topicIndex
      );
      
      if (isCompleted) {
        return prev.filter(
          t => !(t.moduleIndex === moduleIndex && t.topicIndex === topicIndex)
        );
      } else {
        return [...prev, { moduleIndex, topicIndex }];
      }
    });
  };

  const calculateModuleProgress = (moduleIndex: number) => {
    if (courseId === 'python') {
      const topics = getPythonModuleTopics(['module1', 'module2', 'module3', 'module4'][moduleIndex]);
      const completedInModule = completedTopics.filter(t => t.moduleIndex === moduleIndex).length;
      return Math.round((completedInModule / topics.length) * 100);
    }
    
    if (!courseDetails) return 0;
    const moduleTopics = courseDetails.modules[moduleIndex].topics.length;
    const completedInModule = completedTopics.filter(t => t.moduleIndex === moduleIndex).length;
    return Math.round((completedInModule / moduleTopics) * 100);
  };

  const calculateOverallProgress = () => {
    if (courseId === 'python') {
      const totalTopics = ['module1', 'module2', 'module3', 'module4'].reduce(
        (sum, moduleId) => sum + getPythonModuleTopics(moduleId).length,
        0
      );
      return Math.round((completedTopics.length / totalTopics) * 100);
    }

    if (!courseDetails) return 0;
    const totalTopics = courseDetails.modules.reduce(
      (sum, module) => sum + module.topics.length,
      0
    );
    return Math.round((completedTopics.length / totalTopics) * 100);
  };

  const handleEnroll = () => {
    setIsEnrolled(true);
    localStorage.setItem(`course-enrolled-${courseId}`, 'true');
  };

  const renderPythonCurriculum = () => {
    const moduleIds = ['module1', 'module2', 'module3', 'module4'];
    return moduleIds.map((moduleId, moduleIndex) => {
      const topics = getPythonModuleTopics(moduleId);
      return (
        <CourseModule
          key={moduleIndex}
          title={getPythonModuleTitle(moduleId)}
          topics={topics.map((topicId, topicIndex) => {
            const topic = pythonCourseIndex[topicId];
            return {
              name: topic.title,
              link: `${courseId}/${moduleId}/${topicId}`,
              completed: completedTopics.some(
                t => t.moduleIndex === moduleIndex && t.topicIndex === topicIndex
              )
            };
          })}
          basePath={`/courses`}
          progress={calculateModuleProgress(moduleIndex)}
          onTopicComplete={(topicIndex) => handleTopicComplete(moduleIndex, topicIndex)}
        />
      );
    });
  };

  if (!course || (!courseDetails && courseId !== 'python')) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a1628] to-[#1e3851] py-16 px-8">
        <div className="max-w-7xl mx-auto text-white">
          <h1 className="text-4xl font-bold text-[#22d3ee] mb-4">
            Course Not Found
          </h1>
          <p className="text-gray-300">
            The course you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="bg-[#0a1628] border-b border-[#1e3851] sticky top-0 z-50">
        <nav className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#22d3ee]">Learnly</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="/courses" className="text-[#22d3ee] hover:text-[#0891b2]">
                Course Content
              </a>
              <a href="/assessment" className="text-gray-300 hover:text-[#22d3ee]">
                Assessments
              </a>
              <a href="#" className="text-gray-300 hover:text-[#22d3ee]">
                Resources
              </a>
              <a href="#" className="text-gray-300 hover:text-[#22d3ee]">
                Community & Mentorship
              </a>
            </div>
          </div>
        </nav>
      </header>

      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="mb-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#22d3ee] to-[#0891b2] rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                    {course.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h1 className="text-4xl font-bold text-[#0a1628] mb-4">
                        {course.title}
                      </h1>
                      {isEnrolled && (
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#22d3ee]/10 text-[#0891b2] font-medium">
                          ✓ Enrolled
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">
                      {course.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-[#22d3ee]" />
                      <h3 className="text-lg font-semibold text-[#0a1628]">
                        Course Duration
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {course.duration}
                    </p>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpen className="w-5 h-5 text-[#22d3ee]" />
                      <h3 className="text-lg font-semibold text-[#0a1628]">
                        Number of Modules
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {course.modules} Modules
                    </p>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Check className="w-5 h-5 text-[#22d3ee]" />
                      <h3 className="text-lg font-semibold text-[#0a1628]">
                        Overall Progress
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#22d3ee] to-[#0891b2] transition-all duration-300"
                          style={{ width: `${calculateOverallProgress()}%` }}
                        />
                      </div>
                      <span className="text-sm text-[#22d3ee] font-medium whitespace-nowrap">
                        {calculateOverallProgress()}%
                      </span>
                    </div>
                  </div>
                </div>

                {!isEnrolled && (
                  <div className="flex gap-4 mb-8">
                    <button
                      onClick={() => setIsPreviewOpen(true)}
                      className="px-6 py-3 bg-white border-2 border-[#22d3ee] text-[#0a1628] rounded-xl font-medium hover:bg-gray-50 transition-colors"
                    >
                      Preview Course
                    </button>
                    <button
                      onClick={handleEnroll}
                      className="px-6 py-3 bg-gradient-to-r from-[#22d3ee] to-[#0891b2] text-white rounded-xl font-medium hover:from-[#0891b2] hover:to-[#0891b2] transition-colors"
                    >
                      Enroll Now
                    </button>
                  </div>
                )}

                {/* Course Curriculum */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-[#0a1628] mb-6">Course Curriculum</h2>
                  <div className="space-y-4">
                    {courseId === 'python' ? (
                      renderPythonCurriculum()
                    ) : (
                      courseDetails?.modules.map((module, moduleIndex) => (
                        <CourseModule
                          key={moduleIndex}
                          title={module.title}
                          topics={module.topics.map((topic, topicIndex) => ({
                            name: topic.title,
                            link: `${courseId}/${module.id}/${topic.id}`,
                            completed: completedTopics.some(
                              t => t.moduleIndex === moduleIndex && t.topicIndex === topicIndex
                            )
                          }))}
                          basePath={`/courses`}
                          progress={calculateModuleProgress(moduleIndex)}
                          onTopicComplete={(topicIndex) => handleTopicComplete(moduleIndex, topicIndex)}
                        />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-xl">
            <h2 className="text-2xl font-bold text-[#0a1628] mb-6">Course Preview</h2>
            <div className="mb-8">
              <h3 className="font-semibold text-[#0a1628] mb-4">What you'll learn:</h3>
              <ul className="space-y-3">
                {courseId === 'python' ? (
                  getPythonModuleTopics('module1').slice(0, 3).map((topicId, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#22d3ee]/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#22d3ee]" />
                      </div>
                      <span className="text-gray-600">{pythonCourseIndex[topicId].title}</span>
                    </li>
                  ))
                ) : (
                  courseDetails?.modules[0].topics.slice(0, 3).map((topic, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#22d3ee]/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#22d3ee]" />
                      </div>
                      <span className="text-gray-600">{topic.title}</span>
                    </li>
                  ))
                )}
                <li className="text-gray-400 pl-8">
                  And {courseId === 'python' 
                    ? getPythonModuleTopics('module1').length - 3 
                    : courseDetails?.modules[0].topics.length - 3} more topics...
                </li>
              </ul>
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="px-6 py-2 text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleEnroll();
                  setIsPreviewOpen(false);
                }}
                className="px-6 py-2 bg-gradient-to-r from-[#22d3ee] to-[#0891b2] text-white rounded-xl font-medium hover:from-[#0891b2] hover:to-[#0891b2] transition-colors"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 