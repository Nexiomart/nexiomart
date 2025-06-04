import React from "react";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Partner with leading brands",
    desc: "Expand your network with trusted names in the industry.",
  },
  {
    title: "Unlock powerful tools",
    desc: "Use real-time analytics and AI to drive smarter decisions.",
  },
  {
    title: "Get exclusive growth support",
    desc: "From strategy to execution, we're with you at every step.",
  },
  {
    title: "Reach new markets faster",
    desc: "With our distribution partners across India.",
  },
  {
    title: "Scale with confidence",
    desc: "Leverage our infrastructure to grow your brand fearlessly.",
  },
];

const Hero = () => {
  const duplicatedSlides = [...slides, ...slides]; // Duplicate for infinite loop

  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-50 py-24 px-6 md:px-10 text-center relative overflow-hidden">
      {/* Hero Text */}
      <div className="max-w-3xl mx-auto relative z-10 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold text-orange-500 leading-tight mb-6"
        >
          Grow Bigger, Sell Smarter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-700 mb-10"
        >
          Join India's most dynamic e-commerce network and elevate your brand today.
        </motion.p>

        <a href="https://nexio-ecommerce-qbdl.vercel.app/" target="_blank" rel="noopener noreferrer">
  <motion.button
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-2xl shadow-xl"
  >
    Get Started
  </motion.button>
</a>


        {/* <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-2xl shadow-xl"
        >
          Get Started
        </motion.button> */}
      </div>

      {/* Continuous Carousel */}
      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex w-max space-x-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedSlides.map((slide, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[340px] bg-white rounded-2xl shadow-lg p-6 text-left flex-shrink-0"
            >
              <h3 className="text-orange-500 font-bold text-xl mb-2">
                {slide.title}
              </h3>
              <p className="text-gray-600 text-sm">{slide.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Animated Decorative Blobs */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-60 z-0"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-50 z-0"
      />
    </section>
  );
};

export default Hero;



