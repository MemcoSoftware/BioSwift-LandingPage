import React from "react";
import arrow2 from "../images/caracteristicas/arrow_2.png";
import atom from "../images/caracteristicas/atom.png";
import hand from "../images/caracteristicas/hand.png";
import icon from "../images/caracteristicas/icon.png";
import image from "../images/caracteristicas/image.png";
import padlock from "../images/caracteristicas/padlock.png";
import polygon28 from "../images/caracteristicas/polygon_28.png";
import polygon29 from "../images/caracteristicas/polygon_29.png";
import text from "../images/caracteristicas/text.png";
import '../styles/caracteristicas.css'
import { useRef } from "react";
import { useState } from "react";

interface CaracteristicasProps {
  onShowMore: () => void;
  showMore: boolean;
}

const Caracteristicas: React.FC<CaracteristicasProps> = ({ onShowMore,showMore }) => {
  
  const [animateKey, setAnimateKey] = useState(0); // 🔹 Clave para reiniciar animación

  const handleClick = () => {
    setAnimateKey((prevKey) => prevKey + 1); // 🔹 Cambia la clave para forzar la animación
    onShowMore(); // 🔹 Cambia el estado de "MÁS"/"MENOS"
  };

  return (
    <div className="caracteristicas">
      <div className="overlap">
        <div className="ver-mas" onClick={handleClick}>

          <div className="mas-text">
          VER <span key={animateKey} className="gradient active">{showMore ? "MENOS" : "MÁS"}</span>
          </div>

          <img className={`arrow ${showMore ? "down" : "up"}`} alt="Arrow" src={arrow2} />

        </div>

        <div className="overlap-wrapper">
          <div className="overlap-group">
            <div className="seguridad-y-accesos">
              <div className="div">
                <div className="overlap-2">
                  <img className="padlock" alt="Padlock" src={padlock} />

                  <ul className="description-2">

                     <li> Registro de actividad</li>

                     <li>Sesiones temporales</li>
                      
                     <li> Certificados SSL/TLS</li>
                      
                     <li>Roles jerárquicos avanzados</li>
                      
                     <li> Acceso segmentado</li>
                    
                  </ul>
                </div>

                <div className="title">SEGURIDAD Y ACCESOS</div>
              </div>
            </div>

            <div className="reporte-y-analisis">
              <div className="div">
                <div className="overlap-group-2">
                  <img className="icon" alt="Icon" src={icon} />

                  <ul className="description-2">

                    <li>Panel de métricas clave</li>
                    
                    <li> Comparación de períodos</li>
                    
                    <li>Alertas en reportes</li>
                    
                    <li> Informe de costos</li>
                    
                    <li> Integración con Power BI</li>

                  </ul>
                </div>

                <div className="title-2">REPORTE Y ANALISIS</div>
              </div>
            </div>

            <div className="funcionalidades">
              
              <div className="overlap-3">
                <div className="div"/>
                <div className="overlap-group-3">
                
                  <img className="img" alt="Icon" src={image} />

                  <ul className="description-2">

                    <li>Gestión de inventarios automatizada</li>
                    
                    <li>Estado de los equipos</li>
                    
                    <li> Historial de intervenciones</li>
                    
                    <li>Automatización de procesos</li>
                    
                    <li> Monitoreo en tiempo real</li>

                  </ul>
                </div>

                <div className="title-3">FUNCIONALIDADES</div>
              </div>
            </div>

       
          </div>
        </div>

        <div className="hand">
          <div className="overlap-4">
            <img className="atom" alt="Atom" src={atom} />

            <img className="hand-2" alt="Hand" src={hand} />
          </div>
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-5">
            <div className="shadow-text">CARACTERISTICAS</div>

            <div className="text-2">CARACTERISTICAS</div>
          </div>
        </div>

        <div className="bg">
          <div className="overlap-6">
            <img className="polygon" alt="Polygon" src={polygon29} />

            <div className="rectangle-4" />
          </div>

          <img className="polygon-2" alt="Polygon" src={polygon28} />
        </div>
      </div>
    </div>
  );
};

export default Caracteristicas;