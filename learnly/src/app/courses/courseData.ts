interface TopicContent {
  overview: string;
  objectives: string[];
  practice: string;
  written_guide?: string;
}

interface Topic {
  id: string;
  title: string;
  duration: string;
  content: TopicContent;
}

interface Module {
  id: string;
  title: string;
  topics: Topic[];
}

interface CourseDetails {
  title: string;
  description: string;
  modules: Module[];
}

interface CourseData {
  [key: string]: CourseDetails;
}

const courseData: CourseData = {
  'machine-learning': {
    title: 'Machine Learning',
    description: 'Dive into the world of Machine Learning. Learn to build intelligent systems that can learn from data, make predictions, and improve automatically through experience.',
    modules: [
      {
        id: 'module1',
        title: 'Introduction to Machine Learning',
        topics: [
          {
            id: 'intro',
            title: 'What is Machine Learning?',
            duration: '25 min',
            content: {
              overview: 'Understanding the fundamentals of Machine Learning',
              objectives: [
                'Define Machine Learning and its importance',
                'Types of Machine Learning',
                'Real-world applications',
                'Machine Learning workflow'
              ],
              practice: 'Identify ML applications in daily life'
            }
          }
        ]
      }
    ]
  },
  'python': {
    title: 'Python Programming',
    description: 'Master Python programming language with focus on data science applications. Learn from basic syntax to advanced data manipulation techniques.',
    modules: [
      {
        id: 'module1',
        title: 'Introduction to Python',
        topics: [
          {
            id: 'basics',
            title: 'Python Basics',
            duration: '45 min',
            content: {
              overview: 'Understanding fundamental Python syntax and programming concepts',
              objectives: [
                'Python syntax and indentation',
                'Variables and data types',
                'Basic operators (arithmetic, comparison, logical)',
                'Comments and documentation'
              ],
              practice: 'Write basic Python programs demonstrating syntax and operators',
              written_guide: `Python is a versatile, high-level programming language known for its readability and simplicity. Its syntax allows developers to express concepts in fewer lines of code compared to languages like C++ or Java.

Key Features of Python Syntax:

1. Indentation:
Python uses indentation to define code blocks, replacing the need for braces {} as in other languages. Consistent indentation is crucial.
Example:
if True:
    print("This is indented correctly.")

2. Variables and Data Types:
Variables in Python are dynamically typed. Common data types include:
- integers (int)
- floating-point numbers (float)
- strings (str)
- booleans (bool)

Example:
age = 25          # int
height = 5.9      # float
name = "Alice"    # str
is_student = True # bool

3. Basic Operators:
Arithmetic Operators: +, -, *, /, // (floor division), % (modulus), ** (exponentiation)
Comparison Operators: ==, !=, >, <, >=, <=
Logical Operators: and, or, not

Example:
result = (5 + 3) * 2  # Arithmetic
is_equal = (10 == 10) # Comparison
is_valid = True and False # Logical

4. Comments:
Use the hash symbol # to add comments in your code. Comments are ignored during execution and are useful for documentation.

Additional Resources:
- Python Official Documentation
- Python Style Guide (PEP 8)`
            }
          },
          {
            id: 'control-structures',
            title: 'Control Structures',
            duration: '40 min',
            content: {
              overview: 'Learn about conditional statements and loops in Python',
              objectives: [
                'if, elif, and else statements',
                'for loops and iteration',
                'while loops and control flow',
                'break and continue statements'
              ],
              practice: 'Implement programs using different control structures',
              written_guide: `Control flow in programming refers to the order in which individual statements, instructions, or function calls are executed or evaluated.

1. Conditional Statements:
if, elif, and else keywords implement conditional logic.

Example:
temperature = 25

if temperature > 30:
    print("It's a hot day.")
elif temperature > 20:
    print("It's a warm day.")
else:
    print("It's a cool day.")

2. Loops:

For Loop:
Iterates over a sequence (list, tuple, string, or range).

Example:
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

While Loop:
Continues execution as long as a condition is true.

Example:
count = 1
while count <= 5:
    print(count)
    count += 1

3. Loop Control Statements:

break: Terminates the loop prematurely
continue: Skips the current iteration
else with loops: Executes when loop completes normally

Example:
for number in range(5):
    if number == 2:
        continue
    print(number)

Practice Exercises:
1. Write a program to check if a number is positive, negative, or zero
2. Create a loop to print the first 10 even numbers
3. Implement a simple calculator using if-elif-else statements`
            }
          },
          {
            id: 'data-types',
            title: 'Data Types and Variables',
            duration: '50 min',
            content: {
              overview: 'Deep dive into Python data types and their operations',
              objectives: [
                'Numbers (int, float) and their operations',
                'Strings and string manipulation',
                'Lists and list comprehension',
                'Tuples and their immutability',
                'Dictionaries and key-value pairs'
              ],
              practice: 'Create programs working with different data types'
            }
          }
        ]
      },
      {
        id: 'module2',
        title: 'Functions and Modules',
        topics: [
          {
            id: 'functions',
            title: 'Defining and Using Functions',
            duration: '45 min',
            content: {
              overview: 'Learn to create and use functions effectively',
              objectives: [
                'Function definition and parameters',
                'Return values and multiple returns',
                'Default arguments and keyword arguments',
                'Variable scope and namespaces'
              ],
              practice: 'Create functions to solve specific programming problems',
              written_guide: `Functions are reusable blocks of code that perform specific tasks. They promote code organization and reusability.

1. Function Definition:
Use the def keyword to define a function.

Syntax:
def function_name(parameters):
    """
    Docstring: Describe the function's purpose
    """
    # Function body
    return result

Example:
def greet(name):
    """
    Function to greet a person by name.
    """
    return f"Hello, {name}!"

2. Parameters and Arguments:
- Parameters: Variables listed in function definition
- Arguments: Actual values passed to the function

Types of Arguments:
- Positional arguments
- Keyword arguments
- Default arguments
- Variable-length arguments (*args, **kwargs)

Example:
def calculate_total(price, tax_rate=0.1):
    return price + (price * tax_rate)

# Different ways to call
total1 = calculate_total(100)  # Using default tax_rate
total2 = calculate_total(100, 0.15)  # Specifying tax_rate

3. Return Values:
Functions can return single or multiple values.

Example:
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers)/len(numbers)

# Unpacking multiple returns
minimum, maximum, average = get_stats([1, 2, 3, 4, 5])

4. Variable Scope:
- Local variables: Defined within a function
- Global variables: Defined outside functions
- global keyword: Modify global variables within functions

Practice Exercises:
1. Write a function to calculate factorial of a number
2. Create a function that accepts variable number of arguments
3. Implement a function with both required and optional parameters`
            }
          },
          {
            id: 'modules',
            title: 'Working with Modules',
            duration: '35 min',
            content: {
              overview: 'Understanding Python modules and imports',
              objectives: [
                'Importing modules and packages',
                'Creating custom modules',
                'Python standard library overview',
                'Package management with pip'
              ],
              practice: 'Build and use custom modules in Python programs'
            }
          }
        ]
      },
      {
        id: 'module3',
        title: 'Data Science Fundamentals',
        topics: [
          {
            id: 'numpy',
            title: 'NumPy Fundamentals',
            duration: '50 min',
            content: {
              overview: 'Master NumPy for numerical computing and data manipulation',
              objectives: [
                'NumPy arrays and operations',
                'Array indexing and slicing',
                'Broadcasting rules',
                'Linear algebra operations'
              ],
              practice: 'Perform complex calculations using NumPy arrays'
            }
          },
          {
            id: 'pandas',
            title: 'Data Analysis with Pandas',
            duration: '55 min',
            content: {
              overview: 'Learn data manipulation and analysis with Pandas',
              objectives: [
                'DataFrame creation and manipulation',
                'Data cleaning and preprocessing',
                'Data aggregation and grouping',
                'Merging and joining datasets'
              ],
              practice: 'Analyze real-world datasets using Pandas'
            }
          },
          {
            id: 'visualization',
            title: 'Data Visualization Basics',
            duration: '45 min',
            content: {
              overview: 'Create effective data visualizations using Python libraries',
              objectives: [
                'Matplotlib basics and plotting',
                'Seaborn for statistical visualization',
                'Interactive plots with Plotly',
                'Customizing visualizations'
              ],
              practice: 'Create various types of plots and charts'
            }
          }
        ]
      },
      {
        id: 'module4',
        title: 'Advanced Python Concepts',
        topics: [
          {
            id: 'oop',
            title: 'Object-Oriented Programming',
            duration: '60 min',
            content: {
              overview: 'Master object-oriented programming in Python',
              objectives: [
                'Classes and objects',
                'Inheritance and polymorphism',
                'Encapsulation and abstraction',
                'Magic methods and properties'
              ],
              practice: 'Design and implement class hierarchies'
            }
          },
          {
            id: 'error-handling',
            title: 'Error Handling and Debugging',
            duration: '40 min',
            content: {
              overview: 'Learn to handle errors and debug Python programs',
              objectives: [
                'Try-except blocks',
                'Custom exceptions',
                'Debugging techniques',
                'Logging and error tracking'
              ],
              practice: 'Implement error handling in Python programs'
            }
          },
          {
            id: 'file-handling',
            title: 'File Handling and I/O',
            duration: '45 min',
            content: {
              overview: 'Work with files and handle input/output operations',
              objectives: [
                'Reading and writing files',
                'Working with CSV and JSON',
                'File system operations',
                'Context managers (with statement)'
              ],
              practice: 'Create programs that process files and handle I/O'
            }
          }
        ]
      }
    ]
  },
  'statistics': {
    title: 'Statistics',
    description: 'Understanding statistical concepts and their application in data science.',
    modules: [
      {
        id: 'module1',
        title: 'Descriptive Statistics',
        topics: [
          {
            id: 'measures',
            title: 'Measures of Central Tendency',
            duration: '35 min',
            content: {
              overview: 'Learn about basic statistical measures',
              objectives: [
                'Mean, median, and mode',
                'Range and variance',
                'Standard deviation',
                'Data distribution'
              ],
              practice: 'Calculate statistical measures for a dataset'
            }
          },
          {
            id: 'visualization',
            title: 'Statistical Visualization',
            duration: '40 min',
            content: {
              overview: 'Create effective statistical visualizations',
              objectives: [
                'Histograms',
                'Box plots',
                'Scatter plots',
                'Distribution plots'
              ],
              practice: 'Create visualizations using Python libraries'
            }
          }
        ]
      },
      {
        id: 'module2',
        title: 'Inferential Statistics',
        topics: [
          {
            id: 'hypothesis',
            title: 'Hypothesis Testing',
            duration: '45 min',
            content: {
              overview: 'Understanding statistical hypothesis testing',
              objectives: [
                'Null and alternative hypotheses',
                'P-values',
                'Confidence intervals',
                'Type I and Type II errors'
              ],
              practice: 'Conduct hypothesis tests on real data'
            }
          }
        ]
      }
    ]
  },
  'probability': {
    title: 'Probability',
    description: 'Master probability concepts essential for data science and machine learning.',
    modules: [
      {
        id: 'module1',
        title: 'Basic Probability Concepts',
        topics: [
          {
            id: 'intro',
            title: 'Introduction to Probability',
            duration: '30 min',
            content: {
              overview: 'Learn fundamental probability concepts',
              objectives: [
                'Sample spaces and events',
                'Probability axioms',
                'Conditional probability',
                'Independence'
              ],
              practice: 'Solve basic probability problems'
            }
          },
          {
            id: 'distributions',
            title: 'Probability Distributions',
            duration: '45 min',
            content: {
              overview: 'Understanding common probability distributions',
              objectives: [
                'Discrete distributions',
                'Continuous distributions',
                'Normal distribution',
                'Binomial distribution'
              ],
              practice: 'Work with probability distributions'
            }
          }
        ]
      }
    ]
  },
  'data-visualization': {
    title: 'Data Visualization',
    description: 'Create compelling visual representations of data using modern tools.',
    modules: [
      {
        id: 'module1',
        title: 'Visualization Fundamentals',
        topics: [
          {
            id: 'principles',
            title: 'Principles of Data Visualization',
            duration: '35 min',
            content: {
              overview: 'Learn core principles of effective data visualization',
              objectives: [
                'Visual perception',
                'Chart selection',
                'Color theory',
                'Layout design'
              ],
              practice: 'Create basic visualizations'
            }
          },
          {
            id: 'tools',
            title: 'Visualization Tools',
            duration: '40 min',
            content: {
              overview: 'Master popular visualization libraries',
              objectives: [
                'Matplotlib basics',
                'Seaborn for statistical visualization',
                'Interactive plots with Plotly',
                'Dashboard creation'
              ],
              practice: 'Build interactive visualizations'
            }
          }
        ]
      }
    ]
  },
  'deep-learning': {
    title: 'Deep Learning',
    description: 'Explore neural networks and advanced deep learning concepts.',
    modules: [
      {
        id: 'module1',
        title: 'Neural Networks Fundamentals',
        topics: [
          {
            id: 'basics',
            title: 'Introduction to Neural Networks',
            duration: '45 min',
            content: {
              overview: 'Understanding the basics of neural networks',
              objectives: [
                'Neurons and layers',
                'Activation functions',
                'Forward propagation',
                'Backpropagation'
              ],
              practice: 'Implement a simple neural network'
            }
          },
          {
            id: 'architectures',
            title: 'Deep Learning Architectures',
            duration: '50 min',
            content: {
              overview: 'Learn about different neural network architectures',
              objectives: [
                'Convolutional Neural Networks',
                'Recurrent Neural Networks',
                'Transformers',
                'Transfer Learning'
              ],
              practice: 'Build and train different network architectures'
            }
          }
        ]
      }
    ]
  },
  'product-management': {
    title: 'Product Management',
    description: 'Learn product management principles and their application in data-driven projects.',
    modules: [
      {
        id: 'module1',
        title: 'Product Management Fundamentals',
        topics: [
          {
            id: 'intro',
            title: 'Introduction to Product Management',
            duration: '35 min',
            content: {
              overview: 'Understanding the role of a product manager in data-driven organizations',
              objectives: [
                'Product management principles',
                'Product lifecycle management',
                'Stakeholder management',
                'Product strategy'
              ],
              practice: 'Create a product vision statement'
            }
          },
          {
            id: 'research',
            title: 'Product Research and Analysis',
            duration: '40 min',
            content: {
              overview: 'Learn how to conduct effective product research',
              objectives: [
                'Market research techniques',
                'Competitive analysis',
                'User research methods',
                'Data-driven decision making'
              ],
              practice: 'Conduct a competitive analysis'
            }
          }
        ]
      },
      {
        id: 'module2',
        title: 'Product Development Process',
        topics: [
          {
            id: 'roadmap',
            title: 'Product Roadmap Creation',
            duration: '45 min',
            content: {
              overview: 'Learn to create and manage product roadmaps',
              objectives: [
                'Roadmap planning',
                'Feature prioritization',
                'Timeline management',
                'Resource allocation'
              ],
              practice: 'Build a product roadmap'
            }
          },
          {
            id: 'metrics',
            title: 'Product Metrics and Analytics',
            duration: '40 min',
            content: {
              overview: 'Understanding key product metrics and analytics',
              objectives: [
                'Key performance indicators',
                'User engagement metrics',
                'Growth metrics',
                'Analytics tools'
              ],
              practice: 'Define metrics for a product feature'
            }
          }
        ]
      }
    ]
  },
  'business-case': {
    title: 'Business Case Analysis',
    description: 'Develop skills in analyzing and presenting business cases with data.',
    modules: [
      {
        id: 'module1',
        title: 'Business Case Fundamentals',
        topics: [
          {
            id: 'intro',
            title: 'Introduction to Business Case Analysis',
            duration: '30 min',
            content: {
              overview: 'Learn the basics of business case analysis',
              objectives: [
                'Business case components',
                'Problem statement definition',
                'Solution proposal',
                'Cost-benefit analysis'
              ],
              practice: 'Write a problem statement'
            }
          },
          {
            id: 'data-analysis',
            title: 'Data Analysis for Business Cases',
            duration: '45 min',
            content: {
              overview: 'Using data to support business cases',
              objectives: [
                'Data collection methods',
                'Analysis techniques',
                'Data visualization',
                'Insights generation'
              ],
              practice: 'Analyze a sample business case dataset'
            }
          }
        ]
      },
      {
        id: 'module2',
        title: 'Business Case Presentation',
        topics: [
          {
            id: 'storytelling',
            title: 'Data Storytelling',
            duration: '40 min',
            content: {
              overview: 'Learn to present business cases effectively',
              objectives: [
                'Narrative structure',
                'Data visualization',
                'Presentation techniques',
                'Stakeholder communication'
              ],
              practice: 'Create a business case presentation'
            }
          }
        ]
      }
    ]
  },
  'modeling': {
    title: 'Data Modeling',
    description: 'Learn database modeling and data structure optimization techniques.',
    modules: [
      {
        id: 'module1',
        title: 'Data Modeling Fundamentals',
        topics: [
          {
            id: 'concepts',
            title: 'Basic Concepts and Principles',
            duration: '35 min',
            content: {
              overview: 'Understanding core data modeling concepts',
              objectives: [
                'Entity-relationship diagrams',
                'Data normalization',
                'Database schemas',
                'Data types and constraints'
              ],
              practice: 'Create an ER diagram'
            }
          },
          {
            id: 'relational',
            title: 'Relational Data Modeling',
            duration: '45 min',
            content: {
              overview: 'Learn relational database modeling',
              objectives: [
                'Table design',
                'Relationships and keys',
                'Normalization forms',
                'Index design'
              ],
              practice: 'Design a normalized database schema'
            }
          }
        ]
      },
      {
        id: 'module2',
        title: 'Advanced Data Modeling',
        topics: [
          {
            id: 'nosql',
            title: 'NoSQL Data Modeling',
            duration: '40 min',
            content: {
              overview: 'Understanding NoSQL database modeling',
              objectives: [
                'Document databases',
                'Key-value stores',
                'Graph databases',
                'Schema design patterns'
              ],
              practice: 'Model data for a NoSQL database'
            }
          }
        ]
      }
    ]
  },
  'linear-regression': {
    title: 'Linear Regression',
    description: 'Master linear regression techniques for predictive modeling.',
    modules: [
      {
        id: 'module1',
        title: 'Simple Linear Regression',
        topics: [
          {
            id: 'basics',
            title: 'Fundamentals of Linear Regression',
            duration: '40 min',
            content: {
              overview: 'Understanding simple linear regression',
              objectives: [
                'Correlation vs causation',
                'Least squares method',
                'Model assumptions',
                'Residual analysis'
              ],
              practice: 'Implement simple linear regression'
            }
          },
          {
            id: 'evaluation',
            title: 'Model Evaluation',
            duration: '35 min',
            content: {
              overview: 'Learn to evaluate regression models',
              objectives: [
                'R-squared',
                'Mean squared error',
                'Model validation',
                'Cross-validation'
              ],
              practice: 'Evaluate regression model performance'
            }
          }
        ]
      },
      {
        id: 'module2',
        title: 'Multiple Linear Regression',
        topics: [
          {
            id: 'multiple',
            title: 'Multiple Regression Analysis',
            duration: '45 min',
            content: {
              overview: 'Advanced regression techniques',
              objectives: [
                'Multiple predictors',
                'Feature selection',
                'Interaction terms',
                'Polynomial regression'
              ],
              practice: 'Build a multiple regression model'
            }
          }
        ]
      }
    ]
  },
  'nlp': {
    title: 'Natural Language Processing',
    description: 'Learn text analysis and language processing techniques.',
    modules: [
      {
        id: 'module1',
        title: 'NLP Fundamentals',
        topics: [
          {
            id: 'basics',
            title: 'Introduction to NLP',
            duration: '35 min',
            content: {
              overview: 'Understanding basic NLP concepts',
              objectives: [
                'Text preprocessing',
                'Tokenization',
                'Part-of-speech tagging',
                'Named entity recognition'
              ],
              practice: 'Implement basic text processing'
            }
          },
          {
            id: 'vectorization',
            title: 'Text Vectorization',
            duration: '40 min',
            content: {
              overview: 'Learn text vectorization techniques',
              objectives: [
                'Bag of words',
                'TF-IDF',
                'Word embeddings',
                'Document embeddings'
              ],
              practice: 'Create text vectors'
            }
          }
        ]
      },
      {
        id: 'module2',
        title: 'Advanced NLP',
        topics: [
          {
            id: 'applications',
            title: 'NLP Applications',
            duration: '45 min',
            content: {
              overview: 'Explore practical NLP applications',
              objectives: [
                'Sentiment analysis',
                'Text classification',
                'Topic modeling',
                'Language generation'
              ],
              practice: 'Build a sentiment analyzer'
            }
          },
          {
            id: 'transformers',
            title: 'Transformer Models',
            duration: '50 min',
            content: {
              overview: 'Understanding transformer architecture',
              objectives: [
                'Attention mechanism',
                'BERT and GPT',
                'Fine-tuning',
                'Transfer learning'
              ],
              practice: 'Fine-tune a transformer model'
            }
          }
        ]
      }
    ]
  }
};

export default courseData; 