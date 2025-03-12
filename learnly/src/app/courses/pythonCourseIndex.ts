import pythonBasicsContent from './pythonCourseContent';
import { pythonDataScienceContent } from './pythonDataScienceContent';
import { pythonAdvancedContent } from './pythonAdvancedContent';

interface ModuleInfo {
  title: string;
  topics: string[];
}

interface ModuleMap {
  [key: string]: ModuleInfo;
}

const moduleStructure: ModuleMap = {
  'module1': {
    title: 'Introduction to Python',
    topics: ['basics', 'control-structures', 'data-types']
  },
  'module2': {
    title: 'Functions and Modules',
    topics: ['functions', 'modules']
  },
  'module3': {
    title: 'Data Science Fundamentals',
    topics: ['numpy', 'pandas', 'visualization']
  },
  'module4': {
    title: 'Advanced Python Concepts',
    topics: ['oop', 'error-handling', 'file-handling']
  }
};

export const pythonCourseIndex = {
  ...pythonBasicsContent,
  'numpy': pythonDataScienceContent['numpy'],
  'pandas': pythonDataScienceContent['pandas'],
  'visualization': pythonDataScienceContent['visualization'],
  'oop': pythonAdvancedContent['oop'],
  'error-handling': pythonAdvancedContent['error-handling'],
  'file-handling': pythonAdvancedContent['file-handling']
};

// Helper function to get content for a specific topic
export function getPythonTopicContent(topicId: string) {
  return pythonCourseIndex[topicId] || null;
}

// Helper function to get all topics in a module
export function getPythonModuleTopics(moduleId: string): string[] {
  return moduleStructure[moduleId]?.topics || [];
}

// Helper function to get module title
export function getPythonModuleTitle(moduleId: string): string {
  return moduleStructure[moduleId]?.title || 'Unknown Module';
} 