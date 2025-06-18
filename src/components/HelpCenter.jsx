import React from "react";
import { motion } from "framer-motion";

const HelpCenter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="max-w-4xl mx-auto my-12 p-6 md:p-10 bg-orange-50 border border-orange-200 rounded-2xl shadow-lg"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
        Help Center
      </h1>

      <div className="text-gray-700 text-lg leading-relaxed space-y-6">
        <div>
          <h2 className="text-orange-500 font-semibold mb-1">1. General Inquiries</h2>
          <p>If you have any general questions about our services or how Nexio Mart works, feel free to reach out to us at <a href="mailto:nexiomart007@gmail.com" className="text-orange-600 underline">nexiomart007@gmail.com</a>.</p>
        </div>

        <div>
          <h2 className="text-orange-500 font-semibold mb-1">2. Technical Support</h2>
          <p>Facing issues on the website or mobile platform? Our tech team is here to help. Drop us a message describing the issue, and we’ll get back to you as soon as possible.</p>
        </div>

        <div>
          <h2 className="text-orange-500 font-semibold mb-1">3. Order & Delivery Support</h2>
          <p>Need help with your orders, tracking, or delivery timelines? Contact our support team and mention your Order ID for faster resolution.</p>
        </div>

        <div>
          <h2 className="text-orange-500 font-semibold mb-1">4. Business & Partnership</h2>
          <p>If you are a manufacturer, distributor, or sales partner and would like to collaborate with us, please visit the <strong>Become a Partner</strong> section or email us directly.</p>
        </div>

        <div>
          <h2 className="text-orange-500 font-semibold mb-1">5. Feedback & Suggestions</h2>
          <p>We love hearing from you. Share your thoughts on how we can improve our platform, services, or support experience.</p>
        </div>
      </div>

      <p className="text-sm text-gray-500 text-center mt-10">
        &copy; {new Date().getFullYear()} Nexio Mart. All rights reserved.
      </p>
    </motion.div>
  );
};

export default HelpCenter;
