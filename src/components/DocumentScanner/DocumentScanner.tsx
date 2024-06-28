import React from "react";
import ImageComponent from "./components/ImageComponent";
import HeadlineComponent from "./components/HeadlineComponent";

const DocumentScanner: React.FC = () => {
  return (
    <div className="document-scanner content">
      <ImageComponent />
      <HeadlineComponent />
    </div>
  );
};

export default DocumentScanner;
