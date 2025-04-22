import React from "react";
import { motion } from "framer-motion";

const points = [
  { title: "📦 Suppliers", desc: "Access pan-India buyers, analytics tools, and faster payments." },
  { title: "🛒 Customers", desc: "Get best deals, verified suppliers, and smooth order tracking." },
  { title: "🤝 Growth Partners", desc: "Earn from referrals, get training, and manage leads seamlessly." }
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
    <section className="py-20 px-4  text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-gray-800"
      >
        Why Join Nexio Mart?
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {points.map((item, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-500 border border-orange-100"
          >
            <h3 className="text-2xl font-semibold text-orange-600 mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyJoin;




// import React from 'react';

// const points = [
//   { title: "📦 Suppliers", desc: "Access pan-India buyers, analytics tools, and faster payments." },
//   { title: "🛒 Customers", desc: "Get best deals, verified suppliers, and smooth order tracking." },
//   { title: "🤝 Growth Partners", desc: "Earn from referrals, get training, and manage leads seamlessly." }
// ];

// const WhyJoin = () => {
//   return (
//     <section className="py-16 px-4 bg-white text-center">
//       <h2 className="text-4xl font-bold mb-10 text-gray-800">Why Join Nexio Mart?</h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {points.map((item, idx) => (
//           <div key={idx} className="bg-orange-100 p-6 rounded-xl shadow hover:shadow-lg transition">
//             <h3 className="text-2xl font-semibold text-orange-600 mb-2">{item.title}</h3>
//             <p className="text-gray-700">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyJoin;    