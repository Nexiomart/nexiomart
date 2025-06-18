import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="max-w-4xl mx-auto my-12 p-6 md:p-10 bg-orange-50 border border-orange-200 rounded-2xl shadow-lg"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
        Terms & Conditions
      </h1>

      <p className="text-gray-700 mb-6">
        Welcome to Nexio Mart! These Terms of Service ("Terms") govern your access to and use of our platform, services, and applications.
        By accessing or using Nexio Mart, you agree to be bound by these Terms. Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold text-orange-400 mb-2">1. Eligibility</h2>
      <p className="text-gray-700 mb-4">
        You must be at least 18 years old to use our services. By agreeing to these terms, you represent and warrant that you are at least 18.
      </p>

      <h2 className="text-xl font-semibold text-orange-400 mb-2">2. Account Responsibilities</h2>
      <p className="text-gray-700 mb-4">
        You are responsible for maintaining the confidentiality of your account and password. Nexio Mart is not liable for any loss or damage
        arising from your failure to comply with this responsibility.
      </p>

      <h2 className="text-xl font-semibold text-orange-400 mb-2">3. Prohibited Activities</h2>
      <p className="text-gray-700 mb-4">
        You agree not to use Nexio Mart for any unlawful purposes, including fraud, abuse, or spamming. Any violation may result in termination
        of your access.
      </p>

      <h2 className="text-xl font-semibold text-orange-400 mb-2">4. Modifications</h2>
      <p className="text-gray-700 mb-4">
        We reserve the right to modify these Terms at any time. Continued use of the platform after changes means you accept the updated Terms.
      </p>

      <h2 className="text-xl font-semibold text-orange-400 mb-2">5. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions about these Terms, please contact us at <span className="text-orange-500 font-medium">nexiomart007@gmail.com
        </span>.
      </p>

      <p className="text-sm text-gray-500 text-center mt-10">
        &copy; {new Date().getFullYear()} Nexio Mart. All rights reserved.
      </p>
    </motion.div>
  );
};

export default TermsOfService;
