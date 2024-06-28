import React from "react";
import ImageComponent from "./components/ImageComponent";
import HeadlineComponent from "./components/HeadlineComponent";

const AdvancedFilters: React.FC = () => {
  return (
    <div className="advanced-filters content">
      <ImageComponent />
      <HeadlineComponent />
    </div>
  );
};

export default AdvancedFilters;
