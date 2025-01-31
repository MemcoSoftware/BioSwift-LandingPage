import React, { useState } from "react";
import icon01 from "../images/tecnologias/icon_01.png";
import icon02 from "../images/tecnologias/icon_02.png";
import icon03 from "../images/tecnologias/icon_03.png";
import icon04 from "../images/tecnologias/icon_04.png";
import icon05 from "../images/tecnologias/icon_05.png";
import icon06 from "../images/tecnologias/icon_06.png";
import icon07 from "../images/tecnologias/icon_07.png";
import icon08 from "../images/tecnologias/icon_08.png";
import icon09 from "../images/tecnologias/icon_09.png";
import icon10 from "../images/tecnologias/icon_10.png";
import icon11 from "../images/tecnologias/icon_11.png";
import icon12 from "../images/tecnologias/icon_12.png";
import icon13 from "../images/tecnologias/icon_13.png";
import icon14 from "../images/tecnologias/icon_14.png";
import icon15 from "../images/tecnologias/icon_15.png";
import icon16 from "../images/tecnologias/icon_16.png";
import icon17 from "../images/tecnologias/icon_17.png";
import icon18 from "../images/tecnologias/icon_18.png";
import icon19 from "../images/tecnologias/icon_19.png";
import icon20 from "../images/tecnologias/icon_20.png";
import iconDesign from "../images/tecnologias/icon_design.png";
import "../styles/tecnologias.css";

const icons = [
  { src: icon03, id: "icon03" , category: "BACKEND"}, // PHP
  { src: icon01, id: "icon01" , category: "TOOLS"}, // Power BI
  { src: icon12, id: "icon12", category: "FRONTEND" }, //Bootstrap
  { src: icon05, id: "icon05", category: "BACKEND"}, // Python
  { src: icon10, id: "icon10", category: "FRONTEND"}, // HTML
  { src: icon18, id: "icon18" , category: "NUBE"}, // AWS
  { src: icon07, id: "icon07" , category: "BACKEND"}, // Kubernetes
  { src: icon02, id: "icon02", category: "NUBE" }, // GoDaddy
  { src: icon09, id: "icon09" , category: "DB"}, // Mongo DB
  { src: icon04, id: "icon04", category: "BACKEND" }, // Docker
  { src: icon13, id: "icon13", category: "FRONTEND" }, // CSS
  { src: icon06, id: "icon06", category: "DB"}, // MySQL
  { src: icon11, id: "icon11" , category: "BACKEND"}, // Typescript
  { src: icon14, id: "icon14", category: "FRONTEND" }, // React
  { src: icon15, id: "icon15" , category: "BACKEND"}, // JavaScript
  { src: icon16, id: "icon16", category: "FRONTEND" }, // Vue
  { src: icon17, id: "icon17", category: "TOOLS"}, // Jira Software
  { src: icon08, id: "icon08" , category: "BACKEND"}, // Java
  { src: icon19, id: "icon19", category: "NUBE" }, // CPANEL
  { src: icon20, id: "icon20" , category: "BACKEND"}, //Node JS
];

export const Tecnologias = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };
    return (
        <div className="tecnologias">
          <div className="overlap">
            <div className="overlap-group">
              <div className="bg-effects">
                <div className="ellipse" />
    
                <div className="div" />
    
                <div className="ellipse-2" />
              </div>
    
              {/* <div className="icons">
                <img className="icon" alt="Icon" src={icon20} />
    
                <img className="img" alt="Icon" src={icon19} />
    
                <img className="icon-2" alt="Icon" src={icon18} />
    
                <div className="overlap-2">
                  <div className="overlap-3">
                    <img className="icon-3" alt="Icon" src={icon17} />
    
                    <img className="icon-4" alt="Icon" src={icon09} />
                  </div>
    
                  <img className="icon-5" alt="Icon" src={icon16} />
    
                  <img className="icon-6" alt="Icon" src={icon10} />
                </div>
    
                <img className="icon-7" alt="Icon" src={icon15} />
    
                <div className="overlap-group-2">
                  <img className="icon-8" alt="Icon" src={icon14} />
    
                  <img className="icon-9" alt="Icon" src={icon05} />
                </div>
    
                <img className="icon-10" alt="Icon" src={icon13} />
    
                <img className="icon-11" alt="Icon" src={icon12} />
    
                <img className="icon-12" alt="Icon" src={icon11} />
    
                <img className="icon-13" alt="Icon" src={icon08} />
    
                <img className="icon-14" alt="Icon" src={icon07} />
    
                <img className="icon-15" alt="Icon" src={icon06} />
    
                <img className="icon-16" alt="Icon" src={icon04} />
    
                <img className="icon-17" alt="Icon" src={icon03} />
    
                <img className="icon-18" alt="Icon" src={icon02} />
    
                <img className="icon-19" alt="Icon" src={icon01} />
              </div> */}
              <div className="icons-grid">
                      {icons.map((icon) => (
                        <img
                          key={icon.id}
                          src={icon.src}
                          alt="Technology Icon"
                          className={`icon ${
                            selectedCategory && icon.category === selectedCategory ? "highlight" : "grayscale"
                          }`}
                        />
                      ))}
              </div>
    
              <div className="tecnologias-title">
                <div className="overlap-4">
                  <div className="shadow">TECNOLOGIAS</div>
    
                  <div className="text-wrapper">TECNOLOGIAS</div>
    
                  <div className="text">TECNOLOGIAS</div>
                </div>
              </div>
            </div>
    
            <div className="overlap-5">
              <img className="icon-design" alt="Icon design" src={iconDesign} />
    
              <div className="nav">
                <div className="overlap-6">
                <div onClick={() => handleCategoryClick("FRONTEND")} className="frontend">
                  FRONTEND
                </div>
    
                  <div className="overlap-group-3">
                    <div onClick={() => handleCategoryClick("DB")} className="base-datos">BASE DE DATOS</div>
    
                    <div onClick={() => handleCategoryClick("NUBE")} className="nube">NUBE</div>
                  </div>
    
                  <div onClick={() => handleCategoryClick("TOOLS")} className="tools">TOOLS</div>
    
                  <div onClick={() => handleCategoryClick("BACKEND")} className="backend">BACKEND</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Tecnologias;