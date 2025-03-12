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

export const pythonAdvancedContent: ModuleContent = {
  'oop': {
    title: 'Object-Oriented Programming',
    duration: '50 min',
    content: {
      overview: 'Learn about object-oriented programming concepts in Python, including classes, objects, inheritance, and polymorphism.',
      objectives: [
        'Understand classes and objects',
        'Master inheritance and polymorphism',
        'Learn about encapsulation and data hiding',
        'Work with class methods and properties'
      ],
      written_guide: `# Object-Oriented Programming in Python

## 1. Classes and Objects
Classes are blueprints for creating objects:

\`\`\`python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, my name is {self.name}"

# Creating objects
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

print(person1.greet())  # Output: Hello, my name is Alice
\`\`\`

## 2. Inheritance
Inheritance allows classes to inherit attributes and methods from other classes:

\`\`\`python
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
    
    def study(self):
        return f"{self.name} is studying"

student = Student("Charlie", 20, "12345")
print(student.greet())  # Inherited from Person
print(student.study())  # Student-specific method
\`\`\`

## 3. Encapsulation
Protecting data and methods using access modifiers:

\`\`\`python
class BankAccount:
    def __init__(self, balance):
        self._balance = balance  # Protected attribute
        
    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            return True
        return False
    
    def get_balance(self):
        return self._balance

account = BankAccount(1000)
account.deposit(500)
print(account.get_balance())
\`\`\`

## 4. Polymorphism
Different classes can be treated as instances of the same class:

\`\`\`python
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

def animal_sound(animal):
    print(animal.speak())

dog = Dog()
cat = Cat()
animal_sound(dog)  # Output: Woof!
animal_sound(cat)  # Output: Meow!
\`\`\`

## 5. Class Methods and Properties
Special methods and property decorators:

\`\`\`python
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius
    
    @property
    def fahrenheit(self):
        return (self._celsius * 9/5) + 32
    
    @classmethod
    def from_fahrenheit(cls, fahrenheit):
        celsius = (fahrenheit - 32) * 5/9
        return cls(celsius)

temp = Temperature(25)
print(temp.fahrenheit)  # Property access
temp2 = Temperature.from_fahrenheit(77)  # Class method
\`\`\``,
      assessment_cta: {
        text: 'Would you like to test your knowledge of Object-Oriented Programming?',
        link: '/assessment'
      }
    }
  },
  'error-handling': {
    title: 'Error Handling and Debugging',
    duration: '40 min',
    content: {
      overview: 'Learn how to handle errors and exceptions in Python, and master debugging techniques for finding and fixing issues in your code.',
      objectives: [
        'Understand try-except blocks',
        'Work with different exception types',
        'Create custom exceptions',
        'Master debugging techniques'
      ],
      written_guide: `# Error Handling and Debugging in Python

## 1. Try-Except Blocks
Basic error handling structure:

\`\`\`python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An error occurred: {e}")
else:
    print("No errors occurred!")
finally:
    print("This always executes")
\`\`\`

## 2. Common Exception Types
Built-in exceptions and their uses:

\`\`\`python
# TypeError
try:
    result = "2" + 2
except TypeError as e:
    print("Type mismatch!")

# ValueError
try:
    number = int("abc")
except ValueError:
    print("Invalid conversion!")

# FileNotFoundError
try:
    with open("nonexistent.txt") as file:
        content = file.read()
except FileNotFoundError:
    print("File not found!")
\`\`\`

## 3. Custom Exceptions
Creating your own exception classes:

\`\`\`python
class InvalidAgeError(Exception):
    """Raised when age is negative"""
    pass

def set_age(age):
    if age < 0:
        raise InvalidAgeError("Age cannot be negative")
    return age

try:
    set_age(-5)
except InvalidAgeError as e:
    print(e)
\`\`\`

## 4. Debugging Techniques
Using print and logging:

\`\`\`python
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)

def complex_calculation(x, y):
    logging.debug(f"Inputs: x={x}, y={y}")
    result = x * y
    logging.debug(f"Result: {result}")
    return result

# Using Python debugger
import pdb

def problematic_function():
    x = 5
    y = 0
    pdb.set_trace()  # Debugger will pause here
    return x / y
\`\`\`

## 5. Best Practices
Error handling patterns:

\`\`\`python
# Context managers
class Resource:
    def __enter__(self):
        print("Acquiring resource")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Releasing resource")
        return False  # Re-raise any exceptions

with Resource():
    # Use resource here
    pass

# Multiple exception handling
try:
    # Risky operation
    pass
except (TypeError, ValueError) as e:
    # Handle multiple exception types
    pass
\`\`\``,
      assessment_cta: {
        text: 'Would you like to test your knowledge of Error Handling and Debugging?',
        link: '/assessment'
      }
    }
  },
  'file-handling': {
    title: 'File Handling and I/O',
    duration: '45 min',
    content: {
      overview: 'Learn how to work with files in Python, including reading, writing, and managing different file formats.',
      objectives: [
        'Master file reading and writing',
        'Work with different file formats',
        'Understand file modes and encoding',
        'Handle file system operations'
      ],
      written_guide: `# File Handling and I/O in Python

## 1. Basic File Operations
Reading and writing text files:

\`\`\`python
# Writing to a file
with open('example.txt', 'w') as file:
    file.write('Hello, World!')
    file.write('\\nThis is a new line')

# Reading from a file
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)

# Reading lines
with open('example.txt', 'r') as file:
    lines = file.readlines()
    for line in lines:
        print(line.strip())
\`\`\`

## 2. Working with CSV Files
Using the csv module:

\`\`\`python
import csv

# Writing CSV
data = [
    ['Name', 'Age', 'City'],
    ['Alice', 25, 'New York'],
    ['Bob', 30, 'London']
]

with open('data.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)

# Reading CSV
with open('data.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# Using DictReader and DictWriter
with open('data.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row['Name'], row['Age'])
\`\`\`

## 3. JSON File Handling
Working with JSON data:

\`\`\`python
import json

# Writing JSON
data = {
    'name': 'Alice',
    'age': 25,
    'city': 'New York'
}

with open('data.json', 'w') as file:
    json.dump(data, file, indent=4)

# Reading JSON
with open('data.json', 'r') as file:
    loaded_data = json.load(file)
    print(loaded_data['name'])
\`\`\`

## 4. File System Operations
Using os and shutil modules:

\`\`\`python
import os
import shutil

# Check if file exists
if os.path.exists('example.txt'):
    print('File exists')

# Create directory
os.makedirs('new_directory', exist_ok=True)

# List directory contents
files = os.listdir('.')
print(files)

# Copy files
shutil.copy('source.txt', 'destination.txt')

# Move files
shutil.move('old_location.txt', 'new_location.txt')

# Delete files and directories
os.remove('file.txt')
os.rmdir('empty_directory')
shutil.rmtree('directory_with_contents')
\`\`\`

## 5. Binary Files
Working with binary data:

\`\`\`python
# Writing binary data
data = bytes([0x00, 0x01, 0x02, 0x03])
with open('binary.dat', 'wb') as file:
    file.write(data)

# Reading binary data
with open('binary.dat', 'rb') as file:
    binary_data = file.read()
    print(binary_data.hex())
\`\`\``,
      assessment_cta: {
        text: 'Would you like to test your knowledge of File Handling and I/O?',
        link: '/assessment'
      }
    }
  }
}; 