import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Title from "./components/title";
import Navbar from "./components/navbar";
import "./style.scss";
import Images from "./components/images";
import ImageHandler from "./components/imageHandler";

function App() {
  const [clickedImg, setClickedImg] = useState(null);
  return (
    <div>
      <Navbar />
      <Title />
      <Images setClickedImg={setClickedImg} />
      {clickedImg && <ImageHandler clickedImg={clickedImg} setClickedImg={setClickedImg} />}
    </div>
  );
}

export default App;
