import React from "react";
import { motion } from "framer-motion";

const VideoCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="max-w-6xl mx-auto mt-10 p-16 py-4 m-12 bg-orange-50 border border-orange-200 rounded-2xl shadow-xl shadow-orange-200/50"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
        See Nexio Mart in Action
      </h2>
      <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
        Watch how our platform empowers brands and growth partners to reach new heights.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Video 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-md bg-white border border-orange-100 p-4"
        >
          <video
            className="w-full h-auto rounded-lg"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="text-lg font-semibold text-orange-500 mt-4">Brand Growth Tools</h3>
          <p className="text-sm text-gray-600 mt-1">
            Explore our powerful toolkit designed to scale your business efficiently.
          </p>
        </motion.div>

        {/* Video 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-md bg-white border border-orange-100 p-4"
        >
          <video
            className="w-full h-auto rounded-lg"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3 className="text-lg font-semibold text-orange-500 mt-4">Partner Success Stories</h3>
          <p className="text-sm text-gray-600 mt-1">
            Hear from our growth partners and how Nexio Mart transformed their business.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
