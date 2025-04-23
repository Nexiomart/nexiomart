import React, { useState } from 'react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a wide range of digital solutions including web development, data analytics, and cloud services.',
  },
  {
    question: 'How can I contact support?',
    answer: 'You can contact our support team via email or our support page. We usually respond within 24 hours.',
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Yes, we specialize in tailoring solutions to fit your business needs perfectly.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4  bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-orange-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-5 flex justify-between items-center text-lg font-medium text-gray-700 focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-orange-400 text-xl">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 transition-all duration-300 ease-in-out">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


