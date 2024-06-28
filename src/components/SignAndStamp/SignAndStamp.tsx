import React from "react";
import { motion } from "framer-motion";
import Sign from "../../assets/images/desktop/sign-stamp-sign.png";
import Stamp from "../../assets/images/desktop/sign-stamp-stamp.png";
import Phone from "../../assets/images/desktop/sign-stamp-phone.png";
import SignMobile from "../../assets/images/mobile/sign-stamp-sign.png";
import StampMobile from "../../assets/images/mobile/sign-stamp-stamp.png";

const SignAndStamp: React.FC = () => {
  return (
    <div className="sign-stamp content">
      <motion.div
        className="image"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <motion.img
          src={Phone}
          alt="Phone"
          initial={{ opacity: 0, y: 500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        />
        <motion.img
          src={Sign}
          alt="Sign"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "0px",
            transform: "translate(-50%, -50%)",
          }}
          className="hidden sm:block"
        />
        <motion.img
          src={Stamp}
          alt="Stamp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          style={{
            position: "absolute",
            top: "30%",
            right: "12px",
            transform: "translate(-50%, -50%)",
          }}
          className="hidden sm:block"
        />
        <motion.img
          src={SignMobile}
          alt="Sign"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "0px",
            transform: "translate(-50%, -50%)",
          }}
          className="block sm:hidden"
        />
        <motion.img
          src={StampMobile}
          alt="Stamp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          style={{
            position: "absolute",
            top: "30%",
            right: "5px",
            transform: "translate(-50%, -50%)",
          }}
          className="block sm:hidden"
        />
      </motion.div>
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
    </div>
  );
};

export default SignAndStamp;
