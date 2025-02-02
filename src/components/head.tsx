import React, { useState, useEffect } from "react";
import logo from "../images/head/logoBioswift.png";
import "../styles/head.css";

interface HeadProps {
  onSectionChange: (section: string) => void;
  selectedSection: string;
}

export const Head: React.FC<HeadProps> = ({ onSectionChange, selectedSection }) => {
  const [activeSection, setActiveSection] = useState<string>(selectedSection);

  useEffect(() => {
    setActiveSection(selectedSection);
  }, [selectedSection]);

  const handleClick = (section: string) => {
    setActiveSection(section);
    onSectionChange(section);
  };

  useEffect(() => {
    if (selectedSection) {
      const sectionElement = document.getElementById(selectedSection);
      if (sectionElement) {
        sectionElement.scrollBy({ behavior: "smooth" });
      }
    }
  }, [selectedSection]);

  const handleLoginClick = () => {
    window.open("https://bioswift.net", "_blank");
  };

  const handleMemcoClick = () => {
    window.open("https://memcosas.com", "_blank");
  };

  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/BLpaTPttGJDvG6e6A", "_blank");
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

            <div className="location" onClick={handleLocationClick}>
              <div className="overlap-group-2">
                <div className="rectangle-3">LOCATION</div>
                LOCATION
              </div>
            </div>

            <div className="about" onClick={() => handleClick("Footer")}>
              <div className="overlap-group-2">
                <div className="rectangle-3">ABOUT US</div>
                ABOUT US
              </div>
            </div>

            {/* CLIENTES oculto, pero sigue en el código para usar después */}
            {/* 
            <div className="contact" onClick={() => handleClick("nuestrosClientes")}>
              <div className="overlap-group-2">
                <div className="rectangle-3">CLIENTES</div>
              </div>
            </div> 
            */}
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
