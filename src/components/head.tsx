import React from "react";
//import line6 from "./line-6.png";
import logo from "../images/head/logoBioswift.png";
import '../styles/head.css'

export const Head = (): JSX.Element => {
  return (
    <div className="head">
      <header className="header">
        <div className="overlap">
          <div className="side-effects">
            <div className="overlap-group">
              <div className="rectangle" />

              <div className="div" />
            </div>
          </div>

          <div className="nav">
            <div className="login">
              <div className="overlap-group-2">
                <div className="rectangle-2" />

                <div className="text-wrapper">LOGIN</div>
              </div>
            </div>

            <div className="memco">
              <div className="overlap-group-2">
                <div className="rectangle-3" />

                <div className="text-wrapper-2">MEMCO</div>
              </div>
            </div>

            <div className="location">
              <div className="overlap-group-2">
                <div className="rectangle-3" />

                <div className="text-wrapper-3">LOCATION</div>
              </div>
            </div>

            <div className="about">
              <div className="overlap-group-2">
                <div className="rectangle-3" />

                <div className="text-wrapper-4">ABOUT US</div>
              </div>
            </div>

            <div className="contact">
              <div className="overlap-group-2">
                <div className="rectangle-3" />

                <div className="text-wrapper-5">CONTACTO</div>
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