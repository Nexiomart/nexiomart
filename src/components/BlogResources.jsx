import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "How Indian Manufacturers Can Go Pan-India Without Distributors",
    summary:
      "Discover how modern platforms like Nexio Mart eliminate the need for traditional distributors and empower manufacturers to reach retailers directly across India.",
    link: "#", // Replace with your blog link
  },
  {
    title: "Why Traditional Sales Models Are Holding You Back",
    summary:
      "Old-school sales methods are slow and costly. Learn how combining tech with people can unlock faster, wider growth for your manufacturing business.",
    link: "#",
  },
  {
    title: "Top B2B Selling Platforms in India Compared",
    summary:
      "Explore how Nexio Mart stacks up against India’s leading B2B e-commerce platforms in terms of reach, cost, and results.",
    link: "#",
  },
];

const BlogResources = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="max-w-6xl mx-auto mt-10 p-10 md:p-16 m-10 bg-orange-50 border border-orange-400 rounded-2xl shadow-xl shadow-orange-200/50"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
        Blog & Resources
      </h2>
      <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Insights to help manufacturers grow smarter and go further with Nexio Mart.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  ">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 + index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white border border-orange-400 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-500"
          >
            <h3 className="text-lg  font-bold text-orange-600 mb-3">{blog.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{blog.summary}</p>
            <a
            //   href={blog.link}
              className="text-orange-500 font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Read More → */}
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogResources;
