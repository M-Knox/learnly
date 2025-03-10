"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Menu, X, Compass, Target, Rocket, GraduationCap, Users2, Brain, Trophy, MessagesSquare } from "lucide-react"
import Image from "next/image"
import { AnimatedStat } from "./components/AnimatedStat"
import { useForm, ValidationError } from "@formspree/react"

function NewsletterForm() {
  const [state, handleSubmit] = useForm("manewgjj"); // Using the same form ID from forminstruct.tsx

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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#0a8aaa]">Learnly</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#" className="text-gray-700 hover:text-[#0a8aaa]">
                Course Content
              </a>
              <a href="/assessment" className="text-gray-700 hover:text-[#0a8aaa]">
                Assessments
              </a>
              <a href="#" className="text-gray-700 hover:text-[#0a8aaa]">
                Resources
              </a>
              <a href="#" className="text-gray-700 hover:text-[#0a8aaa]">
                Community & Mentorship
              </a>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="block md:hidden text-gray-700 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="block md:hidden mt-4 py-4 border-t border-gray-200 animate-in fade-in slide-in-from-top duration-300">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-700 hover:text-[#0a8aaa] py-2">
                  Course Content
                </a>
                <a href="/assessment" className="text-gray-700 hover:text-[#0a8aaa] py-2">
                  Assessments
                </a>
                <a href="#" className="text-gray-700 hover:text-[#0a8aaa] py-2">
                  Resources
                </a>
                <a href="#" className="text-gray-700 hover:text-[#0a8aaa] py-2">
                  Community & Mentorship
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#0a1628] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute left-[-150px] top-[20%] w-[300px] h-[300px] rounded-full bg-[#22d3ee]/30 blur-[100px]" />
        <div className="absolute right-[-100px] bottom-[-50px] w-[300px] h-[300px] rounded-full bg-[#8b5cf6]/30 blur-[100px]" />

        {/* Content */}
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
            <div className="z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Master Data Science</h1>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl text-[#22d3ee]">Accelerating your Learning</h2>
                <h2 className="text-2xl md:text-3xl text-[#22d3ee] mb-4">Journey</h2>
              </div>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                Empowering young Kenyans with the skills, resources, and community to excel in data science and shape
                the future.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-[#0D7C8F] hover:bg-[#096778] text-white font-medium px-8 rounded-full transition-colors"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent hover:bg-[#0D7C8F]/10 text-white border-white hover:border-[#0D7C8F] rounded-full px-8 transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative z-10 animate-in slide-in-from-left duration-1000">
              <Image
                src="/hero-dashboard.png"
                alt="Data Science Dashboard Illustration"
                width={600}
                height={600}
                priority
                className="w-full max-w-md mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative py-16 bg-[#112036] overflow-hidden">
        {/* Decorative Elements - Enhanced to match hero section */}
        <div className="absolute left-[-100px] top-[-50px] w-[400px] h-[400px] rounded-full bg-[#22d3ee]/20 blur-[120px]" />
        <div className="absolute right-[-150px] top-[30%] w-[350px] h-[350px] rounded-full bg-[#8b5cf6]/25 blur-[100px]" />
        <div className="absolute left-[10%] bottom-[-100px] w-[300px] h-[300px] rounded-full bg-[#0D7C8F]/20 blur-[130px]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Why choose <span className="text-[#22d3ee]">Learnly</span>?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Our platform is designed specifically for young learners in Kenya, making data science accessible, engaging,
            and relevant to local contexts.
          </p>
          <div className="bg-[#22d3ee]/10 p-6 rounded-full inline-block mb-4">
            <Image
              src="/planet.png"
              alt="Why Choose Learnly Illustration"
              width={120}
              height={120}
              className="mx-auto rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-px w-full bg-gradient-to-r from-[#112036] to-[#0D7C8F] my-0" />

      {/* Value Propositions / Structured Learning Paths */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0a8aaa]">Your Learning Journey</h2>
          <div className="relative space-y-6">
            {/* Connecting Line */}
            <div className="absolute left-[39px] top-[40px] bottom-[40px] w-0.5 bg-gradient-to-b from-[#0a8aaa] to-[#22d3ee] hidden md:block" />
            
            <Card className="p-6 border border-gray-200 shadow-sm relative hover:shadow-md transition-shadow bg-white z-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 rounded-full bg-[#0a8aaa]/10 flex items-center justify-center">
                    <Compass className="w-8 h-8 text-[#0a8aaa]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0a8aaa] mb-2">Structured Learning Paths</h3>
                  <p className="text-gray-700">
                    From beginner to advanced, our carefully designed learning paths guide you through your data science
                    journey step by step.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-gray-200 shadow-sm relative hover:shadow-md transition-shadow bg-white z-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 rounded-full bg-[#0a8aaa]/10 flex items-center justify-center">
                    <Target className="w-8 h-8 text-[#0a8aaa]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0a8aaa] mb-2">Hands on Assessments</h3>
                  <p className="text-gray-700">
                    Apply your knowledge to real-world problems with projects designed to build your portfolio and
                    practical skills.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border border-gray-200 shadow-sm relative hover:shadow-md transition-shadow bg-white z-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 rounded-full bg-[#0a8aaa]/10 flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-[#0a8aaa]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0a8aaa] mb-2">Supportive Community</h3>
                  <p className="text-gray-700">
                    Connect with peers and mentors across Kenya who share your passion for data science and technology.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section / Comprehensive Learning Experience */}
      <section className="py-16 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Comprehensive Learning Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Curriculum",
                description:
                  "Our curriculum covers everything you need to become proficient in data science from fundamentals to advanced techniques.",
                icon: (
                  <div className="w-32 h-32 mx-auto mb-8 relative">
                    <Image
                      src="/curriculum.png"
                      alt="Complete Curriculum"
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                ),
                action: "View Course Content",
              },
              {
                title: "Interactive Learning",
                description:
                  "Learn by doing with our interactive quizzes and guided coding questions. Watch expert instructors explain complex concepts in simple easy to understand language.",
                icon: (
                  <div className="w-32 h-32 mx-auto mb-8 relative">
                    <Image
                      src="/assessment.png"
                      alt="Interactive Learning"
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                ),
                action: "Take Assessment",
              },
              {
                title: "Resource Library",
                description:
                  "Access a wealth of resources designed to support your learning journey and help you master data science concepts.",
                icon: (
                  <div className="w-32 h-32 mx-auto mb-8 relative">
                    <Image
                      src="/resources.png"
                      alt="Resource Library"
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                ),
                action: "Access Resources",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-[#0a1628] p-6 text-center flex flex-col h-full">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{feature.description}</p>
                <div className="mt-auto">
                  <Button className="bg-[#0D7C8F] hover:bg-[#096778] text-white font-medium rounded-full px-8 transition-colors">
                    {feature.action}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action / Community Section */}
      <section className="py-16 bg-gradient-to-r from-[#0a1628] to-[#132238] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute left-[-100px] top-[10%] w-[300px] h-[300px] rounded-full bg-[#22d3ee]/10 blur-[120px]" />
        <div className="absolute right-[-50px] bottom-[-20%] w-[250px] h-[250px] rounded-full bg-[#0D7C8F]/10 blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center flex flex-col h-full bg-[#0a1628]/50 rounded-2xl p-8 backdrop-blur-sm border border-[#22d3ee]/10 hover:border-[#22d3ee]/20 transition-colors">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-full bg-[#22d3ee]/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-[#22d3ee]" />
                </div>
                <h2 className="text-2xl font-bold text-white">Mentorship Program</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#22d3ee] to-[#0D7C8F] mx-auto mt-4 rounded-full" />
              </div>
              <p className="text-gray-300 mb-8 text-lg">
                Connect with experienced data scientists who will guide you through your learning journey and help you
                overcome challenges.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4 p-4 bg-[#ffffff]/5 rounded-xl hover:bg-[#ffffff]/10 transition-colors">
                  <GraduationCap className="w-6 h-6 text-[#22d3ee] flex-shrink-0" />
                  <p className="text-gray-300 text-left">
                    Learn from industry experts with one on one mentorship sessions from professionals
                  </p>
                </div>
                <div className="flex gap-4 p-4 bg-[#ffffff]/5 rounded-xl hover:bg-[#ffffff]/10 transition-colors">
                  <Brain className="w-6 h-6 text-[#22d3ee] flex-shrink-0" />
                  <p className="text-gray-300 text-left">
                    Regular code reviews and feedback on your projects with career guidance and industry insights
                  </p>
                </div>
              </div>
              <div className="mt-auto">
                <Button className="bg-[#0D7C8F] hover:bg-[#096778] text-white font-medium rounded-full px-8 py-6 transition-all hover:scale-105">
                  Apply for Mentorship
                </Button>
              </div>
            </div>
            <div className="text-center flex flex-col h-full bg-[#0a1628]/50 rounded-2xl p-8 backdrop-blur-sm border border-[#22d3ee]/10 hover:border-[#22d3ee]/20 transition-colors">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-full bg-[#22d3ee]/10 flex items-center justify-center mx-auto mb-4">
                  <Users2 className="w-6 h-6 text-[#22d3ee]" />
                </div>
                <h2 className="text-2xl font-bold text-white">Community Engagement</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#22d3ee] to-[#0D7C8F] mx-auto mt-4 rounded-full" />
              </div>
              <p className="text-gray-300 mb-8 text-lg">
                Join a vibrant community of learners and professionals passionate about data science across Kenya.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4 p-4 bg-[#ffffff]/5 rounded-xl hover:bg-[#ffffff]/10 transition-colors">
                  <MessagesSquare className="w-6 h-6 text-[#22d3ee] flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="text-[#22d3ee] font-medium mb-1">Discussion Forums</h4>
                    <p className="text-gray-300">
                      Ask questions, share insights, and collaborate with peers on our active forums.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-[#ffffff]/5 rounded-xl hover:bg-[#ffffff]/10 transition-colors">
                  <Trophy className="w-6 h-6 text-[#22d3ee] flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="text-[#22d3ee] font-medium mb-1">Hackathons & Competitions</h4>
                    <p className="text-gray-300">
                      Test your skills, win prizes, and gain recognition through our regular competitions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <Button className="bg-[#0D7C8F] hover:bg-[#096778] text-white font-medium rounded-full px-8 py-6 transition-all hover:scale-105">
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedStat value={500} label="Active Students" />
            <AnimatedStat value={50} label="Expert Mentors" />
            <AnimatedStat value={100} label="Projects Completed" />
            <AnimatedStat value={25} label="Industry Partners" />
          </div>
        </div>
      </section>

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
                  <a href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
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
                  <a href="#" className="text-gray-600 hover:text-[#0a8aaa] transition-colors">
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
    </div>
  )
}

