import React, { useState } from "react";

export const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-orange-300 rounded-xl mb-2">
      <button
        className="w-full text-left p-4 font-semibold text-gray-800 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="text-orange-500">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="px-4 pb-4 text-gray-600">{children}</div>}
    </div>
  );
};

export const Accordion = ({ items }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      {items.map((item, idx) => (
        <AccordionItem key={idx} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};
