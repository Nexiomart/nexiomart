// import React from "react";
// import { motion } from "framer-motion";

// const points = [
//   { title: "📦 Suppliers", desc: "Access pan-India buyers, analytics tools, and faster payments." },
//   { title: "🛒 Customers", desc: "Get best deals, verified suppliers, and smooth order tracking." },
//   { title: "🤝 Growth Partners", desc: "Earn from referrals, get training, and manage leads seamlessly." }
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.3,
//       duration: 0.9,
//       ease: "easeOut",
//     },
//   }),
// };

// const WhyJoin = () => {
//   return (
//     <section className="py-20 px-4  text-center">
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="text-4xl font-bold mb-12 text-gray-800"
//       >
//         Why Join Nexio Mart?
//       </motion.h2>

//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {points.map((item, idx) => (
//           <motion.div
//             key={idx}
//             custom={idx}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={cardVariants}
//             className="bg-white p-6 rounded-2xl shadow-md shadow-orange-200/50 hover:shadow-2xl hover:scale-105 transition-transform duration-500 border border-orange-100"
//           >
//             <h3 className="text-2xl font-semibold text-orange-600 mb-3">{item.title}</h3>
//             <p className="text-gray-600 leading-relaxed">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyJoin;

import React from "react";
import { motion } from "framer-motion";

const points = [
  {
    title: "📦 Suppliers",
    desc: "Access pan-India buyers, analytics tools, and faster payments.",
  },
  {
    title: "🛒 Customers",
    desc: "Get best deals, verified suppliers, and smooth order tracking.",
  },
  {
    title: "🤝 Growth Partners",
    desc: "Earn from referrals, get training, and manage leads seamlessly.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.9,
      ease: "easeOut",
    },
  }),
};

const WhyJoin = () => {
  return (
    <section className="py-20 px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-4 text-gray-800"
      >
        Why Choose Nexiomart?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
      >
        India’s First Human Sales-Driven Marketplace. A platform where
        technology, people, and trust work together to grow your business.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {points.map((item, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white p-6 rounded-2xl shadow-md shadow-orange-200/50 hover:shadow-2xl hover:scale-105 transition-transform duration-500 border border-orange-100"
          >
            <h3 className="text-2xl font-semibold text-orange-600 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyJoin;