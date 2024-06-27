import React, { useState } from "react";
import DocumentScanner from "../components/DocumentScanner/DocumentScanner";
import SignAndStamp from "../components/SignAndStamp/SignAndStamp";
import BatchScanning from "../components/BatchScanning/BatchScanning";
import AdvancedFilters from "../components/AdvancedFilters/AdvancedFilters";
import ExportAndShare from "../components/ExportAndShare/ExportAndShare";
import TabNavigation from "../components/TabNavigation/TabNavigation";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("DocumentScanner");

  const renderTabContent = () => {
    switch (activeTab) {
      case "DocumentScanner":
        return <DocumentScanner />;
      case "SignAndStamp":
        return <SignAndStamp />;
      case "BatchScanning":
        return <BatchScanning />;
      case "AdvancedFilters":
        return <AdvancedFilters />;
      case "ExportAndShare":
        return <ExportAndShare />;
      default:
        return <DocumentScanner />;
    }
  };

  return (
    <div className="main-content">
      <div className="tab-content">{renderTabContent()}</div>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Home;
