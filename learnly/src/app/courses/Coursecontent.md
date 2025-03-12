import { getPythonTopicContent, getPythonModuleTopics, getPythonModuleTitle } from './courses/pythonCourseIndex';

COURSE CONTENTS 
Course 1: Python for Data ScienceModule 1: Introduction to PythonTopic 1: Python Basics
Written Guide: Introduction to Python Syntax
Python is a versatile, high-level programming language known for its readability and simplicity. Its syntax allows developers to express concepts in fewer lines of code compared to languages like C++ or Java.
Key Features of Python Syntax:
Indentation: Python uses indentation to define code blocks, replacing the need for braces {} as in other languages. Consistent indentation is crucial, as inconsistent use can lead to errors.
Example:
if True:
    print("This is indented correctly.")
Variables and Data Types: Variables in Python are dynamically typed, meaning you don't need to declare their type explicitly. Common data types include integers (int), floating-point numbers (float), strings (str), and booleans (bool).
Example:
age = 25          # int
height = 5.9      # float
name = "Alice"    # str
is_student = True # bool
Comments: Use the hash symbol # to add comments in your code. Comments are ignored during execution and are useful for documentation.
Example:
# This is a single-line comment
Operators:
Arithmetic Operators: +, -, *, /, // (floor division), % (modulus), ** (exponentiation)
Comparison Operators: ==, !=, >, <, >=, <=
Logical Operators: and, or, not
Example:
result = (5 + 3) * 2  # Arithmetic
is_equal = (10 == 10) # Comparison
is_valid = True and False # Logical
Control Structures:
Conditional Statements: Use if, elif, and else to make decisions in your code.
Example:
if age > 18:
    print("Adult")
elif age > 12:
    print("Teenager")
else:
    print("Child")
Loops:
for Loop: Iterate over a sequence (like a list or string).
Example:
for i in range(5):
    print(i)
while Loop: Continue executing as long as a condition is true.
Example:
count = 0
while count < 5:
    print(count)
    count += 1
Functions: Define reusable blocks of code using the def keyword.
Example:
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
Imports: Leverage Python's extensive standard library by importing modules.
Example:
import math
print(math.sqrt(16))
Additional Resources:
Python Official Documentation: The authoritative source for Python's syntax and features.
Python Syntax and Semantics: A comprehensive overview of Python's syntax rules and semantic 
Topic 2: Data Types and Variables
Written Guide: Understanding Numbers, Strings, Lists, Tuples, and Dictionaries
Python offers a rich set of data types to handle various kinds of data efficiently.
Numbers:
Integers (int): Whole numbers, positive or negative, without decimals.
Example:
age = 30
Floating-Point Numbers (float): Numbers with a fractional part.
Example:
price = 19.99
Strings (str): Sequences of characters used to represent text. Strings can be enclosed in single, double, or triple quotes.
Example:
greeting = "Hello, World!"
Strings are immutable, meaning their content cannot be changed after creation.
Lists (list): Ordered, mutable collections that can hold items of different data types.
Example:
fruits = ["apple", "banana", "cherry"]
Lists support various operations like indexing, slicing, appending, and removing elements.
Example:
fruits.append("date")  # Adds 'date' to the list
Tuples (tuple): Ordered, immutable collections. Once created, their elements cannot be modified.
Example:
coordinates = (10.0, 20.0)
Tuples are often used to represent fixed collections of items.
Dictionaries (dict): Unordered collections of key-value pairs, where keys are unique and immutable Module 2: Control Flow and Functions
Topic 1: Conditional Statements and Loops
Written Guide: Understanding Conditional Statements and Loops
Control flow in programming refers to the order in which individual statements, instructions, or function calls are executed or evaluated. In Python, control flow is managed using conditional statements and loops, which allow for decision-making and repeated execution of code blocks.
1. Conditional Statements:
Conditional statements enable the execution of specific code blocks based on whether a condition is true or false. Python provides the if, elif, and else keywords to implement conditional logic.
Example:
temperature = 25

if temperature > 30:
    print("It's a hot day.")
elif temperature > 20:
    print("It's a warm day.")
else:
    print("It's a cool day.")
