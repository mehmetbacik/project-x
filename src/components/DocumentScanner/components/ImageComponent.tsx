import React from "react";
import { motion } from "framer-motion";
import Image from "../../../assets/images/desktop/document-scanner-phone.png";

const ImageComponent: React.FC = () => {
  return (
    <motion.div
      className="image"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <motion.img
        src={Image}
        alt="Document Scanner"
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      />
    </motion.div>
  );
};

export default ImageComponent;
