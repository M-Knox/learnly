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

export const pythonDataScienceContent: ModuleContent = {
  'numpy': {
    title: 'NumPy Fundamentals',
    duration: '45 min',
    content: {
      overview: 'NumPy is a fundamental package for scientific computing in Python. It provides support for large, multi-dimensional arrays and matrices, along with a vast collection of mathematical functions to operate on these arrays.',
      objectives: [
        'Understand NumPy arrays and their advantages',
        'Learn array creation and manipulation techniques',
        'Master array operations and broadcasting',
        'Apply linear algebra operations using NumPy'
      ],
      written_guide: `# NumPy Arrays and Operations

## 1. Introduction to NumPy Arrays
NumPy arrays are the foundation of scientific computing in Python. They offer significant advantages over Python lists:
- Faster computation with vectorized operations
- Memory efficiency
- Support for multi-dimensional data structures
- Rich mathematical functions library

Example:
\`\`\`python
import numpy as np

# Creating arrays
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.zeros((3, 3))
arr3 = np.ones((2, 4))
arr4 = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]
\`\`\`

## 2. Array Operations
NumPy provides efficient ways to perform operations on arrays:

### Element-wise Operations
\`\`\`python
# Basic arithmetic
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])

sum_arr = arr1 + arr2  # [5, 7, 9]
mult_arr = arr1 * arr2  # [4, 10, 18]
squared = arr1 ** 2  # [1, 4, 9]
\`\`\`

### Broadcasting
NumPy's broadcasting allows operations between arrays of different shapes:
\`\`\`python
arr = np.array([[1, 2, 3],
                [4, 5, 6]])
scalar = 2

result = arr * scalar  # Multiplies each element by 2
\`\`\`

## 3. Array Indexing and Slicing
NumPy offers powerful indexing capabilities:

### Basic Indexing
\`\`\`python
arr = np.array([[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]])

element = arr[1, 1]  # Returns 5
row = arr[0, :]     # Returns [1, 2, 3]
col = arr[:, 0]     # Returns [1, 4, 7]
\`\`\`

### Boolean Indexing
\`\`\`python
arr = np.array([1, 2, 3, 4, 5])
mask = arr > 2
filtered = arr[mask]  # Returns [3, 4, 5]
\`\`\`

## 4. Linear Algebra Operations
NumPy provides essential linear algebra operations:

### Matrix Operations
\`\`\`python
# Matrix multiplication
a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6], [7, 8]])
result = np.dot(a, b)

# Eigenvalues and eigenvectors
eigenvals, eigenvecs = np.linalg.eig(a)

# Matrix inverse
inv_matrix = np.linalg.inv(a)
\`\`\``,
      assessment_cta: {
        text: 'Would you like to test your knowledge of NumPy Fundamentals?',
        link: '/assessment'
      }
    }
  },
  'pandas': {
    title: 'Data Analysis with Pandas',
    duration: '50 min',
    content: {
      overview: 'Pandas is a powerful data manipulation and analysis library in Python. It provides high-performance, easy-to-use data structures and tools for working with structured data.',
      objectives: [
        'Master Pandas DataFrame and Series objects',
        'Learn data cleaning and preprocessing techniques',
        'Understand data manipulation and transformation',
        'Practice data analysis and aggregation methods'
      ],
      written_guide: `# Data Analysis with Pandas

## 1. Pandas Data Structures
Pandas provides two primary data structures:

### Series
A one-dimensional labeled array:
\`\`\`python
import pandas as pd

# Creating a Series
s = pd.Series([1, 2, 3, 4], index=['a', 'b', 'c', 'd'])
\`\`\`

### DataFrame
A two-dimensional labeled data structure:
\`\`\`python
# Creating a DataFrame
data = {
    'name': ['John', 'Anna', 'Peter'],
    'age': [28, 22, 35],
    'city': ['New York', 'Paris', 'London']
}
df = pd.DataFrame(data)
\`\`\`

## 2. Data Selection and Indexing
Pandas offers multiple ways to select and access data:

### Basic Selection
\`\`\`python
# Select a column
ages = df['age']

# Select multiple columns
subset = df[['name', 'city']]

# Select rows by index
first_row = df.iloc[0]
specific_rows = df.iloc[1:3]
\`\`\`

### Boolean Indexing
\`\`\`python
# Filter data based on conditions
adults = df[df['age'] >= 18]
new_yorkers = df[df['city'] == 'New York']
\`\`\`

## 3. Data Cleaning
Common data cleaning operations:

### Handling Missing Values
\`\`\`python
# Check for missing values
df.isna().sum()

# Fill missing values
df.fillna(0)  # Fill with zeros
df.fillna(method='ffill')  # Forward fill

# Drop missing values
df.dropna()
\`\`\`

### Data Type Conversion
\`\`\`python
# Convert data types
df['age'] = df['age'].astype(float)
df['date'] = pd.to_datetime(df['date'])
\`\`\`

## 4. Data Analysis
Powerful analysis capabilities:

### Aggregation
\`\`\`python
# Basic statistics
df.describe()

# Group by operations
df.groupby('city')['age'].mean()

# Pivot tables
pivot_table = df.pivot_table(
    values='age',
    index='city',
    columns='gender',
    aggfunc='mean'
)
\`\`\``,
      assessment_cta: {
        text: 'Would you like to test your knowledge of Pandas?',
        link: '/assessment'
      }
    }
  },
  'visualization': {
    title: 'Data Visualization Basics',
    duration: '40 min',
    content: {
      overview: 'Data visualization is crucial for understanding patterns, trends, and relationships in data. Python offers several libraries for creating effective visualizations.',
      objectives: [
        'Learn basic plotting with Matplotlib',
        'Create statistical visualizations using Seaborn',
        'Understand different types of plots and their uses',
        'Master visualization customization techniques'
      ],
      written_guide: `# Data Visualization in Python

## 1. Matplotlib Basics
Matplotlib is the foundation for data visualization in Python:

### Basic Plots
\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

# Line plot
x = np.linspace(0, 10, 100)
y = np.sin(x)
plt.plot(x, y)
plt.title('Simple Line Plot')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.show()
\`\`\`

### Multiple Plots
\`\`\`python
# Create subplots
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 4))

ax1.plot(x, np.sin(x))
ax1.set_title('Sine')

ax2.plot(x, np.cos(x))
ax2.set_title('Cosine')

plt.tight_layout()
plt.show()
\`\`\`

## 2. Seaborn Statistical Plots
Seaborn enhances Matplotlib with statistical visualizations:

### Distribution Plots
\`\`\`python
import seaborn as sns

# Histogram
sns.histplot(data=df, x='age', bins=20)

# Box plot
sns.boxplot(data=df, x='category', y='value')

# Violin plot
sns.violinplot(data=df, x='category', y='value')
\`\`\`

### Relationship Plots
\`\`\`python
# Scatter plot with regression line
sns.regplot(data=df, x='x', y='y')

# Pair plot
sns.pairplot(df)

# Heat map
sns.heatmap(correlation_matrix, annot=True)
\`\`\`

## 3. Advanced Customization
Fine-tuning visualizations:

### Styling
\`\`\`python
# Set style
plt.style.use('seaborn')

# Customize colors and markers
plt.plot(x, y, color='#FF5733', marker='o', linestyle='--')

# Adjust text properties
plt.title('Custom Plot', fontsize=14, fontweight='bold')
\`\`\`

### Annotations
\`\`\`python
# Add text annotations
plt.annotate('Peak', xy=(2, 1), xytext=(3, 1.5),
            arrowprops=dict(facecolor='black', shrink=0.05))

# Add legend
plt.legend(['Data Series 1', 'Data Series 2'])
\`\`\``,
      assessment_cta: {
        text: 'Would you like to test your knowledge of Data Visualization?',
        link: '/assessment'
      }
    }
  }
}; 