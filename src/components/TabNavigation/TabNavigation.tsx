import React from "react";
import { motion } from "framer-motion";
import DocumentScannerActiveIcon from "../../assets/icons/document-scanner-icon-active.svg";
import DocumentScannerIcon from "../../assets/icons/document-scanner-icon.svg";
import SignAndStampActiveIcon from "../../assets/icons/sign-stamp-icon-active.svg";
import SignAndStampIcon from "../../assets/icons/sign-stamp-icon.svg";
import BatchScanningActiveIcon from "../../assets/icons/batch-scanning-icon-active.svg";
import BatchScanningIcon from "../../assets/icons/batch-scanning-icon.svg";
import AdvancedFiltersActiveIcon from "../../assets/icons/advanced-filters-icon-active.svg";
import AdvancedFiltersIcon from "../../assets/icons/advanced-filters-icon.svg";
import ExportAndShareActiveIcon from "../../assets/icons/export-share-icon-active.svg";
import ExportAndShareIcon from "../../assets/icons/export-share-icon.svg";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    {
      id: "DocumentScanner",
      label: "Document Scanner",
      activeIcon: DocumentScannerActiveIcon,
      inactiveIcon: DocumentScannerIcon,
    },
    {
      id: "SignAndStamp",
      label: "Sign & Stamp",
      activeIcon: SignAndStampActiveIcon,
      inactiveIcon: SignAndStampIcon,
    },
    {
      id: "BatchScanning",
      label: "Batch Scanning",
      activeIcon: BatchScanningActiveIcon,
      inactiveIcon: BatchScanningIcon,
    },
    {
      id: "AdvancedFilters",
      label: "Advanced Filters",
      activeIcon: AdvancedFiltersActiveIcon,
      inactiveIcon: AdvancedFiltersIcon,
    },
    {
      id: "ExportAndShare",
      label: "Export & Share",
      activeIcon: ExportAndShareActiveIcon,
      inactiveIcon: ExportAndShareIcon,
    },
  ];

  const circleVariants = {
    InActiveCircle: { pathLength: 0, rotate: 0 },
    ActiveCircle: { pathLength: 1, rotate: 360 },
  };

  return (
    <ul className="tab-navigation">
      {tabs.map((tab) => (
        <li
          key={tab.id}
          className={activeTab === tab.id ? "active" : ""}
          id={tab.id}
        >
          <button onClick={() => setActiveTab(tab.id)}>
            <div className="icon-area" style={{ position: "relative" }}>
              <motion.img
                src={activeTab === tab.id ? tab.activeIcon : tab.inactiveIcon}
                alt={
                  activeTab === tab.id
                    ? `${tab.label} Active`
                    : `${tab.label} Inactive`
                }
                whileHover={{ scale: 1.1 }}
              />
              {activeTab === tab.id && (
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
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TabNavigation;
