export const mlQuestions = [
  {
    id: "ml1",
    title: "Data Preprocessing",
    difficulty: "Easy",
    category: "Data Preparation",
    question: "Create a function that standardizes numerical features (zero mean and unit variance) using NumPy.",
    initialCode: `import numpy as np

def standardize_features(X):
    # Your code here
    return X`,
    solution: `import numpy as np

def standardize_features(X):
    mean = np.mean(X, axis=0)
    std = np.std(X, axis=0)
    return (X - mean) / std`,
    testCases: [
      {
        input: "np.array([[1, 2], [3, 4], [5, 6]])",
        expectedOutput: "array([[-1.22474487, -1.22474487], [ 0.        ,  0.        ], [ 1.22474487,  1.22474487]])",
        explanation: "Standardized features with mean=0 and std=1"
      }
    ],
    hints: ["Use np.mean() and np.std()", "Remember to handle the axis parameter"]
  },
  {
    id: "ml2",
    title: "Linear Regression Implementation",
    difficulty: "Medium",
    category: "Supervised Learning",
    question: "Implement a simple linear regression class using gradient descent optimization.",
    initialCode: `import numpy as np

class LinearRegression:
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
        self.weights = None
        self.bias = None
    
    def fit(self, X, y):
        # Your code here
        pass
    
    def predict(self, X):
        # Your code here
        pass`,
    solution: `import numpy as np

class LinearRegression:
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
        self.weights = None
        self.bias = None
    
    def fit(self, X, y):
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0
        
        for _ in range(self.n_iterations):
            y_pred = np.dot(X, self.weights) + self.bias
            
            # Gradients
            dw = (1/n_samples) * np.dot(X.T, (y_pred - y))
            db = (1/n_samples) * np.sum(y_pred - y)
            
            # Update parameters
            self.weights -= self.learning_rate * dw
            self.bias -= self.learning_rate * db
    
    def predict(self, X):
        return np.dot(X, self.weights) + self.bias`,
    testCases: [
      {
        input: "X = np.array([[1], [2], [3]]), y = np.array([2, 4, 6])",
        expectedOutput: "predictions close to [2, 4, 6]",
        explanation: "Simple linear relationship y = 2x"
      }
    ],
    hints: ["Implement gradient descent optimization", "Remember to initialize weights and bias"]
  },
  {
    id: "ml3",
    title: "K-Means Clustering",
    difficulty: "Hard",
    category: "Unsupervised Learning",
    question: "Implement the K-means clustering algorithm from scratch.",
    initialCode: `import numpy as np

def kmeans(X, k, max_iters=100):
    # Your code here
    return centroids, labels`,
    solution: `import numpy as np

def kmeans(X, k, max_iters=100):
    # Randomly initialize centroids
    n_samples, n_features = X.shape
    centroids = X[np.random.choice(n_samples, k, replace=False)]
    
    for _ in range(max_iters):
        # Assign points to nearest centroid
        distances = np.sqrt(((X - centroids[:, np.newaxis])**2).sum(axis=2))
        labels = np.argmin(distances, axis=0)
        
        # Update centroids
        new_centroids = np.array([X[labels == i].mean(axis=0) for i in range(k)])
        
        # Check convergence
        if np.all(centroids == new_centroids):
            break
            
        centroids = new_centroids
    
    return centroids, labels`,
    testCases: [
      {
        input: "np.array([[1, 1], [2, 1], [4, 3], [5, 4]]), k=2",
        expectedOutput: "Two clusters with centroids",
        explanation: "Clustering points into two groups"
      }
    ],
    hints: ["Initialize centroids randomly", "Implement the assignment and update steps"]
  },
  {
    id: "ml4",
    title: "Cross-Validation",
    difficulty: "Medium",
    category: "Model Evaluation",
    question: "Implement k-fold cross-validation for a given model and dataset.",
    initialCode: `import numpy as np

def k_fold_cv(model, X, y, k=5):
    # Your code here
    return mean_score, std_score`,
    solution: `import numpy as np

def k_fold_cv(model, X, y, k=5):
    n_samples = len(X)
    fold_size = n_samples // k
    scores = []
    
    for i in range(k):
        # Create train/test indices
        test_start = i * fold_size
        test_end = (i + 1) * fold_size
        test_idx = np.arange(test_start, test_end)
        train_idx = np.concatenate([np.arange(0, test_start), np.arange(test_end, n_samples)])
        
        # Split data
        X_train, X_test = X[train_idx], X[test_idx]
        y_train, y_test = y[train_idx], y[test_idx]
        
        # Train and evaluate
        model.fit(X_train, y_train)
        score = model.score(X_test, y_test)
        scores.append(score)
    
    return np.mean(scores), np.std(scores)`,
    testCases: [
      {
        input: "simple dataset with linear relationship",
        expectedOutput: "Mean and standard deviation of scores",
        explanation: "Cross-validation scores for model evaluation"
      }
    ],
    hints: ["Split data into k folds", "Keep track of scores for each fold"]
  },
  {
    id: "ml5",
    title: "Feature Selection",
    difficulty: "Hard",
    category: "Feature Engineering",
    question: "Implement a feature selection method using mutual information criterion.",
    initialCode: `import numpy as np
from sklearn.feature_selection import mutual_info_classif

def select_features(X, y, k):
    # Your code here
    return selected_features`,
    solution: `import numpy as np
from sklearn.feature_selection import mutual_info_classif

def select_features(X, y, k):
    # Calculate mutual information scores
    mi_scores = mutual_info_classif(X, y)
    
    # Get indices of top k features
    selected_indices = np.argsort(mi_scores)[-k:]
    
    # Select top k features
    selected_features = X[:, selected_indices]
    
    return selected_features`,
    testCases: [
      {
        input: "20 features, select top 5",
        expectedOutput: "5 most informative features",
        explanation: "Feature selection using mutual information"
      }
    ],
    hints: ["Use mutual_info_classif from sklearn", "Sort features by importance"]
  }
]; 