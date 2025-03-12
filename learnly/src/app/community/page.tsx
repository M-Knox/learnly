'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from "@/components/ui/card";
import CommunityForum from '@/components/Community/CommunityForum';
import Mentors from '@/components/Community/Mentors';

const CommunityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="bg-[#0a1628] border-b border-[#1e3851] sticky top-0 z-50">
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
              <Link href="/resources" className="text-gray-300 hover:text-[#22d3ee] transition duration-300">
                Resources
              </Link>
              <Link href="/community" className="text-[#22d3ee] hover:text-[#0891b2] transition duration-300">
                Community & Mentorship
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Card */}
        <Card className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#1e3851] p-12 mb-12 shadow-xl">
          {/* Glowing circles for visual effect */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#22d3ee]/20 blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Join an Eager Community of Data Science Learners and Mentors
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Accelerate your learning journey with expert mentorship and a supportive community.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="px-6 py-3 bg-[#22d3ee] text-[#0a1628] rounded-lg font-medium hover:bg-[#0891b2] transition duration-300">
                  Join Community
                </button>
                <button className="px-6 py-3 border-2 border-[#22d3ee] text-[#22d3ee] rounded-lg font-medium hover:bg-[#22d3ee]/10 transition duration-300">
                  Find a Mentor
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="w-full md:w-[400px] h-[300px] relative">
                <Image
                  src="/community-hero.png"
                  alt="Community and Mentorship"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Community Forum */}
        <CommunityForum />

        {/* Mentors Section */}
        <Mentors />
      </main>
    </div>
  );
};

export default CommunityPage; 