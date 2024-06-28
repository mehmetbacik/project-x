import React from "react";
import ImageComponent from "./components/ImageComponent";
import HeadlineComponent from "./components/HeadlineComponent";

const SignAndStamp: React.FC = () => {
  return (
    <div className="sign-stamp content">
      <ImageComponent />
      <HeadlineComponent />
    </div>
  );
};

export default SignAndStamp;