In this example:
If temperature is greater than 30, it prints "It's a hot day."
If temperature is greater than 20 but not greater than 30, it prints "It's a warm day."
If temperature is 20 or less, it prints "It's a cool day."
2. Loops:
Loops are used to execute a block of code repeatedly as long as a specified condition is met. Python primarily uses two types of loops: for loops and while loops.
for Loop:
The for loop iterates over a sequence (such as a list, tuple, string, or range) and executes the code block for each item in the sequence.
Example:
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
Output:
apple
banana
cherry
In this example, the loop iterates over each item in the fruits list and prints it.
while Loop:
The while loop continues to execute a block of code as long as a specified condition is true.
Example:
count = 1

while count <= 5:
    print(count)
    count += 1
Output: 1 2 3 4  5
Here, the loop starts with count equal to 1 and continues to execute until count exceeds 5. The count += 1 statement increments the value of count by 1 in each iteration.
3. Loop Control Statements:
Python provides control statements to manage the flow of loops:
break Statement:
Terminates the loop prematurely, regardless of the original loop condition.
Example:
for number in range(10):
    if number == 5:
        break
    print(number)
Output: 0 1  2 3  4
The loop stops when number equals 5 due to the break statement.
continue Statement:
Skips the current iteration and proceeds to the next iteration of the loop.
Example:
for number in range(5):
    if number == 2:
        continue
    print(number)
Output: 0 1 2  3 4
The number 2 is skipped due to the continue statement.
else Clause with Loops:
An else clause can be used with loops to execute a block of code when the loop is not terminated by a break statement.
Example:
for number in range(5):
    print(number)
else:
    print("Loop completed without break.")
Output:
If the loop is exited normally (without encountering a break), the else block is executed.
Additional Resources:
Wikipedia: Control Flow: An in-depth article on control flow mechanisms in programming languages.

Topic 2: Functions and Modules
Written Guide: Defining and Using Functions and Modules
Functions and modules are fundamental components in Python that promote code reusability, organization, and modularity.
1. Functions:
Functions are reusable blocks of code that perform a specific task. They allow for better organization and avoid redundancy by enabling code reuse.
Defining Functions:
Use the def keyword to define a function, followed by the function name and parentheses enclosing any parameters.
Syntax:
def function_name(parameters):
    """
    Docstring: Describe the function's purpose.
    """
    # Function body
    return result
Example:
def greet(name):
    """
    Function to greet a person by name.
    """
    return f"Hello, {name}!"

print(greet("Alice"))
Output:
Hello, Alice!
Function Parameters and Arguments:
Functions can accept parameters to make them more flexible and reusable. Parameters are specified within the parentheses during function definition, and arguments are the actual values passed to the function when it is called.
Example:
def add(a, b):
    """
    Function to add two numbers.
    """
    return a + b

result = add(5, 3)
print(result)
Output:
Course 2: Data Visualization with PythonModule 1: Introduction to Data VisualizationTopic 1: Why Data Visualization Matters
Written Guide: Understanding the Importance of Data Visualization
Data visualization is the graphical representation of information and data. By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data.
1. The Role of Data Visualization:
Simplifying Complex Data: Transforms large datasets into visual representations, making it easier to comprehend complex information.
Identifying Patterns and Trends: Helps in quickly spotting patterns, trends, and correlations that might not be evident in raw data.
Facilitating Decision Making: Enables stakeholders to make informed decisions based on visual insights.
2. Real-World Applications:
Business Intelligence: Companies use dashboards to monitor performance metrics.
Healthcare: Visualizing patient data to track health trends.
Journalism: Presenting data-driven stories to inform the public.
3. Key Principles of Effective Data Visualization:
Clarity: Ensure the visualization communicates information clearly.
Accuracy: Represent data truthfully without distortion.
Aesthetics: Use design elements to enhance understanding, not distract.
Additional Resources:
Data Visualization: A Practical Introduction by Kieran Healy
The Visual Display of Quantitative Information by Edward R. Tufte

Topic 2: Getting Started with Matplotlib
Written Guide: Introduction to Matplotlib
Matplotlib is a widely-used Python library for creating static, animated, and interactive visualizations. It offers a high-level plotting interface and extensive customization options.
1. Installing Matplotlib:
To install Matplotlib, use the following pip command:
pip install matplotlib
2. Creating a Simple Plot:
Here's how to create a basic line plot using Matplotlib:
import matplotlib.pyplot as plt

# Data
x = [0, 1, 2, 3, 4]
y = [0, 1, 4, 9, 16]

