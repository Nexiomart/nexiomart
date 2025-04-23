import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaTruck,
  FaHeadset,
  FaChalkboardTeacher,
  FaWallet,
  FaStore,
} from "react-icons/fa";

const services = [
  {
    icon: <FaChartLine className="text-3xl text-orange-500 mb-4" />,
    title: "Advanced Analytics",
    description: "Gain insights into customer behavior, sales performance, and market trends.",
  },
  {
    icon: <FaTruck className="text-3xl text-orange-500 mb-4" />,
    title: "Logistics Support",
    description: "Ensure timely product delivery via Nexio Mart’s logistics services.",
  },
  {
    icon: <FaHeadset className="text-3xl text-orange-500 mb-4" />,
    title: "Dedicated Support",
    description: "Our team provides real-time assistance and guidance.",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-orange-500 mb-4" />,
    title: "Training & Development",
    description: "Enhance e-commerce knowledge with workshops and webinars.",
  },
  {
    icon: <FaWallet className="text-3xl text-orange-500 mb-4" />,
    title: "Flexible Payments",
    description: "Our payment system ensures fast and transparent transactions.",
  },
  {
    icon: <FaStore className="text-3xl text-orange-500 mb-4" />,
    title: "Product Showcase",
    description: "Display your products in a high-converting marketplace with smart visibility tools.",
  },
];

const HowWeHelp = () => {
  return (
    <section className="bg-gradient-to-br from-orange-100 via-white to-gray-100 py-16 px-4 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          How Will Nexio Mart Help You?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowWeHelp;
