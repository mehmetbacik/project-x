import React from "react";
import ImageComponent from "./components/ImageComponent";
import HeadlineComponent from "./components/HeadlineComponent";

const ExportAndShare: React.FC = () => {
  return (
    <div className="export-share content">
      <ImageComponent />
      <HeadlineComponent />
    </div>
  );
};

export default ExportAndShare;
