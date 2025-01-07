import React from "react";
import line1 from "../images/hero/line_1.png";
import logo from "../images/hero/logoBioswfitHero.png"
import polygon32 from "../images/hero/polygon_32.png";
import polygon33 from "../images/hero/polygon_33.png";
import '../styles/hero.css'

export const Hero = (): JSX.Element => {
  return (
    <div className="hero">
      <div className="overlap">
        <div className="biodata">
          <div className="overlap-group">
            <div className="rectangle" />

            <img className="logo" alt="Logo" src={logo} />

            <div className="bioswift">BIOSWIFT</div>
          </div>
        </div>

        <div className="info">
          <img className="line" alt="Line" src={line1} />

          <p className="phrase">
            BIOSWIFT, INNOVACION QUE OPTIMIZA, TECNOLOGIA QUE INSPIRA
          </p>

          <div className="element-demo">2025 DEMO</div>

          <div className="conocer-mas">CONOCER MAS...</div>
        </div>

        <div className="bg">
          <img className="polygon" alt="Polygon" src={polygon32} />

          <img className="img" alt="Polygon" src={polygon33} />
        </div>
      </div>
    </div>
  );
};

export default Hero;