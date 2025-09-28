import React, { useState } from 'react';

const questions = [
  {
    question: 'What does a node in a singly linked list contain?',
    options: ['Data and next pointer', 'Data and previous pointer', 'Only data', 'Data and both pointers'],
    answer: 'Data and next pointer',
  },
  {
    question: 'Which linked list allows traversal in both directions?',
    options: ['Singly', 'Circular', 'Doubly', 'None'],
    answer: 'Doubly',
  },
  {
    question: 'In a circular linked list, the last node points to?',
    options: ['Null', 'Previous node', 'First node', 'Itself'],
    answer: 'First node',
  },
];

function QuizZone() {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIndex, option) => {
    setSelected({ ...selected, [qIndex]: option });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, i) => {
      if (selected[i] === q.answer) newScore++;
    });
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Quiz Zone</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-4 p-4 bg-white dark:bg-gray-800 rounded shadow">
          <p className="font-medium">{q.question}</p>
          <div className="mt-2">
            {q.options.map((opt, j) => (
              <label key={j} className="block">
                <input
                  type="radio"
                  name={`q${i}`}
                  value={opt}
                  checked={selected[i] === opt}
                  onChange={() => handleSelect(i, opt)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}
      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Answers
        </button>
      ) : (
        <p className="mt-4 font-bold">Your Score: {score} / {questions.length}</p>
      )}
    </div>
  );
}

export default QuizZone;
