// components/Faq.js
import React, { useState } from 'react';

const FaqItem = ({ question, answer, isExpanded, onToggle }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold">{question}</h3>
      <button
        className="text-blue-500 hover:underline focus:outline-none"
        onClick={onToggle}
      >
        Ver respuesta
      </button>
    </div>
    <div className={`mt-2 ${isExpanded ? '' : 'hidden'}`}>
      <p className="text-gray-600">{answer}</p>
    </div>
  </div>
);

const Pregunta = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 mb-[20rem]">
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isExpanded={index === expandedIndex}
          onToggle={() => toggleAnswer(index)}
        />
      ))}
    </div>
  );
};

export default Pregunta;
