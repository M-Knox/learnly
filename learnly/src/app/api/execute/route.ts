import { NextResponse } from 'next/server'
import { exec } from 'child_process'
import { promisify } from 'util'
import * as os from 'os'
import * as path from 'path'
import * as fs from 'fs'

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

export async function POST(req: Request) {
  try {
    const { code, difficulty, functionName } = await req.json()

    if (!code || !difficulty || !functionName) {
      return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 })
    }

    // Create a temporary file in the OS temp directory
    const timestamp = Date.now()
    const tempDir = os.tmpdir()
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

    try {
      // Write the test code to the temporary file
      fs.writeFileSync(filename, testCode)

      // Execute the Python code
      const { stdout, stderr } = await execAsync(`python ${filename}`, { timeout: 5000 })
      
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

      return NextResponse.json({ 
        error: error.stderr || error.message || 'Execution failed or timed out'
      }, { status: 400 })
    }
  } catch (error: any) {
    return NextResponse.json({ 
      error: error.message || 'Internal server error'
    }, { status: 500 })
  }
} 