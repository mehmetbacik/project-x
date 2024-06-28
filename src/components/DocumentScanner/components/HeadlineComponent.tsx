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
      <h2>Document Scanner</h2>
      <h1>Scan with Ease</h1>
      <p>
        Scan any document instantly with your mobile device by just{" "}
        <br className="large" />
        a few steps. <br className="medium" />
        Save as PDF, JPG, ZIP, TXT, and Word format.
      </p>
      <button>Learn More</button>
    </motion.div>
  );
};

export default HeadlineComponent;
