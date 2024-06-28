import React from "react";
import { motion } from "framer-motion";
import Phone from "../../../assets/images/desktop/advanced-filters-phone.png";
import Left from "../../../assets/images/desktop/advanced-filters-left.png";
import Right from "../../../assets/images/desktop/advanced-filters-right.png";
import LeftMobile from "../../../assets/images/mobile/advanced-filters-left.png";
import RightMobile from "../../../assets/images/mobile/advanced-filters-right.png";

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
        src={Left}
        alt="LeftImage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        style={{
          position: "absolute",
          top: "60%",
          left: "15%",
          transform: "translate(-50%, -50%)",
        }}
        className="hidden sm:block"
      />
      <motion.img
        src={Right}
        alt="RightImage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{
          position: "absolute",
          top: "60%",
          right: "15%",
          transform: "translate(50%, -50%)",
        }}
        className="hidden sm:block"
      />
      <motion.img
        src={LeftMobile}
        alt="LeftImage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        style={{
          position: "absolute",
          top: "55%",
          left: "15%",
          transform: "translate(-50%, -50%)",
        }}
        className="block sm:hidden"
      />
      <motion.img
        src={RightMobile}
        alt="RightImage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{
          position: "absolute",
          top: "55%",
          right: "15%",
          transform: "translate(50%, -50%)",
        }}
        className="block sm:hidden"
      />
    </div>
  );
};

export default ImageComponent;
