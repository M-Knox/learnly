import React from 'react';

const CommunityForum = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Community Forum</h2>
        <div className="grid gap-6">
          {/* Forum Categories */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Discussion Topics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div>
                  <h4 className="font-medium text-gray-900">General Discussion</h4>
                  <p className="text-sm text-gray-600">Share your thoughts and experiences</p>
                </div>
                <span className="text-gray-400">→</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div>
                  <h4 className="font-medium text-gray-900">Technical Questions</h4>
                  <p className="text-sm text-gray-600">Get help with coding challenges</p>
                </div>
                <span className="text-gray-400">→</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div>
                  <h4 className="font-medium text-gray-900">Project Showcase</h4>
                  <p className="text-sm text-gray-600">Share your projects and get feedback</p>
                </div>
                <span className="text-gray-400">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityForum;