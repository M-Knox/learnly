import { NextResponse } from 'next/server'
import { spawn } from 'child_process'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { randomUUID } from 'crypto'
import { existsSync } from 'fs'

// Test cases for different difficulty levels
const testCases = {
  easy: [
    { input: [7, 2, 8, 1, 3, 4, 6, 5], expected: [2, 4, 6, 8] },
    { input: [1, 2, 3, 4], expected: [2, 4] },
    { input: [5, 7, 9], expected: [] }
  ],
  medium: [
    { input: "Hello World", expected: "l" },
    { input: "Python Programming", expected: "p" },
    { input: "aaBBcc", expected: "a" }
  ],
  hard: [
    { input: [[1, 2], [3, 4]], expected: [[3, 1], [4, 2]] },
    { input: [[1]], expected: [[1]] },
    { input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], expected: [[7, 4, 1], [8, 5, 2], [9, 6, 3]] }
  ]
}

// Function to ensure temp directory exists
async function ensureTempDir() {
  const tempDir = join(process.cwd(), 'temp')
  if (!existsSync(tempDir)) {
    await mkdir(tempDir, { recursive: true })
  }
  return tempDir
}

// Function to safely execute Python code
async function executePythonCode(code: string): Promise<{ output: string; error: string | null }> {
  let tempDir: string
  let filePath: string

  try {
    // Ensure temp directory exists
    tempDir = await ensureTempDir()
    const fileName = `${randomUUID()}.py`
    filePath = join(tempDir, fileName)

    // Write the code to a temporary file
    await writeFile(filePath, code, { mode: 0o666 })

    return new Promise((resolve) => {
      // Execute the Python code with a timeout
      const process = spawn('python', [filePath], {
        timeout: 5000,
        env: { ...process.env, PYTHONIOENCODING: 'utf-8' }
      })
      
      let output = ''
      let error = ''

      // Collect stdout
      process.stdout.on('data', (data) => {
        output += data.toString()
      })

      // Collect stderr
      process.stderr.on('data', (data) => {
        error += data.toString()
      })

      // Handle process completion
      process.on('close', (code) => {
        resolve({
          output: output || 'No output',
          error: error || null
        })
      })

      // Handle process errors
      process.on('error', (err) => {
        resolve({
          output: '',
          error: 'Failed to execute Python: ' + err.message
        })
      })

      // Set a timeout of 5 seconds
      setTimeout(() => {
        try {
          process.kill()
        } catch (e) {
          // Process might have already exited
        }
        resolve({
          output: '',
          error: 'Execution timed out (5 seconds limit)'
        })
      }, 5000)
    })
  } catch (err) {
    console.error('Error executing code:', err)
    return {
      output: '',
      error: 'Failed to execute code: ' + (err as Error).message
    }
  }
}

export async function POST(request: Request) {
  try {
    const { code, difficulty = 'easy', functionName } = await request.json()

    if (!code) {
      return NextResponse.json(
        { error: 'No code provided' },
        { status: 400 }
      )
    }

    if (!difficulty || !testCases[difficulty as keyof typeof testCases]) {
      return NextResponse.json(
        { error: 'Invalid difficulty level' },
        { status: 400 }
      )
    }

    const tests = testCases[difficulty as keyof typeof testCases]

    // Wrap user code with test cases
    const wrappedCode = `
${code}

# Test cases
def run_tests():
    test_cases = ${JSON.stringify(tests)}
    
    for i, test in enumerate(test_cases, 1):
        try:
            result = ${functionName}(${difficulty === 'medium' ? 'str(test["input"])' : 'test["input"]'})
            success = result == test["expected"]
            print(f"Test {i}: {'✓' if success else '✗'}")
            print(f"Input: {test['input']}")
            print(f"Expected: {test['expected']}")
            print(f"Got: {result}")
            print()
        except Exception as e:
            print(f"Test {i}: ✗ (Error)")
            print(f"Input: {test['input']}")
            print(f"Error: {str(e)}")
            print()

run_tests()
`

    const { output, error } = await executePythonCode(wrappedCode)

    if (error) {
      console.error('Execution error:', error)
    }

    return NextResponse.json({
      output,
      error
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    )
  }
} 