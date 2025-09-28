import React from 'react';
import Flashcard from './components/Flashcard';
import QuizZone from './components/QuizZone';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">🧠 Linked List Study Hub</h1>
      <Flashcard />
      <QuizZone />
    </div>
  );
}

export default App;
