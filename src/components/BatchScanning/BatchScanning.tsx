import React from "react";
import { motion } from "framer-motion";
import Phone from "../../assets/images/desktop/batch-scanning-phone.png";
import File from "../../assets/images/desktop/batch-scanning-file.png";

const BatchScanning: React.FC = () => {
  return (
    <div className="batch-scanning">
      <div
        className="image"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <motion.img
          src={Phone}
          alt="Phone"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.div
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <motion.img
            src={File}
            alt="FileOne"
            initial={{ y: 140, opacity: 0, scale: 0.8 }}
            animate={{ y: -40, opacity: 1, scale: 0.8 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ position: "absolute" }}
          />
          <motion.img
            src={File}
            alt="FileTwo"
            initial={{ y: 120, opacity: 0, scale: 0.9 }}
            animate={{ y: -10, opacity: 1, scale: 0.9 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{ position: "absolute" }}
          />
          <motion.img
            src={File}
            alt="FileThree"
            initial={{ y: 100, opacity: 0, scale: 1 }}
            animate={{ y: 20, opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            style={{ position: "absolute" }}
          />
        </motion.div>
      </div>
      <motion.div
        className="headline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2>Batch Scanning</h2>
        <h1>Multiple Page Scan</h1>
        <p>
          Scan multiple pages or documents in multiple-scanning mode. Batch all
          scans as a single document.
        </p>
        <button>Learn More</button>
      </motion.div>
    </div>
  );
};

export default BatchScanning;