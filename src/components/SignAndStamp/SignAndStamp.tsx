import React from "react";
import { motion } from "framer-motion";
import Sign from "../../assets/images/desktop/sign-stamp-sign.png";
import Stamp from "../../assets/images/desktop/sign-stamp-stamp.png";
import Phone from "../../assets/images/desktop/sign-stamp-phone.png";

const SignAndStamp: React.FC = () => {
  return (
    <div className="sign-stamp">
      <motion.div
        className="image"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <motion.img
          src={Phone}
          alt="Phone"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.img
          src={Sign}
          alt="Sign"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            position: "absolute",
            top: "50%",
            right: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <motion.img
          src={Stamp}
          alt="Stamp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
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
          Draw, scan or import your signature and stamp with a simple touch.
          Sign and stamp any document with just a single tap!
        </p>
        <button>Learn More</button>
      </motion.div>
    </div>
  );
};

export default SignAndStamp;