# Create plot
plt.plot(x, y, marker='o', linestyle='-', color='b', label='y = x^2')

# Add title and labels
plt.title('Simple Line Plot')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')

# Add legend
plt.legend()

# Display plot
plt.show()
Explanation:
Importing pyplot: matplotlib.pyplot is imported as plt to access plotting functions.
Data Preparation: Lists x and y contain the data points.
Plotting Data: plt.plot() creates the plot with specified markers, line styles, colors, and labels.
Adding Titles and Labels: plt.title(), plt.xlabel(), and plt.ylabel() add descriptive text.
Displaying the Plot: plt.show() renders the plot on the screen.
3. Customizing Plots:
Matplotlib offers various customization options, such as adjusting figure sizes, adding grids, and setting axis limits.
Example:
import matplotlib.pyplot as plt
import numpy as np

# Data
x = np.linspace(0, 2 * np.pi, 100)
y = np.sin(x)

# Create plot
plt.figure(figsize=(10, 5))
plt.plot(x, y, label='Sine Wave', color='r', linewidth=2)

# Customize plot
plt.title('Sine Wave')
plt.xlabel('Angle [radians]')
plt.ylabel('Amplitude')
plt.grid(True)
plt.legend()

# Display plot
plt.show()
Explanation:
np.linspace: Generates 100 evenly spaced values between 0 and 2π2\pi.
np.sin: Computes the sine of each value.
plt.figure(figsize=(10, 5)): Sets the figure size to 10 inches by 5 inches.
plt.grid(True): Adds a grid to the plot for better readability.
Additional Resources:
Matplotlib Documentation: https://matplotlib.org/stable/contents.html
Matplotlib Tutorials: https://matplotlib.org/stable/tutorials/index.html
Module 2: Advanced Data Visualization
Topic 1: Seaborn for Statistical Plots
Written Guide: Using Seaborn for Enhanced Data Visualization
Seaborn is a Python data visualization library based on Matplotlib that provides a high-level interface for drawing attractive and informative statistical graphics.
1. Installing Seaborn:
To install Seaborn, use the following pip command:
pip install seaborn
2. Creating Statistical Plots with Seaborn:
Seaborn simplifies the process of creating complex statistical plots. Here are a few examples:
Heatmap:
A heatmap displays matrix-like data with colors representing values.
import seaborn as sns
import numpy as np
import matplotlib.pyplot as plt

# Generate random data
data = np.random.rand(10, 12)

# Create heatmap
sns.heatmap(data, annot=True, fmt=".2f", cmap='viridis')

# Add title
plt.title('Heatmap Example')

# Display plot
plt.show()

Course 3: Machine Learning BasicsModule 1: Introduction to Machine LearningTopic 1: What is Machine Learning?
Written Guide: Overview and Types of Machine Learning
Machine Learning (ML) is a branch of artificial intelligence that focuses on developing algorithms that enable computers to learn from and make decisions based on data, without being explicitly programmed for each task. Arthur Samuel, a pioneer in the field, defined machine learning as a "field of study that gives computers the ability to learn without being explicitly programmed." citeturn0search24
1. Key Concepts in Machine Learning:
Algorithms: Procedures or formulas for solving problems, which in ML are designed to learn patterns from data.
Models: Representations built by algorithms that can make predictions or decisions based on new data.
Training Data: Datasets used to train algorithms to recognize patterns.
Features: Individual measurable properties or characteristics used in the modeling process.
2. Types of Machine Learning:
Supervised Learning: Models are trained using labeled data, where each input is associated with a known output. The goal is to learn a mapping from inputs to outputs. Common algorithms include linear regression, logistic regression, and support vector machines.
Unsupervised Learning: Models work with unlabeled data and aim to uncover hidden patterns or intrinsic structures. Techniques such as clustering (e.g., k-means) and dimensionality reduction (e.g., principal component analysis) are commonly used.
Reinforcement Learning: Models learn to make decisions by performing certain actions and receiving feedback in the form of rewards or penalties. This approach is often used in robotics and game playing.
3. Applications of Machine Learning:
Natural Language Processing (NLP): Enables machines to understand and respond to human language, powering applications like chatbots and language translation.
Computer Vision: Allows computers to interpret and process visual information from the world, such as recognizing objects in images.
Recommendation Systems: Provide personalized suggestions to users based on their behavior and preferences, commonly seen in platforms like Netflix and Amazon.
Additional Resources:
Book: "The Hundred-Page Machine Learning Book" by Andriy Burkov.
Online Course: "Machine Learning" by Andrew Ng on Coursera.

