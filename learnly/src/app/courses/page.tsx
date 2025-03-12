'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GraduationCap, Clock, BookOpen, Search, Menu, X, Filter } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  description: string;
  modules: number;
  duration: string;
  icon: string;
  progress: number; // Make progress required instead of optional
}

export const courses: Course[] = [
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Learn the fundamentals of Machine Learning and its applications in data science.',
    modules: 12,
    duration: '24 weeks',
    icon: '🤖',
    progress: 45
  },
  {
    id: 'python',
    title: 'Python Programming',
    description: 'Master Python programming language with focus on data science applications.',
    modules: 10,
    duration: '20 weeks',
    icon: '🐍',
    progress: 30
  },
  {
    id: 'statistics',
    title: 'Statistics',
    description: 'Understanding statistical concepts and their application in data science.',
    modules: 8,
    duration: '16 weeks',
    icon: '📈',
    progress: 0
  },
  {
    id: 'probability',
    title: 'Probability',
    description: 'Master probability concepts essential for data science and machine learning.',
    modules: 6,
    duration: '12 weeks',
    icon: '🎲',
    progress: 100
  },
  {
    id: 'product-management',
    title: 'Product Management',
    description: 'Learn product management principles and their application in data-driven projects.',
    modules: 8,
    duration: '16 weeks',
    icon: '📊',
    progress: 0
  },
  {
    id: 'business-case',
    title: 'Business Case Analysis',
    description: 'Develop skills in analyzing and presenting business cases with data.',
    modules: 6,
    duration: '12 weeks',
    icon: '💼',
    progress: 15
  },
  {
    id: 'modeling',
    title: 'Data Modeling',
    description: 'Learn database modeling and data structure optimization techniques.',
    modules: 10,
    duration: '20 weeks',
    icon: '🗄️',
    progress: 0
  },
  {
    id: 'linear-regression',
    title: 'Linear Regression',
    description: 'Master linear regression techniques for predictive modeling.',
    modules: 8,
    duration: '16 weeks',
    icon: '📉',
    progress: 75
  },
  {
    id: 'data-visualization',
    title: 'Data Visualization',
    description: 'Create compelling visual representations of data using modern tools.',
    modules: 8,
    duration: '16 weeks',
    icon: '📊',
    progress: 0
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    description: 'Explore neural networks and advanced deep learning concepts.',
    modules: 12,
    duration: '24 weeks',
    icon: '🧠',
    progress: 20
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    description: 'Learn text analysis and language processing techniques.',
    modules: 10,
    duration: '20 weeks',
    icon: '💬',
    progress: 0
  }
];

