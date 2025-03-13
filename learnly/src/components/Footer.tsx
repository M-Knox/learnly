'use client';

import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";

function NewsletterForm() {
  const [state, handleSubmit] = useForm("manewgjj");

  if (state.succeeded) {
    return (
      <p className="text-[#0a8aaa] font-medium py-2">
        Thanks for subscribing to our newsletter!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="Enter your email"
          className="w-full bg-white border-gray-200 rounded-full py-6 pl-6 pr-4 focus:border-[#0a8aaa] transition-colors"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <Button 
        type="submit"
        disabled={state.submitting}
        className="w-full bg-[#0D7C8F] hover:bg-[#096778] text-white rounded-full py-6 transition-all hover:scale-105 font-medium disabled:opacity-70"
      >
        {state.submitting ? "Subscribing..." : "Subscribe to Newsletter"}
      </Button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-100 py-16 w-full">
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
                <a href="/" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/courses" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="/resources" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Community</h3>
            <ul className="space-y-4">
              <li>
                <a href="/community" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                  Community & Mentorship
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                  Apply for Mentorship
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                  Join the community
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                  Twitter
                </a>
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
  );
} 