Topic 2: Setting Up Scikit-Learn
Written Guide: Installing and Configuring Scikit-Learn
Scikit-Learn is a powerful Python library for machine learning, offering simple and efficient tools for data analysis and modeling.
1. Installing Scikit-Learn:
To install Scikit-Learn and its dependencies, use the following pip command:
pip install scikit-learn
2. Verifying the Installation:
To ensure Scikit-Learn is installed correctly, you can check its version:
import sklearn
print(sklearn.__version__)
3. Basic Workflow in Scikit-Learn:
Scikit-Learn's workflow typically involves:
Loading Data: Using datasets from Scikit-Learn or external sources.
Preprocessing: Cleaning and transforming data into a suitable format.
Modeling: Selecting and training a machine learning model.
Evaluation: Assessing the model's performance using metrics like accuracy or mean squared error.
Prediction: Making predictions on new data.
4. Example: Training a Simple Classifier
Here's an example of training a k-nearest neighbors (KNN) classifier using Scikit-Learn:
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

# Load dataset
iris = load_iris()
X, y = iris.data, iris.target

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the model
knn = KNeighborsClassifier(n_neighbors=3)

# Train the model
knn.fit(X_train, y_train)

# Make predictions
y_pred = knn.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy:.2f}')
.
Additional Resources:
Scikit-Learn Documentation: https://scikit-learn.org/stable/user_guide.html
Tutorial: "An Introduction to Machine Learning with Scikit-Learn .
Module 2: Supervised LearningTopic 1: Linear Regression
Written Guide: Understanding Regression Models
Linear regression is a foundational statistical technique used to model the relationship between a dependent variable and one or more independent variables. By fitting a linear equation to observed data, it allows for predictions and insights into the strength and nature of relationships between variables.
1. Simple Linear Regression:
In simple linear regression, we examine the relationship between two variables by fitting a straight line to the data points. The model is represented as:
y=β0+β1x+εy = \beta_0 + \beta_1 x + \varepsilon
Where:
yy is the dependent variable.
xx is the independent variable.
β0\beta_0 is the y-intercept.
β1\beta_1 is the slope of the line.
ε\varepsilon is the error term, accounting for variability not explained by the model.
2. Estimating Parameters:
The parameters β0\beta_0 and β1\beta_1 are estimated using the least squares method, which minimizes the sum of the squared differences between the observed values and those predicted by the linear model. The estimators are calculated as:
β^1=∑i=1n(xi−xˉ)(yi−yˉ)∑i=1n(xi−xˉ)2\hat{\beta}_1 = \frac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^n (x_i - \bar{x})^2}
β^0=yˉ−β^1xˉ\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}
Where:
xˉ\bar{x} and yˉ\bar{y} are the means of the independent and dependent variables, respectively.
3. Assumptions of Linear Regression:
For the linear regression model to be valid, certain assumptions must be met:
Linearity: The relationship between the independent and dependent variables is linear.
Independence: Observations are independent of each other.
Homoscedasticity: The residuals (differences between observed and predicted values) have constant variance.
Normality: The residuals are normally distributed.
4. Model Evaluation Metrics:
To assess the performance of a linear regression model, several metrics are commonly used:
R-squared (R2R^2): Indicates the proportion of the variance in the dependent variable that is predictable from the independent variable(s).
Adjusted R-squared: Adjusts the R2R^2 value based on the number of predictors in the model, providing a more accurate measure in multiple regression scenarios.
Mean Squared Error (MSE): The average of the squared differences between observed and predicted values.
5. Applications of Linear Regression:
Linear regression is widely used across various fields, including:
Economics: To model relationships between economic indicators.
Biology: To understand relationships between biological variables.
Engineering: For predictive maintenance and quality control.
Additional Resources:
Book: "An Introduction to Statistical Learning" by Gareth James, Daniela Witten, Trevor Hastie, and Robert Tibshirani.
Online Course: "Regression Models" by Johns Hopkins University on Coursera.
Course 4: Deep LearningModule 1: Introduction to Deep Learning
Topic 1: Understanding Deep Learning
Written Guide: Overview and Key Concepts
Deep learning is a specialized subset of machine learning that utilizes neural networks with multiple layers to model complex patterns in data. By simulating the human brain's interconnected neuron structure, deep learning systems can learn and make decisions from vast amounts of data. citeturn0search24
1. Neural Networks:
Structure: Composed of layers of interconnected nodes (neurons), including an input layer, one or more hidden layers, and an output layer. Each neuron applies a mathematical function to its inputs and passes the result to the next layer.
Activation Functions: Introduce non-linearity into the network, enabling it to learn complex patterns. Common activation functions include ReLU (Rectified Linear Unit), sigmoid, and tanh.
2. Deep Neural Networks (DNNs):
Definition: Neural networks with multiple hidden layers between input and output layers, allowing for the modeling of intricate data representations.
Advantages: Capable of automatically learning hierarchical feature representations, reducing the need for manual feature extraction.
3. Learning Process:
Forward Propagation: Data passes through the network, producing an output.
Loss Function: Measures the difference between the predicted output and the actual target, guiding the learning process.
Backward Propagation (Backpropagation): Adjusts the network's weights based on the loss, using optimization algorithms like gradient descent to minimize errors.
4. Applications of Deep Learning:
Image and Speech Recognition: Powering technologies like facial recognition systems and voice-activated assistants.
Natural Language Processing (NLP): Enabling language translation, sentiment analysis, and chatbots.
Autonomous Vehicles: Assisting in object detection and decision-making processes for self-driving cars.
Additional Resources:
Book: "Deep Learning" by Ian Goodfellow, Yoshua Bengio, and Aaron Courville.
Online Course: "Deep Learning Specialization" by Andrew Ng on Coursera.