export default function CoursesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [filteredCourses, setFilteredCourses] = useState(courses);

  // Filter and search courses
  useEffect(() => {
    let result = courses;
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply progress filter
    switch (selectedFilter) {
      case 'not-started':
        result = result.filter(course => course.progress === 0);
        break;
      case 'in-progress':
        result = result.filter(course => course.progress > 0 && course.progress < 100);
        break;
      case 'completed':
        result = result.filter(course => course.progress === 100);
        break;
      default:
        break;
    }

    setFilteredCourses(result);
  }, [searchQuery, selectedFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]/90">
      {/* Navigation */}
      <header className="bg-[#0a1628] border-b border-[#1e3851] sticky top-0 z-50">
        <nav className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a href="/" className="text-2xl font-bold text-[#22d3ee] hover:text-[#0891b2]">Learnly</a>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="/courses" className="text-[#22d3ee] hover:text-[#0891b2]">
                Course Content
              </a>
              <a href="/assessment" className="text-gray-300 hover:text-[#22d3ee]">
                Assessments
              </a>
              <Link href="/resources" className="text-gray-300 hover:text-[#22d3ee] transition duration-300">
                Resources
              </Link>
              <Link href="/community" className="text-gray-300 hover:text-[#22d3ee] transition duration-300">
                Community & Mentorship
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="block md:hidden text-gray-300 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="block md:hidden mt-4 py-4 border-t border-[#1e3851] animate-in fade-in slide-in-from-top duration-300">
              <div className="flex flex-col space-y-4">
                <a href="/courses" className="text-[#22d3ee] hover:text-[#0891b2] py-2">
                  Course Content
                </a>
                <a href="/assessment" className="text-gray-300 hover:text-[#22d3ee] py-2">
                  Assessments
                </a>
                <Link href="/resources" className="text-gray-300 hover:text-[#22d3ee] py-2">
                  Resources
                </Link>
                <Link href="/community" className="text-gray-300 hover:text-[#22d3ee] py-2">
                  Community & Mentorship
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0a1628] to-[#1e3851] text-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in slide-in-from-bottom duration-700 text-[#22d3ee]">
            Explore Our Courses
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Embark on your learning journey with our comprehensive selection of data science and technology courses.
          </p>
        </div>
      </div>

      {/* Course Overview Cards */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#0a1628] rounded-2xl p-6 shadow-lg border border-[#1e3851]">
            <h3 className="text-xl font-semibold text-[#22d3ee] mb-2">Available Courses</h3>
            <p className="text-4xl font-bold text-white">{courses.length}</p>
          </div>
          <div className="bg-[#0a1628] rounded-2xl p-6 shadow-lg border border-[#1e3851]">
            <h3 className="text-xl font-semibold text-[#22d3ee] mb-2">In Progress</h3>
            <p className="text-4xl font-bold text-white">{courses.filter(c => c.progress > 0 && c.progress < 100).length}</p>
          </div>
          <div className="bg-[#0a1628] rounded-2xl p-6 shadow-lg border border-[#1e3851]">
            <h3 className="text-xl font-semibold text-[#22d3ee] mb-2">Completed</h3>
            <p className="text-4xl font-bold text-white">{courses.filter(c => c.progress === 100).length}</p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex gap-4">
            <button 
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-lg transition-all ${selectedFilter === 'all' ? 'bg-[#22d3ee] text-[#0a1628]' : 'bg-[#1e3851] text-gray-300 hover:bg-[#1e3851]/80'}`}
            >
              All Courses
            </button>
            <button 
              onClick={() => setSelectedFilter('not-started')}
              className={`px-4 py-2 rounded-lg transition-all ${selectedFilter === 'not-started' ? 'bg-[#22d3ee] text-[#0a1628]' : 'bg-[#1e3851] text-gray-300 hover:bg-[#1e3851]/80'}`}
            >
              Not Started
            </button>
            <button 
              onClick={() => setSelectedFilter('in-progress')}
              className={`px-4 py-2 rounded-lg transition-all ${selectedFilter === 'in-progress' ? 'bg-[#22d3ee] text-[#0a1628]' : 'bg-[#1e3851] text-gray-300 hover:bg-[#1e3851]/80'}`}
            >
              In Progress
            </button>
            <button 
              onClick={() => setSelectedFilter('completed')}
              className={`px-4 py-2 rounded-lg transition-all ${selectedFilter === 'completed' ? 'bg-[#22d3ee] text-[#0a1628]' : 'bg-[#1e3851] text-gray-300 hover:bg-[#1e3851]/80'}`}
            >
              Completed
            </button>
          </div>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg bg-[#1e3851] border border-[#1e3851] text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="group bg-[#0a1628] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-lg border border-[#1e3851]"
            >
              <div className="h-48 bg-gradient-to-br from-[#22d3ee] to-[#0891b2] flex items-center justify-center text-6xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <span className="transform group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#22d3ee] mb-3 group-hover:text-[#0891b2] transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-300 mb-6 min-h-[4rem]">
                  {course.description}
                </p>
                <div className="flex justify-between items-center py-4 border-t border-[#1e3851] mb-6 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#22d3ee]" />
                    <span>{course.modules} Modules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#22d3ee]" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-300">Progress</span>
                    <span className="text-sm font-medium text-[#22d3ee]">{course.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#1e3851] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#22d3ee] transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                <Link 
                  href={`/courses/${course.id}`}
                  className="group/btn block w-full py-4 px-6 bg-[#22d3ee] text-[#0a1628] text-center rounded-xl font-medium transition-all duration-300 hover:bg-[#0891b2] hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center gap-2">
                    {course.progress === 0 ? 'Start Learning' : course.progress === 100 ? 'Review Course' : 'Continue Learning'}
                    <GraduationCap className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 