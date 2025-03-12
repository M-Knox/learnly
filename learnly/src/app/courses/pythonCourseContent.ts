interface TopicContent {
  title: string;
  duration: string;
  content: {
    overview: string;
    objectives: string[];
    written_guide: string;
    assessment_cta: {
      text: string;
      link: string;
    };
  };
}

interface ModuleContent {
  [key: string]: TopicContent;
}

export const pythonBasicsContent: ModuleContent = {
  'basics': {
    title: 'Python Basics',
    duration: '45 min',
    content: {
      overview: 'Introduction to Python syntax, variables, operators, and basic programming concepts.',
      objectives: [
        'Understand Python syntax and code structure',
        'Learn about variables and data types',
        'Master basic operators and expressions',
        'Write and use comments effectively'
      ],
      written_guide: `Python is a versatile, high-level programming language known for its readability and simplicity. Its syntax allows developers to express concepts in fewer lines of code compared to languages like C++ or Java.

Key Features of Python Syntax:

1. Indentation
- Python uses indentation to define code blocks
- Replaces the need for braces {} as in other languages
- Consistent indentation is crucial
Example:
\`\`\`python
if True:
    print("This is indented correctly.")
\`\`\`

2. Variables and Basic Data Types
- Variables are dynamically typed
- Common data types:
  * integers (int): age = 25
  * floating-point numbers (float): height = 5.9
  * strings (str): name = "Alice"
  * booleans (bool): is_student = True

3. Comments
- Use the hash symbol # for single-line comments
- Comments are ignored during execution
Example:
\`\`\`python
# This is a single-line comment
\`\`\`

4. Operators
Arithmetic Operators:
- Addition: +
- Subtraction: -
- Multiplication: *
- Division: /
- Floor Division: //
- Modulus: %
- Exponentiation: **

Example:
\`\`\`python
result = (5 + 3) * 2  # Arithmetic
is_equal = (10 == 10) # Comparison
is_valid = True and False # Logical
\`\`\``,
      assessment_cta: {
        text: "Would you like to test your knowledge of Python Basics?",
        link: "/assessment"
      }
    }
  },
  'control-structures': {
    title: 'Control Structures',
    duration: '40 min',
    content: {
      overview: 'Learn about conditional statements and loops in Python for controlling program flow.',
      objectives: [
        'Master if-elif-else conditional statements',
        'Understand and implement for loops',
        'Work with while loops effectively',
        'Use break and continue statements'
      ],
      written_guide: `Control flow in programming refers to the order in which individual statements, instructions, or function calls are executed or evaluated. Python provides several control structures to manage program flow.

1. Conditional Statements
- if, elif, and else keywords for decision-making
- Condition evaluation returns True or False
- Proper indentation is crucial

Example:
\`\`\`python
temperature = 25

if temperature > 30:
    print("It's a hot day.")
elif temperature > 20:
    print("It's a warm day.")
else:
    print("It's a cool day.")
\`\`\`

2. Loops

For Loop:
- Iterates over a sequence (list, tuple, string, or range)
- Executes code block for each item
Example:
\`\`\`python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
\`\`\`

While Loop:
- Continues execution while condition is True
- Requires careful handling to avoid infinite loops
Example:
\`\`\`python
count = 1
while count <= 5:
    print(count)
    count += 1
\`\`\`

3. Loop Control Statements

Break Statement:
- Terminates the loop prematurely
Example:
\`\`\`python
for number in range(10):
    if number == 5:
        break
    print(number)
\`\`\`

Continue Statement:
- Skips the current iteration
Example:
\`\`\`python
for number in range(5):
    if number == 2:
        continue
    print(number)
\`\`\``,
      assessment_cta: {
        text: "Would you like to test your knowledge of Control Structures?",
        link: "/assessment"
      }
    }
  },
  'data-types': {
    title: 'Data Types and Variables',
    duration: '50 min',
    content: {
      overview: 'Deep dive into Python data types including numbers, strings, lists, tuples, and dictionaries.',
      objectives: [
        'Understand different numeric data types',
        'Master string operations and methods',
        'Work with lists and list comprehensions',
        'Learn about tuples and dictionaries'
      ],
      written_guide: `Python offers a rich set of data types to handle various kinds of data efficiently.

1. Numbers
Integers (int):
- Whole numbers, positive or negative
- No decimal point
Example:
\`\`\`python
age = 30
population = 1000000
\`\`\`

Floating-Point Numbers (float):
- Numbers with decimal points
- Scientific notation supported
Example:
\`\`\`python
price = 19.99
scientific = 1.23e-4
\`\`\`

2. Strings (str)
- Sequences of characters
- Immutable
- Created with single, double, or triple quotes
Example:
\`\`\`python
name = "Alice"
message = 'Hello, World!'
multiline = """This is a
multiline string"""

# String operations
print(name.upper())
print(name[0])  # Indexing
print(name[1:3])  # Slicing
\`\`\`

3. Lists
- Ordered, mutable collections
- Can contain items of different types
- Created with square brackets []
Example:
\`\`\`python
fruits = ["apple", "banana", "cherry"]
mixed = [1, "hello", 3.14, True]

# List operations
fruits.append("date")
fruits.remove("banana")
print(fruits[0])  # Indexing
print(fruits[-1])  # Last item
\`\`\`

4. Tuples
- Ordered, immutable collections
- Created with parentheses ()
Example:
\`\`\`python
coordinates = (10.0, 20.0)
person = ("Alice", 25, "New York")

# Tuple operations
x, y = coordinates  # Unpacking
print(person[0])  # Indexing
\`\`\`

5. Dictionaries
- Unordered collections of key-value pairs
- Created with curly braces {}
Example:
\`\`\`python
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

# Dictionary operations
print(person["name"])
person["email"] = "alice@example.com"
print(person.keys())
print(person.values())
\`\`\``,
      assessment_cta: {
        text: "Would you like to test your knowledge of Data Types and Variables?",
        link: "/assessment"
      }
    }
  },
  'functions': {
    title: 'Functions in Python',
    duration: '45 min',
    content: {
      overview: 'Functions are reusable blocks of code that perform specific tasks. They help organize code, promote reusability, and make programs more maintainable.',
      objectives: [
        'Understand function definition and syntax',
        'Learn about function parameters and return values',
        'Master function arguments and their types',
        'Explore lambda functions and built-in functions'
      ],
      written_guide: `# Python Functions

## 1. Function Basics
Functions are defined using the \`def\` keyword, followed by the function name and parameters:

\`\`\`python
def greet(name):
    """
    A simple function that greets a person
    """
    return f"Hello, {name}!"

# Calling the function
message = greet("Alice")
print(message)  # Output: Hello, Alice!
\`\`\`

## 2. Function Parameters
Python supports different types of parameters:

### Default Parameters
\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))          # Output: Hello, Alice!
print(greet("Bob", "Hi"))      # Output: Hi, Bob!
\`\`\`

### Positional and Keyword Arguments
\`\`\`python
def describe_person(name, age, city):
    return f"{name} is {age} years old and lives in {city}"

# Using positional arguments
print(describe_person("Alice", 25, "New York"))

# Using keyword arguments
print(describe_person(age=30, city="London", name="Bob"))
\`\`\`

## 3. *args and **kwargs
For flexible number of arguments:

\`\`\`python
def sum_all(*args):
    """Sum any number of arguments"""
    return sum(args)

print(sum_all(1, 2, 3))       # Output: 6
print(sum_all(1, 2, 3, 4, 5)) # Output: 15

def print_info(**kwargs):
    """Print any number of keyword arguments"""
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="New York")
\`\`\`

## 4. Return Values
Functions can return single or multiple values:

\`\`\`python
def calculate_statistics(numbers):
    """Return multiple statistics"""
    return min(numbers), max(numbers), sum(numbers)/len(numbers)

# Unpacking multiple return values
minimum, maximum, average = calculate_statistics([1, 2, 3, 4, 5])
print(f"Min: {minimum}, Max: {maximum}, Avg: {average}")
\`\`\`

## 5. Lambda Functions
Small anonymous functions created with the \`lambda\` keyword:

\`\`\`python
# Regular function
def square(x):
    return x ** 2

# Equivalent lambda function
square_lambda = lambda x: x ** 2

# Using lambda in built-in functions
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
\`\`\`

## 6. Function Documentation
Using docstrings for documentation:

\`\`\`python
def calculate_area(length, width):
    """
    Calculate the area of a rectangle.
    
    Args:
        length (float): The length of the rectangle
        width (float): The width of the rectangle
    
    Returns:
        float: The area of the rectangle
    """
    return length * width

# Access the documentation
help(calculate_area)
\`\`\`

## 7. Built-in Functions
Python provides many useful built-in functions:

\`\`\`python
# Numeric functions
print(abs(-5))          # Output: 5
print(round(3.7))       # Output: 4
print(max(1, 2, 3))     # Output: 3

# Sequence functions
numbers = [1, 2, 3, 4, 5]
print(len(numbers))     # Output: 5
print(sum(numbers))     # Output: 15
print(sorted(numbers, reverse=True))  # Output: [5, 4, 3, 2, 1]

# Type conversion
print(int("123"))       # Output: 123
print(str(123))        # Output: "123"
print(list("hello"))    # Output: ['h', 'e', 'l', 'l', 'o']
\`\`\``,
      assessment_cta: {
        text: 'Would you like to test your knowledge of Python Functions?',
        link: '/assessment'
      }
    }
  },
  'modules': {
    title: 'Working with Modules',
    duration: '35 min',
    content: {
      overview: 'Learn how to use and create Python modules for organizing code and using external libraries.',
      objectives: [
        'Understand module imports and usage',
        'Create custom modules',
        'Work with package management',
        'Use common Python standard library modules'
      ],
      written_guide: `Modules are files containing Python code that can be reused across different programs. They help organize code and provide a way to share functionality.

1. Importing Modules
- Different ways to import modules
- Importing specific items
- Using aliases
Example:
\`\`\`python
# Basic import
import math
print(math.pi)

# Import specific items
from random import randint, choice
number = randint(1, 10)

# Import with alias
import numpy as np
array = np.array([1, 2, 3])
\`\`\`

2. Creating Custom Modules
- Create reusable code in separate files
- Import custom modules like standard ones
Example:
\`\`\`python
# utils.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

# main.py
import utils
result = utils.add(5, 3)
\`\`\`

3. Package Management
- Using pip for installing packages
- Managing project dependencies
Example:
\`\`\`bash
# Install a package
pip install package_name

# Install from requirements file
pip install -r requirements.txt

# List installed packages
pip list
\`\`\`

4. Common Python Standard Library Modules
Example:
\`\`\`python
# os - Operating system interface
import os
current_dir = os.getcwd()

# datetime - Date and time operations
from datetime import datetime
now = datetime.now()

# json - JSON data handling
import json
data = json.dumps({"name": "Alice"})

# random - Random number generation
import random
random_number = random.random()
\`\`\`

5. Virtual Environments
- Creating isolated Python environments
- Managing project-specific dependencies
Example:
\`\`\`bash
# Create virtual environment
python -m venv myenv

# Activate virtual environment
# Windows:
myenv\\Scripts\\activate
# Unix/MacOS:
source myenv/bin/activate
\`\`\``,
      assessment_cta: {
        text: "Would you like to test your knowledge of Working with Modules?",
        link: "/assessment"
      }
    }
  }
};

export default pythonBasicsContent; 