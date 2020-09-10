import React from "react";

import unionIcon from "../../assets/union.svg";
import "./styles.css";

const Landing: React.FC = () => {
  return (
    <div id="landing">
      <div className="title">
        <h1>Algarismos Romanos</h1>
        <h2>Conversor</h2>
      </div>
      <img src={unionIcon} alt="Union" />
    </div>
  );
};

export default Landing;
