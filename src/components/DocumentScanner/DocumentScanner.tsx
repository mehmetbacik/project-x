import React from "react";
import { motion } from "framer-motion";
import Image from "../../assets/images/desktop/document-scanner-phone.png";

const DocumentScanner: React.FC = () => {
  return (
    <div className="document-scanner">
      <motion.div
        className="image"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay: 0.3, duration: 0.8 }}
      >
        <img src={Image} alt="Document Scanner" />
      </motion.div>
      <motion.div
        className="headline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2>Document Scanner</h2>
        <h1>Scan with Ease</h1>
        <p>
          Scan any document instantly with your mobile device by just a few
          steps. Save as PDF,JPG,ZIP,TXT and Word format.
        </p>
        <button>Learn More</button>
      </motion.div>
    </div>
  );
};

export default DocumentScanner;
