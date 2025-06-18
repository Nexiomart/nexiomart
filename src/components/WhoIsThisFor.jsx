import React from "react";
import { motion } from "framer-motion";
import { FaIndustry, FaTags, FaStoreAlt, FaUserTie } from "react-icons/fa";

const audiences = [
  {
    icon: <FaIndustry className="text-3xl text-orange-500 mb-4" />,
    title: "Manufacturers",
    description: "Looking to scale B2B sales and reach more retailers across India.",
  },
  {
    icon: <FaTags className="text-3xl text-orange-500 mb-4" />,
    title: "Product Brands",
    description: "Great products but limited distribution? We’ll help you expand.",
  },
  {
    icon: <FaStoreAlt className="text-3xl text-orange-500 mb-4" />,
    title: "D2C & MSMEs",
    description: "New-age businesses seeking to establish pan-India presence.",
  },
  {
    icon: <FaUserTie className="text-3xl text-orange-500 mb-4" />,
    title: "Growth Partners",
    description: "Sales professionals or individuals wanting to earn locally.",
  },
];

const WhoIsThisFor = () => {
  return (
    <section className="bg-gradient-to-br from-orange-100 via-white to-gray-100 py-16 px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          🔹 Who is This For?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhoIsThisFor;
