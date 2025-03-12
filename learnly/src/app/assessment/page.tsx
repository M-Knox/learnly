"use client"

import { useState } from "react"
import Image from "next/image"
import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  ClipboardCheck,
  Code,
  Database,
  FileText,
  LineChart,
  MessageSquare,
  Search,
  X,
  BarChart as ChartBar,
  Cpu,
  Dices,
  FileSpreadsheet,
  GitBranch,
  Network,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useRouter } from "next/navigation"

export default function AssessmentPage() {
  const [activeTab, setActiveTab] = useState("probability")
  const [showSearch, setShowSearch] = useState(true)
  const [questionType, setQuestionType] = useState("coding")
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const topics = [
    { id: "probability", name: "Probability", icon: Dices, type: "non-coding" },
    { id: "statistics", name: "Statistics", icon: ChartBar, type: "non-coding" },
    { id: "product-management", name: "Product Management", icon: GitBranch, type: "non-coding" },
    { id: "python", name: "Python", icon: Code, type: "coding" },
    { id: "business", name: "Business Case", icon: FileSpreadsheet, type: "non-coding" },
    { id: "modeling", name: "Modeling", icon: Database, type: "coding" },
    { id: "linear-regression", name: "Linear Regression", icon: LineChart, type: "coding" },
    { id: "machine-learning", name: "Machine Learning", icon: Cpu, type: "coding" },
    { id: "data-visualization", name: "Data Visualization", icon: BarChart3, type: "coding" },
    { id: "deep-learning", name: "Deep Learning", icon: Network, type: "coding" },
    { id: "nlp", name: "NLP", icon: MessageSquare, type: "coding" },
  ]

  // Filter topics based on question type
  const filteredTopics = topics.filter(topic => topic.type === questionType)

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0a8aaa]/20 to-[#22d3ee]/20">
      {/* Mobile Menu Button - Always visible on mobile */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 bg-[#0a1628] text-white p-2 rounded-full shadow-lg"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar - Hidden on mobile unless menu is open */}
      <div
        className={`${
          mobileMenuOpen ? "fixed inset-y-0 left-0 w-64" : "hidden"
        } md:relative md:flex md:flex-col md:items-center ${
          sidebarExpanded ? "md:w-48" : "md:w-16"
        } bg-[#0a1628] text-white py-6 transition-all duration-300 z-40`}
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
      >
        <div className="mb-8 flex flex-col items-center justify-center gap-4">
          <div className="w-12 h-12 relative">
            <Image 
              src="/reading-book.png" 
              alt="Learnly Logo" 
              width={48} 
              height={48}
              className="object-contain drop-shadow-md"
            />
          </div>
          {(sidebarExpanded || mobileMenuOpen) ? (
            <h1 className="text-xl font-bold text-[#22d3ee]">Learnly</h1>
          ) : (
            <h1 className="text-xl font-bold text-[#22d3ee]">L</h1>
          )}
        </div>
        <div className="flex flex-col items-center gap-4 mt-4 w-full">
          {topics.map((topic) => (
            <TooltipProvider key={topic.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={`flex items-center cursor-pointer group w-full px-3 py-2 ${
                      activeTab === topic.id 
                        ? "bg-[#0D7C8F] text-[#22d3ee]" 
                        : "text-gray-400 hover:text-white hover:bg-[#0D7C8F]/50"
                    }`}
                    onClick={() => {
                      setActiveTab(topic.id)
                      setMobileMenuOpen(false)
                    }}
                  >
                    <topic.icon className="h-5 w-5 flex-shrink-0" />
                    {(sidebarExpanded || mobileMenuOpen) && <span className="ml-3 text-sm truncate">{topic.name}</span>}
                  </div>
                </TooltipTrigger>
                {!sidebarExpanded && !mobileMenuOpen && (
                  <TooltipContent side="right" className="bg-[#0a1628] text-white border-[#0D7C8F]">
                    {topic.name}
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Main Navigation Bar */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/" className="text-2xl font-bold text-[#0a8aaa]">
                    Learnly
                  </Link>
                </div>
                <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                  <Link
                    href="/courses"
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Course Content
                  </Link>
                  <Link
                    href="/assessment"
                    className="border-[#0a8aaa] text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Assessments
                  </Link>
                  <Link
                    href="/resources"
                    className="text-gray-300 hover:text-[#22d3ee] transition duration-300"
                  >
                    Resources
                  </Link>
                  <Link
                    href="/community"
                    className="text-gray-300 hover:text-[#22d3ee] transition duration-300"
                  >
                    Community & Mentorship
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                {showSearch && (
                  <div className="bg-gray-100 rounded-full py-1 px-4 flex items-center mr-2">
                    <Search className="h-4 w-4 mr-2 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="bg-transparent border-none focus:outline-none text-sm w-32 md:w-48"
                    />
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setShowSearch(false)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                <Button variant="ghost" size="icon" className="rounded-full">
                  <span className="text-[#0a8aaa]">👤</span>
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Secondary Navigation - Question Types */}
        <div className="bg-gray-100 shadow-sm overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 h-12">
              <button
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium whitespace-nowrap ${
                  questionType === "coding" 
                    ? "border-[#0a8aaa] text-gray-900" 
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setQuestionType("coding")}
              >
                <Code className="h-4 w-4 mr-1" />
                Coding Questions
              </button>
              <button
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium whitespace-nowrap ${
                  questionType === "non-coding" 
                    ? "border-[#0a8aaa] text-gray-900" 
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setQuestionType("non-coding")}
              >
                <FileText className="h-4 w-4 mr-1" />
                Non-coding Questions
              </button>
            </div>
          </div>
        </div>

        {/* Assessment Description Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 min-h-[calc(100vh-8rem)]">
          <Card className="bg-white p-4 sm:p-6 rounded-md shadow-sm mb-6 transition-all duration-300 hover:shadow-md hover:bg-gray-50">
            <div className="flex items-center mb-2">
              <ClipboardCheck className="h-6 w-6 text-[#0a8aaa] mr-2" />
              <h2 className="text-lg sm:text-xl font-semibold">Research Methodology Assessments</h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              Test your knowledge with our comprehensive research methodology assessments. These questions are designed to evaluate your
              understanding of key research concepts and prepare you for real-world applications. Select a topic
              below to begin practicing.
            </p>
          </Card>

          <div className="clear-both h-full">
            {/* Subject Tags */}
            <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
              {filteredTopics.map((topic) => (
                <Button
                  key={topic.id}
                  variant={activeTab === topic.id ? "default" : "outline"}
                  className={`${
                    activeTab === topic.id ? "rounded-full bg-[#0a8aaa]" : "rounded-full bg-white"
                  } whitespace-nowrap`}
                  onClick={() => setActiveTab(topic.id)}
                >
                  <span className={activeTab === topic.id ? "text-white" : ""}>
                    {activeTab === topic.id && "✓ "}
                    {topic.name}
                  </span>
                </Button>
              ))}
            </div>

            {/* Difficulty Level Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
              <Card
                className="bg-gradient-to-br from-[#0a8aaa]/5 to-[#22d3ee]/10 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex items-center transform hover:-translate-y-1 min-h-[12rem]"
                onClick={() => {
                  if (questionType === "coding") {
                    router.push("/assessment/coding?level=easy")
                  } else {
                    router.push("/assessment/non-coding?level=easy")
                  }
                }}
              >
                <div className="flex flex-col items-start">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-8 w-8 text-[#0a8aaa] mr-2" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0a8aaa]">Easy</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">
                    Start with foundational questions to build your confidence and understanding of basic concepts.
                  </p>
                </div>
              </Card>

              <Card
                className="bg-gradient-to-br from-[#0a8aaa]/10 to-[#22d3ee]/20 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex items-center transform hover:-translate-y-1 min-h-[12rem]"
                onClick={() => {
                  if (questionType === "coding") {
                    router.push("/assessment/coding?level=medium")
                  } else {
                    router.push("/assessment/non-coding?level=medium")
                  }
                }}
              >
                <div className="flex flex-col items-start">
                  <div className="flex items-center mb-4">
                    <BrainCircuit className="h-8 w-8 text-[#0a8aaa] mr-2" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0a8aaa]">Medium</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">
                    Challenge yourself with intermediate level questions that test your problem-solving abilities.
                  </p>
                </div>
              </Card>

              <Card
                className="bg-gradient-to-br from-[#0a8aaa]/20 to-[#22d3ee]/30 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex items-center transform hover:-translate-y-1 min-h-[12rem]"
                onClick={() => {
                  if (questionType === "coding") {
                    router.push("/assessment/coding?level=hard")
                  } else {
                    router.push("/assessment/non-coding?level=hard")
                  }
                }}
              >
                <div className="flex flex-col items-start">
                  <div className="flex items-center mb-4">
                    <Database className="h-8 w-8 text-[#0a8aaa] mr-2" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0a8aaa]">Hard</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">
                    Test your expertise with advanced questions that simulate real-world research scenarios.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 