Topic 2: Deep Learning Frameworks
Written Guide: Overview of Popular Deep Learning Frameworks
Deep learning frameworks are essential tools that provide building blocks to design, train, and validate deep neural networks efficiently. They abstract the complex mathematical computations, allowing practitioners to focus on designing models without delving into underlying algorithms.
1. TensorFlow:
Developed by: Google Brain Team.
Features:
Offers a comprehensive ecosystem for building and deploying machine learning models.
Supports both high-level APIs (like Keras) and low-level operations for flexibility.
Facilitates deployment across various platforms, from servers to mobile devices.
Use Cases: Widely used in research and production environments for tasks like image recognition, natural language processing, and reinforcement learning.
2. PyTorch:
Developed by: Facebook's AI Research lab (FAIR).
Features:
Provides dynamic computation graphs, allowing for real-time network behavior modifications.
Known for its intuitive interface and ease of use, making it popular in academic research.
Strong community support with numerous tutorials and pre-trained models available.
Use Cases: Commonly used for research in computer vision, NLP, and time-series forecasting.
3. Keras:
Developed by: Originally an independent project, now part of the TensorFlow ecosystem.
Features:
Acts as a high-level API, simplifying the creation of neural networks.
Supports multiple backends, including TensorFlow, Theano, and Microsoft Cognitive Toolkit (CNTK).
Emphasizes user-friendliness and modularity, allowing for quick prototyping.
Use Cases: Ideal for beginners and for rapid development of deep learning models.
4. MXNet:
Developed by: Apache Software Foundation.
Features:
Designed for efficiency and scalability, supporting both symbolic and imperative programming.
Optimized for multiple GPUs, making it suitable for large-scale deployments.
Supports a wide range of languages, including Python, Scala, and Julia.
Use Cases: Employed in industry applications requiring scalable and efficient training, such as recommendation systems and speech recognition.
5. Caffe:
Developed by: Berkeley Vision and Learning Center (BVLC).
Features:
Specializes in convolutional neural networks (CNNs) for image classification tasks.
Offers a speed-optimized architecture, suitable for real-time applications.
Utilizes a modular design, allowing for easy extension and integration.
Use Cases: Primarily used in computer vision tasks, such as image segmentation and object detection.
Additional Resources:
TensorFlow: https://www.tensorflow.org/
PyTorch: https://pytorch.org/
Keras: https://keras.io/
MXNet: https://mxnet.apache.org/
Course 5: Statistical ModelingModule 1: Introduction to Statistical ModelingTopic 1: Fundamentals of Statistical Modeling
Written Guide: Overview and Key Concepts
Statistical modeling involves creating mathematical representations of real-world processes to analyze data, identify patterns, and make predictions. By establishing relationships between variables, statistical models enable data scientists to understand underlying structures and derive actionable insights.
1. Key Components of Statistical Models:
Variables: Elements that can take on different values.
Independent Variables (Predictors): Factors that influence other variables.
Dependent Variables (Responses): Outcomes affected by independent variables.
Parameters: Quantities that define the relationship between variables within the model.
Error Term: Represents the variability in the data not explained by the model, accounting for randomness and unobserved factors.
2. Types of Statistical Models:
Deterministic Models: Assume no randomness; given the inputs, the output is always the same.
Probabilistic (Stochastic) Models: Incorporate randomness, acknowledging that the same input can produce different outputs due to inherent variability.
3. Common Statistical Modeling Techniques:
Linear Regression: Models the relationship between a dependent variable and one or more independent variables by fitting a linear equation.
Logistic Regression: Used for binary outcome variables, modeling the probability of an event occurring.
ANOVA (Analysis of Variance): Assesses differences between group means to determine if at least one group differs significantly.
Time Series Analysis: Analyzes data points collected or recorded at specific time intervals to identify trends, cycles, and seasonal variations.
4. Assumptions in Statistical Modeling:
Linearity: Assumes a straight-line relationship between predictors and the outcome.
Independence: Observations are independent of each other.
Homoscedasticity: Constant variance of errors across all levels of the independent variables.
Normality: Errors (residuals) are normally distributed.
5. Model Evaluation Metrics:
R-squared: Proportion of variance in the dependent variable explained by the independent variables.
Adjusted R-squared: Adjusted for the number of predictors, providing a more accurate measure in multiple regression.
AIC/BIC (Akaike/Bayesian Information Criterion): Metrics for model selection, balancing model fit and complexity.
Residual Analysis: Examining the differences between observed and predicted values to assess model fit.
6. Applications of Statistical Modeling:
Economics: Forecasting economic indicators like inflation and unemployment rates.
Healthcare: Predicting patient outcomes and the spread of diseases.
Marketing: Analyzing consumer behavior and optimizing advertising strategies.
Environmental Science: Modeling climate change and its impact on ecosystems.
Additional Resources:
Book: "Applied Linear Statistical Models" by Michael H. Kutner, Christopher J. Nachtsheim, and John Neter.
Online Course: "Statistical Modeling for Data Science Applications" by the University of Colorado Boulder on Coursera.

