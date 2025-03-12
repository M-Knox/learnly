'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from '@/components/NewsletterForm';

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] to-[#1e3851]">
      {/* Navigation */}
      <header className="bg-[#0a1628]/90 backdrop-blur-sm border-b border-[#1e3851] sticky top-0 z-50">
        <nav className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="text-2xl font-bold text-[#22d3ee] hover:text-[#0891b2] transition duration-300">
                Learnly
              </Link>
            </div>
            <div className="hidden md:flex gap-8">
              <Link href="/courses" className="text-gray-300 hover:text-[#22d3ee] transition duration-300">
                Course Content
              </Link>
              <Link href="/assessment" className="text-gray-300 hover:text-[#22d3ee] transition duration-300">
                Assessments
              </Link>
              <Link href="/resources" className="text-[#22d3ee] hover:text-[#0891b2] transition duration-300">
                Resources
              </Link>
              <Link href="/community" className="text-gray-300 hover:text-[#22d3ee] transition duration-300">
                Community & Mentorship
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <div className="relative border-b border-[#1e3851]/50 overflow-hidden">
          {/* Glowing circles */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#22d3ee]/20 blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="container mx-auto px-4 py-16 md:py-24 relative">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-[#22d3ee] mb-8 leading-tight">
                What is Data Science?
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
                Data Science is an inter-disciplinary field that uses statistical methods, computer algorithms, 
                and visualization techniques to extract meaningful insights and knowledge from large, complex 
                datasets often including structured and unstructured data, to solve real world problems.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-16">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#22d3ee] mb-4">Why Data Science?</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Data science is important because it helps businesses and institutions make better data 
                    informed decisions by analyzing large amounts of data. Choosing data science will enable 
                    you improve your innovative abilities using data and to set you up to later expand your 
                    horizon to machine learning and AI.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#22d3ee] mb-4">Why this page?</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    This page is dedicated to ensure smooth sailing as you pursue Data Science by providing 
                    you with up to date study materials, tools and links to more free courses. Combining 
                    tutorials and your normal coursework will ensure you stand out and be counted among 
                    the best. Good Luck!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              {/* Tutorials Section */}
              <section className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
                  Tutorials
                </h2>
                <p className="text-gray-600 mb-8">
                  Watch these carefully curated video tutorials to help you navigate through introductory courses. 
                  Each video provides step-by-step guidance and practical examples to enhance your learning experience.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {/* R Programming Tutorial */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.youtube.com/embed/Uenf8DbOjz0"
                        title="Introduction to R Programming"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#0a1628] mb-2">Introduction to R Programming</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Get started with R programming language, a powerful tool for statistical computing and data analysis.
                      </p>
                      <a 
                        href="https://youtu.be/Uenf8DbOjz0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#22d3ee] hover:text-[#0891b2] inline-flex items-center group transition duration-300 text-sm"
                      >
                        Watch on YouTube
                        <span className="transform transition-transform group-hover:translate-x-1 ml-1">→</span>
                      </a>
                    </div>
                  </div>

                  {/* SQL Tutorial */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.youtube.com/embed/HXV3zeQKqGY"
                        title="SQL course for beginners"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#0a1628] mb-2">SQL Course for Beginners</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Master the fundamentals of SQL with this comprehensive tutorial for data science.
                      </p>
                      <a 
                        href="https://www.youtube.com/watch?v=HXV3zeQKqGY" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#22d3ee] hover:text-[#0891b2] inline-flex items-center group transition duration-300 text-sm"
                      >
                        Watch on YouTube
                        <span className="transform transition-transform group-hover:translate-x-1 ml-1">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Python Tutorial */}
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.youtube.com/embed/WGJJIrtnfpk"
                        title="Getting started with Python"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#0a1628] mb-2">Getting Started with Python</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Begin your Python programming journey with this beginner-friendly tutorial.
                      </p>
                      <a 
                        href="https://www.youtube.com/watch?v=WGJJIrtnfpk" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#22d3ee] hover:text-[#0891b2] inline-flex items-center group transition duration-300 text-sm"
                      >
                        Watch on YouTube
                        <span className="transform transition-transform group-hover:translate-x-1 ml-1">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Online Courses Section with Hero-like Background */}
        <div className="relative bg-gradient-to-b from-[#0a1628] to-[#1e3851] overflow-hidden">
          {/* Glowing circles */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#22d3ee]/20 blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="container mx-auto px-4 py-12 relative">
            <div className="max-w-4xl mx-auto">
              <section>
                <h2 className="text-3xl font-bold text-[#22d3ee] mb-6">
                  Online Courses
                </h2>
                <p className="text-gray-300 mb-8">
                  Explore these comprehensive platforms that offer structured learning paths, real-world projects, 
                  and industry-recognized certifications to help you master data science.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {/* DataCamp Card */}
                  <div className="bg-[#0a1628] rounded-xl p-6 text-white transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-[#22d3ee] mb-3">DataCamp</h3>
                    <p className="text-gray-300 mb-4">
                      Interactive learning platform offering courses in Python, R, SQL, and data science fundamentals. 
                      Perfect for beginners and intermediate learners.
                    </p>
                    <a 
                      href="https://www.datacamp.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#22d3ee] hover:text-[#0891b2] inline-flex items-center group transition duration-300"
                    >
                      Explore DataCamp
                      <span className="transform transition-transform group-hover:translate-x-1 ml-1">→</span>
                    </a>
                  </div>

                  {/* StrataScratch Card */}
                  <div className="bg-[#0a1628] rounded-xl p-6 text-white transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-[#22d3ee] mb-3">StrataScratch</h3>
                    <p className="text-gray-300 mb-4">
                      Platform with 1000+ real interview questions from top companies. Practice coding in SQL, 
                      Python, and R with real-world data science problems.
                    </p>
                    <a 
                      href="https://www.stratascratch.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#22d3ee] hover:text-[#0891b2] inline-flex items-center group transition duration-300"
                    >
                      Explore StrataScratch
                      <span className="transform transition-transform group-hover:translate-x-1 ml-1">→</span>
                    </a>
                  </div>

                  {/* AWS Card */}
                  <div className="bg-[#0a1628] rounded-xl p-6 text-white transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-[#22d3ee] mb-3">AWS Data Science</h3>
                    <p className="text-gray-300 mb-4">
                      Comprehensive guide to data science fundamentals, tools, and best practices. Learn about 
                      data analysis, machine learning, and cloud computing with AWS.
                    </p>
                    <a 
                      href="https://aws.amazon.com/what-is/data-science/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#22d3ee] hover:text-[#0891b2] inline-flex items-center group transition duration-300"
                    >
                      Explore AWS
                      <span className="transform transition-transform group-hover:translate-x-1 ml-1">→</span>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Documentation Section */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <section className="mb-8 pb-8 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
                  Official Documentation
                </h2>
                <p className="text-gray-600 mb-8">
                  Access comprehensive official documentation for essential programming languages and tools used in data science. 
                  These resources provide detailed guides, tutorials, and reference materials to help you master each technology.
                </p>
                <div className="space-y-6">
                  {/* Python Documentation */}
                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-semibold text-[#0a1628] mb-3">Python Documentation</h3>
                    <p className="text-gray-600 mb-4">
                      The official Python documentation is your go-to resource for learning Python programming. 
                      It covers everything from basic syntax to advanced features, with practical examples and 
                      detailed explanations of Python's standard library.
                    </p>
                    <a 
                      href="https://docs.python.org/3/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#22d3ee] hover:text-[#0891b2] inline-flex items-center group transition duration-300"
                    >
                      Access Python Documentation
                      <span className="transform transition-transform group-hover:translate-x-1 ml-1">→</span>
                    </a>
                  </div>

                  {/* Scikit-Learn Documentation */}
                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-semibold text-[#0a1628] mb-3">Scikit-Learn Documentation</h3>
                    <p className="text-gray-600 mb-4">
                      Scikit-learn's user guide provides comprehensive documentation for machine learning algorithms, 
                      data preprocessing, model selection, and evaluation techniques. Perfect for both beginners 
                      and advanced users working with machine learning in Python.
                    </p>
                    <a 
                      href="https://scikit-learn.org/stable/user_guide.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#22d3ee] hover:text-[#0891b2] inline-flex items-center group transition duration-300"
                    >
                      Access Scikit-Learn Guide
                      <span className="transform transition-transform group-hover:translate-x-1 ml-1">→</span>
                    </a>
                  </div>

                  {/* Matplotlib Documentation */}
                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-semibold text-[#0a1628] mb-3">Matplotlib Documentation</h3>
                    <p className="text-gray-600 mb-4">
                      Matplotlib's documentation offers detailed guides for creating static, animated, and 
                      interactive visualizations in Python. Learn about different plot types, customization 
                      options, and best practices for data visualization.
                    </p>
                    <a 
                      href="https://matplotlib.org/stable/contents.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#22d3ee] hover:text-[#0891b2] inline-flex items-center group transition duration-300"
                    >
                      Access Matplotlib Guide
                      <span className="transform transition-transform group-hover:translate-x-1 ml-1">→</span>
                    </a>
                  </div>

                  {/* MySQL Documentation */}
                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-semibold text-[#0a1628] mb-3">MySQL Documentation</h3>
                    <p className="text-gray-600 mb-4">
                      MySQL's official documentation provides comprehensive guides for database management, 
                      SQL queries, optimization techniques, and best practices. Essential for working with 
                      relational databases in data science projects.
                    </p>
                    <a 
                      href="https://dev.mysql.com/doc/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#22d3ee] hover:text-[#0891b2] inline-flex items-center group transition duration-300"
                    >
                      Access MySQL Guide
                      <span className="transform transition-transform group-hover:translate-x-1 ml-1">→</span>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Tools Section with Hero-like Background */}
        <div className="relative bg-gradient-to-b from-[#0a1628] to-[#1e3851] overflow-hidden">
          {/* Glowing circles */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#22d3ee]/20 blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="container mx-auto px-4 py-8 relative">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#22d3ee] mb-6">
                Essential Tools
              </h2>
              <p className="text-gray-300 mb-8">
                Discover essential tools and platforms that will enhance your data science workflow. 
                These tools provide powerful features for data analysis, visualization, and development.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Jupyter Notebooks */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#22d3ee]/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#22d3ee] mb-3">Jupyter Notebooks</h3>
                  <p className="text-gray-300 mb-4">
                    Interactive computing environment for creating and sharing documents containing live code, equations, visualizations, and narrative text.
                  </p>
                  <a 
                    href="https://jupyter.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#22d3ee] hover:text-[#0891b2] inline-flex items-center group transition duration-300"
                  >
                    Learn More
                    <span className="transform transition-transform group-hover:translate-x-1 ml-1">→</span>
                  </a>
                </div>

                {/* VS Code */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#22d3ee]/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#22d3ee] mb-3">VS Code</h3>
                  <p className="text-gray-300 mb-4">
                    Powerful code editor with built-in support for Python, data science extensions, and integrated terminal for efficient development.
                  </p>
                  <a 
                    href="https://code.visualstudio.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#22d3ee] hover:text-[#0891b2] inline-flex items-center group transition duration-300"
                  >
                    Learn More
                    <span className="transform transition-transform group-hover:translate-x-1 ml-1">→</span>
                  </a>
                </div>

                {/* Git */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#22d3ee]/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#22d3ee] mb-3">Git</h3>
                  <p className="text-gray-300 mb-4">
                    Version control system for tracking changes in your code, collaborating with others, and managing project versions effectively.
                  </p>
                  <a 
                    href="https://git-scm.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#22d3ee] hover:text-[#0891b2] inline-flex items-center group transition duration-300"
                  >
                    Learn More
                    <span className="transform transition-transform group-hover:translate-x-1 ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Logo Section */}
            <div className="flex flex-col items-center md:items-start md:col-span-3">
              <span className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 tracking-tight">Learnly</span>
              <div className="w-28 h-28 md:w-36 md:h-36 relative hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/reading-book.png" 
                  alt="Learnly Logo" 
                  width={144} 
                  height={144}
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div className="space-y-4 md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Community</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/community" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                    Community & Mentorship
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                    Apply for Mentorship
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                    Join the community
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4 md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Connect</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                    Email
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4 md:col-span-3 md:pl-4">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Newsletter</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#0a8aaa] to-[#22d3ee] rounded-full" />
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Subscribe to stay updated with our latest courses, events, and data science insights delivered straight to your inbox.
              </p>
              <NewsletterForm />
              <p className="text-xs text-gray-500 mt-4 italic">
                Join our growing community of data science learners
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 