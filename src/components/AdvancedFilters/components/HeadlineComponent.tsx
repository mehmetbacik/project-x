import React from "react";
import { motion } from "framer-motion";

const HeadlineComponent: React.FC = () => {
  return (
    <motion.div
      className="headline"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <h2>Advanced Filters</h2>
      <h1>Unique Filters</h1>
      <p>
        Apply advanced filters and enhance quality with various{" "}
        <br className="large" />
        custom made filters. <br className="medium" />
        Manually edit brightness and contrast by <br className="large" />
        your own choice on the custom filters.
      </p>
      <button>Learn More</button>
    </motion.div>
  );
};

export default HeadlineComponent;