Topic 2: Handling Missing Data in Statistical Modeling
Written Guide: Techniques and Best Practices
Missing data is a common issue in statistical modeling, arising when no value is recorded for a variable in an observation. Proper handling of missing data is crucial, as inappropriate methods can lead to biased estimates, reduced statistical power, and invalid conclusions.
1. Types of Missing Data Mechanisms:
Missing Completely at Random (MCAR): The likelihood of a data point being missing is unrelated to any observed or unobserved data.
Missing at Random (MAR): The propensity for a data point to be missing is related to observed data but not the missing data itself.
Missing Not at Random (MNAR): The missingness is related to the unobserved data, meaning the missing data depends on the value itself.
2. Common Techniques for Handling Missing Data:
Listwise Deletion: Omitting any observation with missing values.
Pros: Simplifies analysis.
Cons: Can lead to significant data loss and biased results if data is not MCAR.
Pairwise Deletion: Using all available data to compute statistics, considering only the observed pairs.
Pros: Retains more data than listwise deletion.
Cons: Can result in inconsistent sample sizes across analyses.
Mean/Median Imputation: Replacing missing values with the mean or median of the observed data.
Pros: Maintains dataset size.
Cons: Underestimates variability and can distort relationships between variables.
Regression Imputation: Predicting missing values using regression models based on other variables.
Pros: Accounts for relationships between variables.
Cons: Can lead to overstated correlations and reduced variability.
Multiple Imputation: Replacing missing values with a set of plausible values, reflecting uncertainty about the right value to impute.
Pros: Provides valid statistical inferences by incorporating variability between imputations.
Cons: More complex and computationally intensive.

const topicContent = getPythonTopicContent('basics');

const moduleTopics = getPythonModuleTopics('module1');

if (moduleId === 'module3' && pythonAdvancedContent[topicId]) {
}












