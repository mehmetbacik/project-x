import React from "react";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    { id: "DocumentScanner", label: "Document Scanner" },
    { id: "SignAndStamp", label: "Sign and Stamp" },
    { id: "BatchScanning", label: "Batch Scanning" },
    { id: "AdvancedFilters", label: "Advanced Filters" },
    { id: "ExportAndShare", label: "Export and Share" },
  ];

  return (
    <ul className="tab-navigation">
      {tabs.map((tab) => (
        <li key={tab.id} className={activeTab === tab.id ? "active" : ""} id={tab.id}>
          <button onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
        </li>
      ))}
    </ul>
  );
};

export default TabNavigation;
