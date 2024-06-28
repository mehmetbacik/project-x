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
      <h2>Batch Scanning</h2>
      <h1>Multiple Page Scan</h1>
      <p>
        Scan multiple pages or documents in multiple-scanning{" "}
        <br className="large" />
        mode. <br className="medium" />
        Batch all scans as a single document.
      </p>
      <button>Learn More</button>
    </motion.div>
  );
};

export default HeadlineComponent;
