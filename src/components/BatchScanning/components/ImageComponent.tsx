import React from "react";
import { motion } from "framer-motion";
import Phone from "../../../assets/images/desktop/batch-scanning-phone.png";
import File from "../../../assets/images/desktop/batch-scanning-file.png";
import FileMobile from "../../../assets/images/mobile/batch-scanning-file.png";

const ImageComponent: React.FC = () => {
  return (
    <div className="image" style={{ position: "relative", overflow: "hidden" }}>
      <motion.img
        src={Phone}
        alt="Phone"
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.5 }}
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
          justifyContent: "center",
        }}
      >
        <motion.img
          src={File}
          alt="FileOne"
          initial={{ y: 140, opacity: 0, scale: 0.8 }}
          animate={{ y: -40, opacity: 1, scale: 0.8 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          style={{ position: "absolute" }}
          className="hidden sm:block"
        />
        <motion.img
          src={File}
          alt="FileTwo"
          initial={{ y: 120, opacity: 0, scale: 0.9 }}
          animate={{ y: -10, opacity: 1, scale: 0.9 }}
          transition={{ delay: 2, duration: 0.8 }}
          style={{ position: "absolute" }}
          className="hidden sm:block"
        />
        <motion.img
          src={File}
          alt="FileThree"
          initial={{ y: 100, opacity: 0, scale: 1 }}
          animate={{ y: 20, opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          style={{ position: "absolute" }}
          className="hidden sm:block"
        />
        <motion.img
          src={FileMobile}
          alt="FileOne"
          initial={{ y: 140, opacity: 0, scale: 0.9 }}
          animate={{ y: -30, opacity: 1, scale: 0.9 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          style={{ position: "absolute" }}
          className="block sm:hidden"
        />
        <motion.img
          src={FileMobile}
          alt="FileTwo"
          initial={{ y: 120, opacity: 0, scale: 1 }}
          animate={{ y: -10, opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          style={{ position: "absolute" }}
          className="block sm:hidden"
        />
        <motion.img
          src={FileMobile}
          alt="FileThree"
          initial={{ y: 100, opacity: 0, scale: 1.1 }}
          animate={{ y: 10, opacity: 1, scale: 1.1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          style={{ position: "absolute" }}
          className="block sm:hidden"
        />
      </motion.div>
    </div>
  );
};

export default ImageComponent;
