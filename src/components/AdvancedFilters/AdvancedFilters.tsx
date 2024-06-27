import React from "react";
import { motion } from "framer-motion";

import Phone from "../../assets/images/desktop/advanced-filters-phone.png";
import Left from "../../assets/images/desktop/advanced-filters-left.png";
import Right from "../../assets/images/desktop/advanced-filters-right.png";

const AdvancedFilters: React.FC = () => {
  return (
    <div className="advanced-filters">
      <div
        className="image"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <motion.img
          src={Phone}
          alt="Phone"
          initial={{ y: 550 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
        />
        <motion.img
          src={Left}
          alt="LeftImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <motion.img
          src={Right}
          alt="RightImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{
            position: "absolute",
            top: "50%",
            right: "10%",
            transform: "translate(50%, -50%)",
          }}
        />
      </div>
      <motion.div
        className="headline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2>Advanced Filters</h2>
        <h1>Unique Filters</h1>
        <p>
          Apply advanced filters and enhance quality with various custom made
          filters. Manually edit brightness and contrast by your own choice on
          the custom filters.
        </p>
        <button>Learn More</button>
      </motion.div>
    </div>
  );
};

export default AdvancedFilters;
