"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  ChevronLeft, 
  Bold, 
  Italic, 
  Underline, 
  Strikethrough,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Quote,
  Code,
  Undo,
  Redo,
  Save
} from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'

// Define the questions for each difficulty level
const questions = {
  easy: {
    title: "Research Methods Basics",
    description: "What is the difference between qualitative and quantitative research methods? Provide examples of when each would be most appropriate.",
    requirements: [
      "Define both qualitative and quantitative research methods",
      "Compare and contrast the two approaches",
      "Provide specific examples for each method",
      "Explain when each method would be most appropriate",
      "Consider the strengths and limitations of each approach"
    ],
    rubric: [
      "Clear definitions of both methods (20%)",
      "Thorough comparison of approaches (20%)",
      "Relevant examples provided (20%)",
      "Appropriate use cases explained (20%)",
      "Analysis of strengths and limitations (20%)"
    ]
  },
  medium: {
    title: "Sampling Methods",
    description: "Explain the concept of sampling bias and describe three different sampling methods that could be used to minimize it in a research study.",
    requirements: [
      "Define sampling bias and its implications",
      "Describe three distinct sampling methods",
      "Explain how each method helps minimize bias",
      "Discuss the limitations of each method",
      "Provide real-world examples"
    ],
    rubric: [
      "Clear explanation of sampling bias (20%)",
      "Detailed description of sampling methods (30%)",
      "Analysis of bias minimization (20%)",
      "Discussion of limitations (15%)",
      "Quality of examples (15%)"
    ]
  },
  hard: {
    title: "Mixed Methods Research Design",
    description: "Design a mixed-methods research study to investigate the impact of remote learning on student performance. Include your research questions, methodology, and how you would address potential validity threats.",
    requirements: [
      "Formulate clear research questions",
      "Design appropriate quantitative methods",
      "Design appropriate qualitative methods",
      "Explain integration of both methods",
      "Address validity threats",
      "Discuss ethical considerations"
    ],
    rubric: [
      "Research questions clarity (15%)",
      "Quantitative design (20%)",
      "Qualitative design (20%)",
      "Method integration (20%)",
      "Validity considerations (15%)",
      "Ethics discussion (10%)"
    ]
  }
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null
  }

  return (
    <div className="border-b border-gray-700 p-2 flex flex-wrap gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'bg-[#1a2b3b]' : ''}
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'bg-[#1a2b3b]' : ''}
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'bg-[#1a2b3b]' : ''}
      >
        <Strikethrough className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'bg-[#1a2b3b]' : ''}
      >
        <Heading1 className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'bg-[#1a2b3b]' : ''}
      >
        <Heading2 className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'bg-[#1a2b3b]' : ''}
      >
        <Heading3 className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'bg-[#1a2b3b]' : ''}
      >
        <List className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'bg-[#1a2b3b]' : ''}
      >
        <ListOrdered className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'bg-[#1a2b3b]' : ''}
      >
        <Quote className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'bg-[#1a2b3b]' : ''}
      >
        <Code className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().undo().run()}
      >
        <Undo className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => editor.chain().focus().redo().run()}
      >
        <Redo className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default function NonCodingAssessment() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const difficulty = (searchParams.get("level") || "easy") as "easy" | "medium" | "hard"
  const question = questions[difficulty]

  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-[#22d3ee] prose-blockquote:text-gray-400 prose-strong:text-white min-h-[400px] p-4 focus:outline-none',
      },
    },
  })

  return (
    <div className="min-h-screen bg-[#0a1628] relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0D7C8F10_1px,transparent_1px),linear-gradient(to_bottom,#0D7C8F10_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Radial Gradient Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,#0a1628_0%,#081221_100%)]"></div>
      
      {/* Blurred Circles */}
      <div className="fixed top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#0D7C8F]/20 blur-[100px] animate-pulse" 
           style={{ animationDuration: '10s' }} />
      <div className="fixed bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#22d3ee]/20 blur-[100px] animate-pulse"
           style={{ animationDuration: '8s' }} />
      <div className="fixed top-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-[#0D7C8F]/10 blur-[100px] animate-pulse"
           style={{ animationDuration: '12s' }} />
      <div className="fixed bottom-[40%] left-[10%] w-[200px] h-[200px] rounded-full bg-[#22d3ee]/10 blur-[100px] animate-pulse"
           style={{ animationDuration: '15s' }} />
      
      {/* Header with back button */}
      <div className="sticky top-0 z-50 bg-[#0a1628]/80 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => router.push('/assessment')}
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Assessments
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[calc(100vh-8rem)]">
          {/* Left side - Question and Details */}
          <Card className="bg-[#0f2132]/80 backdrop-blur-sm border-gray-700 text-white h-auto transition-transform duration-300 hover:scale-[1.01]">
            <div className="flex flex-col h-full">
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-[#22d3ee]/10 text-[#22d3ee] rounded-full">
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#22d3ee] mb-4">{question.title}</h2>
                
                {/* Question Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Question</h3>
                  <p className="text-gray-300 mb-4">{question.description}</p>
                </div>

                {/* Requirements Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                  <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                    {question.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                {/* Rubric Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Grading Rubric</h3>
                  <div className="bg-[#1a2b3b]/80 backdrop-blur-sm p-4 rounded-md border border-gray-700">
                    <ul className="text-gray-300 space-y-2">
                      {question.rubric.map((criterion, index) => (
                        <li key={index}>{criterion}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Right side - Rich Text Editor */}
          <Card className="bg-[#0f2132]/80 backdrop-blur-sm border-gray-700 text-white h-auto transition-transform duration-300 hover:scale-[1.01]">
            <div className="flex flex-col h-full">
              <div className="p-6 flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Answer Editor</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-300 border-gray-700 hover:bg-[#1a2b3b] hover:text-white transition-colors duration-200"
                  >
                    <Save className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                </div>
                <div className="bg-[#1a2b3b]/80 backdrop-blur-sm rounded-md border border-gray-700">
                  <MenuBar editor={editor} />
                  <EditorContent editor={editor} />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
} 