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
      <h2>Sign & Stamp</h2>
      <h1>One-Tap Focus</h1>
      <p>
        Draw, scan or import your signature and stamp with a simple{" "}
        <br className="large" />
        touch. <br className="medium" />
        Sign and stamp any document with just a single tap!
      </p>
      <button>Learn More</button>
    </motion.div>
  );
};

export default HeadlineComponent;
