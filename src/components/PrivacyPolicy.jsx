import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="max-w-4xl mx-auto my-12 p-6 md:p-10 bg-orange-50 border border-orange-200 rounded-2xl shadow-lg"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
        Privacy Policy
      </h1>

      <p className="text-gray-700 mb-6">
        At Nexio Mart, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal
        information when you use our platform.
      </p>

      <h2 className="text-xl font-semibold text-orange-400 mb-2">1. Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We collect information that you provide directly to us, such as your name, email, contact number, and billing details. We also collect
        technical data like IP address, browser type, and device information for analytics and service improvement.
      </p>

      <h2 className="text-xl font-semibold text-orange-400 mb-2">2. How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        Your data helps us personalize your experience, provide support, and process transactions. We may also use it to send you updates
        and promotional content (you can opt out at any time).
      </p>

      <h2 className="text-xl font-semibold text-orange-400 mb-2">3. Data Sharing</h2>
      <p className="text-gray-700 mb-4">
        We do not sell or trade your personal information. We may share data with trusted partners to assist with service operations,
        always under confidentiality agreements.
      </p>

      <h2 className="text-xl font-semibold text-orange-400 mb-2">4. Security</h2>
      <p className="text-gray-700 mb-4">
        We implement robust security measures to protect your information. However, no method of transmission over the internet is 100% secure.
        We strive to use commercially acceptable means to protect it.
      </p>

      <h2 className="text-xl font-semibold text-orange-400 mb-2">5. Your Rights</h2>
      <p className="text-gray-700 mb-4">
        You have the right to access, update, or delete your personal information. Please contact us if you wish to exercise these rights.
      </p>

      <h2 className="text-xl font-semibold text-orange-400 mb-2">6. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        For questions about this Privacy Policy, please reach out to us at
        <span className="text-orange-500 font-medium"> nexiomart007@gmail.com</span>.
      </p>

      <p className="text-sm text-gray-500 text-center mt-10">
        &copy; {new Date().getFullYear()} Nexio Mart. All rights reserved.
      </p>
    </motion.div>
  );
};

export default PrivacyPolicy;
