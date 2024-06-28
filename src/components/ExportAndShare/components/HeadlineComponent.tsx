import React from "react";
import { motion } from "framer-motion";

const HeadlineComponent: React.FC = () => {
  return (
    <motion.div
      className="headline"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <h2>Export & Share</h2>
      <h1>All-Round Conversion</h1>
      <p>Export your scans as PDF, JPG, ZIP, TXT, and Word.</p>
      <button>Learn More</button>
    </motion.div>
  );
};

export default HeadlineComponent;
