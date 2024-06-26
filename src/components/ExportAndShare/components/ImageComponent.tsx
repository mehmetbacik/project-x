import React from "react";
import { motion } from "framer-motion";
import Phone from "../../../assets/images/desktop/export-share-phone.png";
import Arrow from "../../../assets/images/desktop/export-share-arrow.png";
import JPG from "../../../assets/images/desktop/export-share-jpg.png";
import PDF from "../../../assets/images/desktop/export-share-pdf.png";
import TXT from "../../../assets/images/desktop/export-share-txt.png";
import JPGMobile from "../../../assets/images/mobile/export-share-jpg.png";
import PDFMobile from "../../../assets/images/mobile/export-share-pdf.png";
import TXTMobile from "../../../assets/images/mobile/export-share-txt.png";

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
      <motion.img
        src={Arrow}
        alt="Arrow"
        initial={{ opacity: 0, y: 100, x: -100 }}
        animate={{ opacity: 1, y: 0, x: -50 }}
        transition={{ delay: 1.9, duration: 0.5 }}
        style={{
          position: "absolute",
          left: "20%",
          bottom: "8%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <motion.img
        src={PDF}
        alt="PDF"
        initial={{ opacity: 0, y: 100, x: -50 }}
        animate={{ opacity: 1, y: 0, x: -100 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        style={{
          position: "absolute",
          left: "30%",
          top: "60%",
          transform: "translate(-50%, -50%)",
        }}
        className="hidden sm:block"
      />
      <motion.img
        src={JPG}
        alt="JPG"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        style={{
          position: "absolute",
          left: "38%",
          top: "57%",
          transform: "translate(-50%, -50%)",
        }}
        className="hidden sm:block"
      />
      <motion.img
        src={TXT}
        alt="TXT"
        initial={{ opacity: 0, y: 100, x: 50 }}
        animate={{ opacity: 1, y: 0, x: 100 }}
        transition={{ delay: 2.8, duration: 0.5 }}
        style={{
          position: "absolute",
          right: "30%",
          top: "60%",
          transform: "translate(-50%, -50%)",
        }}
        className="hidden sm:block"
      />
      <motion.img
        src={PDFMobile}
        alt="PDF"
        initial={{ opacity: 0, y: 100, x: -50 }}
        animate={{ opacity: 1, y: 0, x: -100 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        style={{
          position: "absolute",
          left: "40%",
          top: "56%",
          transform: "translate(-50%, -50%)",
        }}
        className="block sm:hidden"
      />
      <motion.img
        src={JPGMobile}
        alt="JPG"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        style={{
          position: "absolute",
          left: "37%",
          top: "53%",
          transform: "translate(-50%, -50%)",
        }}
        className="block sm:hidden"
      />
      <motion.img
        src={TXTMobile}
        alt="TXT"
        initial={{ opacity: 0, y: 100, x: 50 }}
        animate={{ opacity: 1, y: 0, x: 100 }}
        transition={{ delay: 2.8, duration: 0.5 }}
        style={{
          position: "absolute",
          right: "40%",
          top: "56%",
          transform: "translate(-50%, -50%)",
        }}
        className="block sm:hidden"
      />
    </div>
  );
};

export default ImageComponent;
