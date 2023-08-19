import React from "react";
import Upload from "./Upload";

const Title = () => {
  return (
    <div className="d-flex flex-column">
      <h1 className="d-flex justify-content-center">Gallery-App</h1>
      <Upload />
      <h2 className="d-flex justify-content-center title1">Your Pictures</h2>
    </div>
  );
};

export default Title;
