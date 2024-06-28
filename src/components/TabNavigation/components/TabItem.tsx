import React from "react";
import { motion } from "framer-motion";

interface TabItemProps {
  id: string;
  label: string;
  activeIcon: string;
  inactiveIcon: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabItem: React.FC<TabItemProps> = ({
  id,
  label,
  activeIcon,
  inactiveIcon,
  activeTab,
  setActiveTab,
}) => {
  const circleVariants = {
    InActiveCircle: { pathLength: 0, rotate: 270 },
    ActiveCircle: { pathLength: 1, rotate: -90 },
  };

  return (
    <div className={`item ${activeTab === id ? "active" : ""}`} id={id}>
      <button onClick={() => setActiveTab(id)}>
        <div className="icon-area" style={{ position: "relative" }}>
          <motion.img
            src={activeTab === id ? activeIcon : inactiveIcon}
            alt={activeTab === id ? `${label} Active` : `${label} Inactive`}
            whileHover={{ scale: 1.1 }}
          />
          {activeTab === id && (
            <motion.svg
              width="60"
              height="60"
              viewBox="0 0 54 54"
              style={{
                position: "absolute",
                top: "-2px",
                left: "-2px",
              }}
              initial="InActiveCircle"
              animate="ActiveCircle"
            >
              <motion.circle
                cx="25"
                cy="25"
                r="23"
                stroke="#0381ff"
                strokeWidth="1"
                fill="none"
                variants={circleVariants}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "center" }}
              />
            </motion.svg>
          )}
        </div>
        {label}
      </button>
    </div>
  );
};

export default TabItem;
