"use client"

import { useState, useEffect, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Play, Save, X } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

// Define the questions for each difficulty level
const questions = {
  easy: {
    title: "Python Basics: List Manipulation",
    description: "Write a function that takes a list of integers and returns a new list with only the even numbers, sorted in ascending order.",
    example: {
      input: "[7, 2, 8, 1, 3, 4, 6, 5]",
      output: "[2, 4, 6, 8]"
    },
    requirements: [
      "Function should be named 'get_even_numbers'",
      "Input parameter should be a list of integers",
      "Return a new list containing only even numbers",
      "The returned list should be sorted in ascending order"
    ],
    testCases: [
      { input: "[1, 2, 3, 4]", output: "[2, 4]" },
      { input: "[5, 7, 9]", output: "[]" },
      { input: "[10, 8, 6, 4, 2]", output: "[2, 4, 6, 8, 10]" }
    ],
    functionName: "get_even_numbers"
  },
  medium: {
    title: "Python Intermediate: String Processing",
    description: "Write a function that takes a string and returns the most frequent character. If there are multiple characters with the same frequency, return the one that appears first in the string. Ignore spaces and treat letters as case-insensitive.",
    example: {
      input: "'Hello World'",
      output: "'l'"
    },
    requirements: [
      "Function should be named 'most_frequent_char'",
      "Input parameter should be a string",
      "Ignore spaces in counting",
      "Treat letters as case-insensitive",
      "Return the most frequent character"
    ],
    testCases: [
      { input: "'Hello World'", output: "'l'" },
      { input: "'Python Programming'", output: "'p'" },
      { input: "'aaBBcc'", output: "'a'" }
    ],
    functionName: "most_frequent_char"
  },
  hard: {
    title: "Python Advanced: Matrix Operations",
    description: "Write a function that rotates a square matrix 90 degrees clockwise. The matrix is represented as a list of lists, where each inner list represents a row.",
    example: {
      input: "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
      output: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]"
    },
    requirements: [
      "Function should be named 'rotate_matrix'",
      "Input parameter should be a square matrix (list of lists)",
      "Rotate the matrix 90 degrees clockwise",
      "Return the rotated matrix",
      "Do not modify the input matrix"
    ],
    testCases: [
      { input: "[[1, 2], [3, 4]]", output: "[[3, 1], [4, 2]]" },
      { input: "[[1]]", output: "[[1]]" },
      { input: "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]", output: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]" }
    ],
    functionName: "rotate_matrix"
  }
}

function CodingAssessmentContent() {
  const [code, setCode] = useState("")
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const difficulty = (searchParams.get("level") || "easy") as "easy" | "medium" | "hard"
  const question = questions[difficulty]

  useEffect(() => {
    // Set initial code template based on difficulty
    setCode(`def ${question.functionName}(${difficulty === "easy" ? "numbers" : 
                                          difficulty === "medium" ? "text" : "matrix"}):
    # Your code here
    pass`)
  }, [difficulty, question.functionName])

  const runCode = async () => {
    try {
      setIsRunning(true)
      setOutput("Running tests...")

      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          code,
          difficulty,
          functionName: question.functionName
        }),
      })

      const data = await response.json()

      if (data.error) {
        setOutput(`Error: ${data.error}`)
        return
      }

      setOutput(data.output)
    } catch (error) {
      setOutput('Failed to execute code. Please try again.')
    } finally {
      setIsRunning(false)
    }
  }

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
                  <div className="bg-[#1a2b3b]/80 backdrop-blur-sm p-4 rounded-md border border-gray-700">
                    <p className="font-mono text-sm text-gray-300">
                      Input: {question.example.input}<br />
                      Expected Output: {question.example.output}
                    </p>
                  </div>
                </div>

                {/* Details Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Details</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[#22d3ee]">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-300 ml-4">
                        {question.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#22d3ee]">Examples:</h4>
                      <div className="bg-[#1a2b3b]/80 backdrop-blur-sm p-4 rounded-md border border-gray-700 font-mono text-sm text-gray-300">
                        {question.testCases.map((test, index) => (
                          <p key={index}>{question.functionName}({test.input}) → {test.output}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Right side - Code Editor and Output */}
          <Card className="bg-[#0f2132]/80 backdrop-blur-sm border-gray-700 text-white h-auto transition-transform duration-300 hover:scale-[1.01]">
            <div className="flex flex-col h-full">
              {/* Code Editor */}
              <div className="p-6 flex-1">
                <h3 className="text-lg font-semibold mb-4">Code Editor</h3>
                <div className="min-h-[400px] bg-[#1a2b3b]/80 backdrop-blur-sm rounded-md border border-gray-700 flex flex-col">
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="flex-1 w-full font-mono text-sm p-4 bg-transparent resize-none focus:outline-none text-gray-300"
                    placeholder={`# Write your Python code here`}
                  />
                </div>
              </div>

              {/* Output Section */}
              <div className="p-6 border-t border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Output</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-gray-300 border-gray-700 hover:bg-[#1a2b3b] hover:text-white transition-colors duration-200"
                      onClick={() => setCode("")}
                      disabled={isRunning}
                    >
                      <X className="h-4 w-4 mr-1" />
                      Clear
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-gray-300 border-gray-700 hover:bg-[#1a2b3b] hover:text-white transition-colors duration-200"
                      disabled={isRunning}
                    >
                      <Save className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                    <Button
                      onClick={runCode}
                      size="sm"
                      className="bg-[#22d3ee] hover:bg-[#0D7C8F] text-[#0a1628] transition-colors duration-200 disabled:opacity-50"
                      disabled={isRunning || !code.trim()}
                    >
                      <Play className="h-4 w-4 mr-1" />
                      {isRunning ? 'Running...' : 'Run'}
                    </Button>
                  </div>
                </div>
                <div className="h-[150px] bg-[#1a2b3b]/80 backdrop-blur-sm rounded-md border border-gray-700 p-4 font-mono text-sm text-gray-300 overflow-y-auto whitespace-pre-wrap">
                  {output || "Your code output will appear here..."}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function CodingAssessment() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CodingAssessmentContent />
    </Suspense>
  )
} 