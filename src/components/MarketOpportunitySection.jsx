import React from 'react';
import { motion } from 'framer-motion';
import { Warehouse, Megaphone, Globe2, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Inventory Financing',
    description: 'Maintain stock levels without cash flow worries through inventory financing. Ensure you never miss a sales opportunity due to stockouts.',
    icon: <Warehouse className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: 'Reduced Marketing Costs',
    description: 'Nexio Mart handles your digital marketing needs, saving you money on expensive ads and allowing you to focus on product development and customer service.',
    icon: <Megaphone className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: 'National Presence',
    description: 'Gain a national presence through Nexio Mart’s expansive network, leveraging a well-established brand identity to reach more customers.',
    icon: <Globe2 className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: 'Competitive Edge',
    description: 'Stay ahead of the competition with Nexio Mart’s efficient operations and promotional campaigns. Minimize market saturation by targeting specific customer segments.',
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const MarketOpportunitySection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-100 via-white to-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Maximize Opportunities & Strengthen Your Market Presence
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg border hover:shadow-2xl transition-shadow duration-300"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunitySection;
