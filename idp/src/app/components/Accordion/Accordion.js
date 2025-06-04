'use client';

// Importação

import { useState } from "react";


// Accordion e estilização

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded shadow-md items-center justify-center">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full px-4 py-3 text-left flex justify-between items-center focus:outline-none"
            onClick={() => toggleIndex(index)}
          >
            <span className="font-medium">{item.question}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-3 text-black-700 bg-gray-300">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
