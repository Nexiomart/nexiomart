import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="max-w-4xl mx-auto my-12 p-6 md:p-10 bg-orange-50 border border-orange-200 rounded-2xl shadow-lg"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
        About Us
      </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        <span className="font-semibold text-orange-400">Nexiomart</span> helps manufacturers sell their products across India through a
        powerful combination of digital reach and a human sales network. We believe in empowering manufacturers to scale faster, smarter,
        and without traditional barriers.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        By combining advanced technology with real-world sales expertise, we connect manufacturers directly with verified buyers—
        including shopkeepers, retailers, and businesses—without the need to hire or manage a sales team.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Our mission is to make growth simple, accessible, and scalable for every manufacturer in India. Whether you're an emerging brand
        or an established company, Nexiomart offers the tools, network, and support you need to expand your reach and grow with confidence.
      </p>

      <p className="text-sm text-gray-500 text-center mt-10">
        &copy; {new Date().getFullYear()} Nexio Mart. All rights reserved.
      </p>
    </motion.div>
  );
};

export default AboutUs;
