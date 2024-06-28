import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TabItem from "./components/TabItem";

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

  return (
    <Swiper
      slidesPerView={1.5}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 5,
        },
      }}
      navigation
      className="tab-navigation"
    >
      {tabs.map((tab) => (
        <SwiperSlide key={tab.id}>
          <TabItem
            id={tab.id}
            label={tab.label}
            activeIcon={tab.activeIcon}
            inactiveIcon={tab.inactiveIcon}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TabNavigation;
