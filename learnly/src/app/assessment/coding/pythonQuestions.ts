export const pythonQuestions = [
  {
    id: "py1",
    title: "List Comprehension",
    difficulty: "Easy",
    category: "Python Basics",
    question: "Create a list comprehension that generates a list of squares for numbers from 1 to 10 that are divisible by 2.",
    initialCode: `# Your code here
result = []`,
    solution: `result = [x**2 for x in range(1, 11) if x % 2 == 0]`,
    testCases: [
      {
        input: "",
        expectedOutput: "[4, 16, 36, 64, 100]",
        explanation: "Squares of even numbers from 1 to 10"
      }
    ],
    hints: ["Consider using the modulo operator (%) to check for even numbers", "The range should go up to 11 to include 10"]
  },
  {
    id: "py2",
    title: "Dictionary Manipulation",
    difficulty: "Medium",
    category: "Data Structures",
    question: "Create a function that takes a list of strings and returns a dictionary with the strings as keys and their lengths as values.",
    initialCode: `def string_lengths(strings):
    # Your code here
    return {}`,
    solution: `def string_lengths(strings):
    return {s: len(s) for s in strings}`,
    testCases: [
      {
        input: "['python', 'data', 'science']",
        expectedOutput: "{'python': 6, 'data': 4, 'science': 7}",
        explanation: "Dictionary with string lengths"
      }
    ],
    hints: ["You can use a dictionary comprehension", "The len() function returns string length"]
  },
  {
    id: "py3",
    title: "Error Handling",
    difficulty: "Medium",
    category: "Exception Handling",
    question: "Write a function that safely converts a string to an integer, returning None if the conversion fails.",
    initialCode: `def safe_int_convert(value):
    # Your code here
    pass`,
    solution: `def safe_int_convert(value):
    try:
        return int(value)
    except (ValueError, TypeError):
        return None`,
    testCases: [
      {
        input: "'123'",
        expectedOutput: "123",
        explanation: "Valid integer string"
      },
      {
        input: "'12.3'",
        expectedOutput: "None",
        explanation: "Invalid integer string"
      }
    ],
    hints: ["Use try/except blocks", "Consider both ValueError and TypeError"]
  },
  {
    id: "py4",
    title: "Generator Function",
    difficulty: "Hard",
    category: "Advanced Python",
    question: "Create a generator function that yields Fibonacci numbers up to a specified limit.",
    initialCode: `def fibonacci_generator(limit):
    # Your code here
    pass`,
    solution: `def fibonacci_generator(limit):
    a, b = 0, 1
    while a <= limit:
        yield a
        a, b = b, a + b`,
    testCases: [
      {
        input: "10",
        expectedOutput: "[0, 1, 1, 2, 3, 5, 8]",
        explanation: "Fibonacci numbers up to 10"
      }
    ],
    hints: ["Use the yield keyword", "Keep track of two consecutive numbers"]
  },
  {
    id: "py5",
    title: "Object-Oriented Programming",
    difficulty: "Hard",
    category: "OOP",
    question: "Create a Stack class with push, pop, and peek methods, including proper error handling for empty stacks.",
    initialCode: `class Stack:
    def __init__(self):
        # Initialize your stack here
        pass
    
    def push(self, item):
        # Add item to stack
        pass
    
    def pop(self):
        # Remove and return top item
        pass
    
    def peek(self):
        # Return top item without removing
        pass`,
    solution: `class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.items:
            raise IndexError("Stack is empty")
        return self.items.pop()
    
    def peek(self):
        if not self.items:
            raise IndexError("Stack is empty")
        return self.items[-1]`,
    testCases: [
      {
        input: "s = Stack()\ns.push(1)\ns.push(2)\ns.peek()\ns.pop()\ns.pop()",
        expectedOutput: "2, 2, 1",
        explanation: "Testing stack operations"
      }
    ],
    hints: ["Use a list to store items", "Check for empty stack before pop/peek"]
  }
]; 