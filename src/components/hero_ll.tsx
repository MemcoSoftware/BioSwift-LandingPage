import React, { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners"; // Loader que vas a usar
import arrow1 from "../images/hero_ll/arrow_1.png";
import heartM from "../images/hero_ll/heartM.png";
import polygon29 from "../images/hero_ll/polygon_29.png";
import polygon30 from "../images/hero_ll/polygon_30.png";
import polygon31 from "../images/hero_ll/polygon_31.png";
import subtexto from "../images/hero_ll/subtexto.png";
import texto from "../images/hero_ll/texto.png";
import vector46 from "../images/hero_ll/vector_46.png";
import vector47 from "../images/hero_ll/vector_47.png";
import vector48 from "../images/hero_ll/vector_48.png";
import vector49 from "../images/hero_ll/vector_49.png";
import vector from "../images/hero_ll/vector.png";
import "../styles/hero_ll.css";

interface HeroIIProps {
  onSectionChange: (section: string) => void; // Prop para cambiar la sección
  selectedSection: string; // Recibe la sección activa
}

export const HeroLl: React.FC<HeroIIProps> = ({ onSectionChange, selectedSection }): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false); // Estado para el loader
  const [activeSection, setActiveSection] = useState<string>(selectedSection); // Inicializa con el estado global

  useEffect(() => {
    setActiveSection(selectedSection); // Actualiza la sección activa cuando cambia en MainPage
  }, [selectedSection]);

  const handleClick = (section: string) => {
    setLoading(true); // Activa el loader
    setTimeout(() => {
      setLoading(false); // Desactiva el loader tras 650ms
      setActiveSection(section); // Actualiza la sección activa
      onSectionChange(section); // Notifica a MainPage la sección seleccionada
    }, 650);
  };

  return (
    <div className="hero-ll">
      {/* Loader */}
      {loading && (
        <div className="loader-container">
          <CircleLoader color="rgba(0, 238, 255, 1)" loading={loading} size={100} />
        </div>
      )}

      <div className="overlap">
        <div className="test-bioswift">
          <div className="overlap-group">
            <img className="arrow" alt="Arrow" src={arrow1} />
          </div>
          <div className="text">TEST BIOSWIFT</div>
        </div>

        <div className="bg-effects">
          <div className="polygon" />
          <div className="polygon-2" />
          <div className="polygon-3" />
        </div>

        <div className="float-info">
          <div className="indicadores">
            <div className="div">
              <div className="text-wrapper">Indicadores en tiempo real</div>
              <img className="vector" alt="Vector" src={vector} />
            </div>
          </div>

          <div className="trazabilidad-gestion">
            <div className="overlap-2">
              <p className="p">Trazabilidad y gestión de sus equipos</p>
              <img className="heart-m" alt="Heart m" src={heartM} />
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="overlap-3">
            <img className="img" alt="Vector" src={vector46} />
            <img className="vector-2" alt="Vector" src={vector47} />
          </div>

          <div className="overlap-4">
            <img className="vector-3" alt="Vector" src={vector48} />
            <img className="vector-4" alt="Vector" src={vector49} />
          </div>
        </div>

        <div className="main-text">
          <div className="text-container">
            La <span className="gradient">innovación</span> está en nuestro <span className="gradient">ADN</span>
          </div>
          <div className="subtext-container">
            <span className="gradient">Innovación tecnológica</span> diseñada para centralizar la{" "}
            <span className="gradient">gestión de equipos biomédicos</span>, monitoreo en tiempo real,
            análisis de datos y <span className="gradient">optimización</span> de procesos operativos.
          </div>
        </div>

        <div className="upper-capsules">
          <div className="phrase-capsule">
            <div className="best-innovation-wrapper">
              <div className="best-innovation">Best Innovation Software</div>
            </div>
          </div>

          <div className="nav-capsule">
            <div className="overlap-5">
              <div className="rectangle" />

              <div className="sections">
                <div
                  className={`text-wrapper-2 ${activeSection === "caracteristicas" ? "active" : ""}`}
                  onClick={() => handleClick("caracteristicas")}
                >
                  Características
                </div>
                <div
                  className={`text-wrapper-2 ${activeSection === "nuestrosProductos" ? "active" : ""}`}
                  onClick={() => handleClick("nuestrosProductos")}
                >
                  Productos
                </div>
                <div
                  className={`text-wrapper-2 ${activeSection === "nuestrosClientes" ? "active" : ""}`}
                  onClick={() => handleClick("nuestrosClientes")}
                >
                  Clientes
                </div>
                <div
                  className={`text-wrapper-2 ${activeSection === "tecnologias" ? "active" : ""}`}
                  onClick={() => handleClick("tecnologias")}
                >
                  Tecnologías
                </div>
                <div
                  className={`text-wrapper-2 ${activeSection === "Footer" ? "active" : ""}`}
                  onClick={() => handleClick("Footer")}
                >
                  Contacto
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroLl;
