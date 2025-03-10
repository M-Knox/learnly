import { NextResponse } from 'next/server'
import * as fs from 'fs'
import * as path from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

// Define test cases for different difficulty levels
const testCases = {
  easy: {
    inputs: ['[1, 2, 3, 4]', '[5, 7, 9]', '[10, 8, 6, 4, 2]'],
    outputs: ['[2, 4]', '[]', '[2, 4, 6, 8, 10]']
  },
  medium: {
    inputs: ["'Hello World'", "'Python Programming'", "'aaBBcc'"],
    outputs: ["'l'", "'p'", "'a'"]
  },
  hard: {
    inputs: ['[[1, 2], [3, 4]]', '[[1]]', '[[1, 2, 3], [4, 5, 6], [7, 8, 9]]'],
    outputs: ['[[3, 1], [4, 2]]', '[[1]]', '[[7, 4, 1], [8, 5, 2], [9, 6, 3]]']
  }
}

// Ensure temp directory exists
const tempDir = path.join(process.cwd(), 'temp')
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true })
}

export async function POST(req: Request) {
  try {
    const { code, difficulty, functionName } = await req.json()

    if (!code || !difficulty || !functionName) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 })
    }

    // Create a temporary Python file with the test code
    const timestamp = Date.now()
    const filename = path.join(tempDir, `test_${timestamp}.py`)

    // Wrap user code with test cases
    const testCode = `
${code}

# Test cases
test_cases = ${JSON.stringify(testCases[difficulty as keyof typeof testCases])}
inputs = test_cases['inputs']
expected_outputs = test_cases['outputs']

print("Running tests...")
for i, (test_input, expected) in enumerate(zip(inputs, expected_outputs)):
    try:
        result = ${functionName}(eval(test_input))
        if str(result) == expected:
            print(f"✓ Test {i + 1} passed!")
        else:
            print(f"✗ Test {i + 1} failed!")
            print(f"  Input: {test_input}")
            print(f"  Expected: {expected}")
            print(f"  Got: {result}")
    except Exception as e:
        print(f"✗ Test {i + 1} failed with error: {str(e)}")
`

    // Write the test code to the temporary file
    fs.writeFileSync(filename, testCode)

    try {
      // Execute the Python code
      const { stdout, stderr } = await execAsync(`python ${filename}`)
      
      // Clean up the temporary file
      fs.unlinkSync(filename)

      if (stderr) {
        return NextResponse.json({ error: stderr }, { status: 400 })
      }

      return NextResponse.json({ output: stdout }, { status: 200 })
    } catch (error: any) {
      // Clean up the temporary file in case of error
      if (fs.existsSync(filename)) {
        fs.unlinkSync(filename)
      }

      return NextResponse.json({ error: error.stderr || error.message }, { status: 400 })
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
} 