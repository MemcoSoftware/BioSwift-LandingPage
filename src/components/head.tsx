import React from "react";
//import line6 from "./line-6.png";
import logo from "../images/head/logoBioswift.png";
import '../styles/head.css'

export const Head = (): JSX.Element => {
  const handleLoginClick = () => {
    // Redirección externa
    window.open("https://bioswift.net", "_blank");
  };

  const handleMemcoClick = () => {
    // Redirección externa
    window.open("https://memcosas.com", "_blank");
  };

  return (
    <div className="head">
      <header className="header">
        <div className="overlap">
          <div className="side-effects">
            <div className="overlap-group">
              <div className="rectangle"></div>
              <div className="div"></div>
            </div>
          </div>

          <div className="nav">
            <div className="login" onClick={handleLoginClick}>
              <div className="overlap-group-2">
                <div className="rectangle-2">LOGIN</div>
              </div>
            </div>

            <div className="memco" onClick={handleMemcoClick}>
              <div className="overlap-group-2">
                <div className="rectangle-3">MEMCO</div>
                MEMCO
              </div>
            </div>

            <div className="location">
              <div className="overlap-group-2">
                <div className="rectangle-3">LOCATION</div>
                LOCATION
              </div>
            </div>

            <div className="about">
              <div className="overlap-group-2">
                <div className="rectangle-3">ABOUT US</div>
                ABOUT US
              </div>
            </div>

            <div className="contact">
              <div className="overlap-group-2">
                <div className="rectangle-3">CONTACTO</div>
                CONTACTO
              </div>
            </div>

            {/*<img className="line" alt="Line" src={line6} />*/}
          </div>

          <div className="bioinfo">
            <img className="logo" alt="Logo" src={logo} />
            <div className="bioswift">BIOSWIFT</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Head;
