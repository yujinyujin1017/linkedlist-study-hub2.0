import React from 'react';

const flashcards = [
  { term: 'Singly Linked List', definition: 'Each node points to the next node only.' },
  { term: 'Doubly Linked List', definition: 'Each node points to both next and previous nodes.' },
  { term: 'Circular Linked List', definition: 'Last node links back to the first node.' },
];

function Flashcard() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Flashcards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {flashcards.map((card, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="font-bold text-lg">{card.term}</h3>
            <p className="text-sm">{card.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flashcard;
