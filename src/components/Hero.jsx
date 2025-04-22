import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-50 py-24 px-6 md:px-10 text-center relative overflow-hidden">
      {/* Hero Text */}
      <div className="max-w-3xl mx-auto relative z-10">
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

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-2xl shadow-xl"
        >
          Get Started
        </motion.button>
      </div>

      {/* Animated Decorative Blobs */}
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-60 z-0"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-50 z-0"
      />
    </section>
  );
};

export default Hero;


// const Hero = () => {
//   return (
//     <section className="bg-orange-100 py-20 px-6 md:px-10 text-center relative overflow-hidden">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-orange-500 leading-tight mb-6 animate-fade-in-down">
//           Grow Bigger, Sell Smarter
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in-up">
//           Join India's most dynamic e-commerce network and elevate your brand today.
//         </p>
//         <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-105">
//           Get Started
//         </button>
//       </div>

//       {/* Decorative Circle Blobs */}
//       <div className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-70 z-0"></div>
//       <div className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-60 z-0"></div>
//     </section>
//   );
// };

// export default Hero;


// import React from 'react';
// // remove that line



// const Hero = () => {
//   return (
//     <section className="bg-orange-50 py-16 text-center">
//       <h1 className="text-5xl font-extrabold text-orange-500 mb-4">Grow Bigger, Sell Smarter</h1>
//       <p className="text-xl text-gray-700 mb-6">Join India's most dynamic e-commerce network</p>
//       <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg rounded-xl shadow">
//   Get Started
// </button>
//     </section>
//   );
// };

// export default Hero;