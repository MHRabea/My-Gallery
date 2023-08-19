import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Title from "./components/title";
import Navbar from "./components/navbar";
import "./style.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Title />
    </div>
  );
}

export default App;
