import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaIndustry,
  FaUserTie,
  FaStoreAlt
} from "react-icons/fa";

const benefits = [
  {
    id: "manufacturers",
    icon: <FaIndustry className="text-4xl text-orange-500 mb-4" />,
    title: "Manufacturers",
    shortDescription: "Grow your product’s reach without growing your expenses.",
    fullContent: (
      <div className="text-sm text-gray-800 mt-4 space-y-4">
        <p><strong>✅ 1. Pan-India Sales, Without Fixed Infrastructure</strong><br />
          Why set up branches and hire regional sales managers when you can access every state through Nexiomart’s trained Growth Partner network?</p>
        <ul className="list-disc pl-5">
          <li>Presence in 100+ cities</li>
          <li>Deep reach into Tier 2–Tier 4 towns</li>
          <li>No need for field sales hires or warehouses</li>
        </ul>

        <p><strong>✅ 2. No Fixed Fees — Pay-Per-Sale Model</strong><br />
          Nexiomart charges only when you make a sale. There are no onboarding charges or monthly fees. Your margins stay protected.</p>
        <ul className="list-disc pl-5">
          <li>Transparent commissions</li>
          <li>Cost-efficient scaling</li>
          <li>Risk-free entry into new markets</li>
        </ul>

        <p><strong>✅ 3. Real-Time Visibility and Control</strong><br />
          With your personal dashboard, track leads, orders, regions, and partner performance. Stay informed at every step.</p>
        <ul className="list-disc pl-5">
          <li>Price control remains with you</li>
          <li>Performance analytics by region</li>
          <li>Control inventory flows digitally</li>
        </ul>

        <p><strong>✅ 4. Localized Sales with Verified Human Touch</strong><br />
          Every pitch is made by a local Growth Partner who understands the regional language, culture, and buyer mindset.</p>
        <ul className="list-disc pl-5">
          <li>Higher trust conversion</li>
          <li>Human feedback loop</li>
          <li>Personalised brand representation</li>
        </ul>

        <p><strong>✅ 5. Faster Time-to-Market</strong><br />
          Get listed in 24–48 hours. Start receiving inquiries and orders in days, not months.</p>
      </div>
    )
  },
  {
    id: "growthPartners",
    icon: <FaUserTie className="text-4xl text-orange-500 mb-4" />,
    title: "Growth Partners",
    shortDescription: "Start your own sales business. No investment. No inventory. 100% opportunity.",
    fullContent: (
      <div className="text-sm text-gray-800 mt-4 space-y-4">
        <p><strong>✅ 1. Zero Capital, Full Earnings</strong><br />
          You don’t need to buy stock or set up an office. Just your smartphone, local network, and Nexiomart’s support.</p>
        <ul className="list-disc pl-5">
          <li>Commission on every sale</li>
          <li>No risk, full flexibility</li>
          <li>You focus on selling — Nexiomart does the rest</li>
        </ul>

        <p><strong>✅ 2. Be the Local Face of National Brands</strong><br />
          Represent quality brands from across India in your city, village, or district. Your job is to pitch, convert, and support buyers.</p>
        <ul className="list-disc pl-5">
          <li>Get exclusive rights for regions</li>
          <li>Work with manufacturers directly</li>
          <li>Build your reputation and relationships</li>
        </ul>

        <p><strong>✅ 3. Training, Certification, and Dashboard Access</strong><br />
          Every Growth Partner is trained, certified, and equipped with a sales dashboard. Know your products, pitch confidently, track your earnings.</p>
        <ul className="list-disc pl-5">
          <li>Continuous training support</li>
          <li>Access to brand catalogs</li>
          <li>Real-time income tracking</li>
        </ul>

        <p><strong>✅ 4. Recognition and Growth Ladder</strong><br />
          Top-performing partners receive bonuses, awards, and opportunities to lead regional teams or become franchise heads.</p>
        <ul className="list-disc pl-5">
          <li>Career-like structure</li>
          <li>Community learning</li>
          <li>Recognition beyond money</li>
        </ul>
      </div>
    )
  },
  {
    id: "retailers",
    icon: <FaStoreAlt className="text-4xl text-orange-500 mb-4" />,
    title: "Retailers / Buyers",
    shortDescription: "Get what you need — faster, cheaper, and with local support you trust.",
    fullContent: (
      <div className="text-sm text-gray-800 mt-4 space-y-4">
        <p><strong>✅ 1. Wide Range of Verified Products</strong><br />
          Instead of calling 5 suppliers or struggling on WhatsApp groups, find everything on Nexiomart through a local Growth Partner.</p>
        <ul className="list-disc pl-5">
          <li>Clothing, electronics, FMCG, wellness, packaging, etc.</li>
          <li>From verified, quality-focused manufacturers</li>
          <li>Local delivery & support</li>
        </ul>

        <p><strong>✅ 2. Talk to Real People — Not Bots</strong><br />
          Buy confidently with the help of a local Growth Partner. Get product demos, clarification, and after-sales support.</p>
        <ul className="list-disc pl-5">
          <li>Trust-based relationship</li>
          <li>No language barriers</li>
          <li>Service after sale</li>
        </ul>

        <p><strong>✅ 3. Save Money + Get Faster Service</strong><br />
          We connect you directly with the source, reducing middlemen costs and delays.</p>
        <ul className="list-disc pl-5">
          <li>Transparent pricing</li>
          <li>Local availability</li>
          <li>Shorter delivery timelines</li>
        </ul>
      </div>
    )
  }
];

const NexiomartBenefits = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleToggle = (id) => {
    setActiveCard(prev => (prev === id ? null : id));
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-gray-50 py-16 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-14">
          💼 Nexiomart Benefits for <span className="text-orange-500">Everyone</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-start">
          {benefits.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => handleToggle(card.id)}
              className={`bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 cursor-pointer border-2
                ${activeCard === card.id ? "border-orange-500" : "border-transparent"}`}
            >
              {card.icon}
              <h3 className="text-xl font-semibold text-orange-600 mb-1">{card.title}</h3>
              <p className="text-gray-700">{card.shortDescription}</p>

              {/* Read More / Show Less Label */}
              <p className="mt-2 text-sm text-orange-500 font-medium">
                {activeCard === card.id ? "🔽 Show less" : "📖 Read more..."}
              </p>

              {/* Full Content */}
              {activeCard === card.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4"
                >
                  {card.fullContent}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default NexiomartBenefits;
