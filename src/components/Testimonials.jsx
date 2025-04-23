import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "As a supplier, Nexio helped me triple my orders in 2 months.",
    author: "— Arjun S., Supplier",
  },
  {
    quote: "The partner dashboard is so clean, and the commissions are fast!",
    author: "— Neha M., Growth Partner",
  },
];

const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 text-orange-500 mx-auto mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 17a4 4 0 01-4-4V7a4 4 0 014-4h2a1 1 0 011 1v3a1 1 0 01-1 1H8v5a1 1 0 001 1h1a1 1 0 011 1v1a4 4 0 01-4 4zm10 0a4 4 0 01-4-4V7a4 4 0 014-4h2a1 1 0 011 1v3a1 1 0 01-1 1h-1v5a1 1 0 001 1h1a1 1 0 011 1v1a4 4 0 01-4 4z"
    />
  </svg>
);

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 1,
      ease: "easeOut",
    },
  }),
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-100 via-white to-gray-100 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-14 text-gray-800"
      >
        What Our Partners Say
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center gap-10 px-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Card className="max-w-sm mx-auto bg-white/70 backdrop-blur-lg border border-orange-100 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl">
              <CardContent className="p-8">
                <QuoteIcon />
                <p className="text-gray-700 italic leading-relaxed text-base md:text-lg">
                  “{t.quote}”
                </p>
                <p className="font-semibold mt-4 text-orange-600 text-sm md:text-base">
                  {t.author}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;



