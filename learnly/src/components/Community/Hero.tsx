import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#22d3ee] to-[#0a8aaa] text-white py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h1>
        <p className="text-xl mb-8">Connect with fellow data science enthusiasts, share knowledge, and grow together.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-white text-[#0a8aaa] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Join Community
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 