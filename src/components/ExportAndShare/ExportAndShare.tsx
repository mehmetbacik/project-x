import React from "react";
import { motion } from "framer-motion";
import Phone from "../../assets/images/desktop/export-share-phone.png";
import Arrow from "../../assets/images/desktop/export-share-arrow.png";
import JPG from "../../assets/images/desktop/export-share-jpg.png";
import PDF from "../../assets/images/desktop/export-share-pdf.png";
import TXT from "../../assets/images/desktop/export-share-txt.png";

const ExportAndShare: React.FC = () => {
  return (
    <div className="export-share">
      <div
        className="image"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <motion.img
          src={Phone}
          alt="Phone"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
        />
        <motion.img
          src={Arrow}
          alt="Arrow"
          initial={{ opacity: 0, y: 100, x: -100 }}
          animate={{ opacity: 1, y: 0, x: -50 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          style={{
            position: "absolute",
            left: "10%",
            bottom: "10%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <motion.img
          src={PDF}
          alt="PDF"
          initial={{ opacity: 0, y: 100, x: -50 }}
          animate={{ opacity: 1, y: 0, x: -100 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            position: "absolute",
            left: "20%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <motion.img
          src={JPG}
          alt="JPG"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 1 }}
          style={{
            position: "absolute",
            left: "30%",
            top: "45%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <motion.img
          src={TXT}
          alt="TXT"
          initial={{ opacity: 0, y: 100, x: 50 }}
          animate={{ opacity: 1, y: 0, x: 100 }}
          transition={{ delay: 1.9, duration: 1 }}
          style={{
            position: "absolute",
            left: "35%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
      <motion.div
        className="headline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2>Export & Share</h2>
        <h1>All-Round Conversion</h1>
        <p>Export your scans as PDF,JPG,ZIP,TXT and Word.</p>
        <button>Learn More</button>
      </motion.div>
    </div>
  );
};

export default ExportAndShare;
