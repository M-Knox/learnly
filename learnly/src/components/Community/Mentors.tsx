import React from 'react';
import Image from 'next/image';

const Mentors = () => {
  const mentors = [
    {
      name: "Sarah Johnson",
      role: "Data Science Lead",
      image: "/mentors/sarah.jpg",
      expertise: "Machine Learning, Python"
    },
    {
      name: "Michael Chen",
      role: "Senior Data Analyst",
      image: "/mentors/michael.jpg",
      expertise: "Data Analysis, SQL"
    },
    {
      name: "Lisa Wang",
      role: "AI Researcher",
      image: "/mentors/lisa.jpg",
      expertise: "Deep Learning, Computer Vision"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mentors</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{mentor.name}</h3>
              <p className="text-[#0a8aaa] font-medium mb-2">{mentor.role}</p>
              <p className="text-gray-600 text-sm">{mentor.expertise}</p>
              <button className="mt-4 px-4 py-2 bg-[#22d3ee] text-white rounded-lg hover:bg-[#0891b2] transition-colors">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors; 