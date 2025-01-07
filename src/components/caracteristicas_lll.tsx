import React from "react";
import iconFuncionalidades2 from "../images/caracteristicas_lll/icon_funcionalidades-1.png";
import iconFuncionalidades from "../images/caracteristicas_lll/icon_funcionalidades.png";
import iconLl from "../images/caracteristicas_lll/icon_ll.png";
import icon from "../images/caracteristicas_lll/icon.png";
import padlock2 from "../images/caracteristicas_lll/Padlock_2.png";
import padlock from "../images/caracteristicas_lll/padlock.png";
import robot2 from "../images/caracteristicas_lll/robot-1.png";
import robot from "../images/caracteristicas_lll/robot.png";
import "../styles/caracteristicas_lll.css";
import title2 from "../images/caracteristicas_lll/title-2.png";
import title3 from "../images/caracteristicas_lll/title-3.png";
import title4 from "../images/caracteristicas_lll/title-4.png";
import title5 from "../images/caracteristicas_lll/title-5.png";
import title from "../images/caracteristicas_lll/title.png";
import vector2 from "../images/caracteristicas_lll/vector-1.png";
import vector3 from "../images/caracteristicas_lll/vector-2.png";
import vector4 from "../images/caracteristicas_lll/vector-3.png";
import vector5 from "../images/caracteristicas_lll/vector-4.png";
import vector6 from "../images/caracteristicas_lll/vector-5.png";
import vector from "../images/caracteristicas_lll/vector.png";

export const CaracteristicasLll = (): JSX.Element => {
    return (
      <div className="caracteristicas-lll">
        <div className="overlap">
          <div className="bg-effect" />
  
          <div className="seguridad">
            <div className="seguridad-dos">
              <div className="category">
                <img className="padlock" alt="Padlock" src={padlock2} />
  
                <div className="text">SEGURIDAD</div>
              </div>
  
              <div className="overlap-group">
                <p className="description">
                  Toda la información operativa en un solo lugar, con estadísticas
                  y notificaciones clave.
                </p>
  
                <img className="title" alt="Title" src={title2} />
  
                <div className="frame" />
              </div>
            </div>
  
            <div className="seguridad-uno">
              <div className="CHARACTERISTICS">
                <div className="text-wrapper">SEGURIDAD</div>
  
                <img className="img" alt="Padlock" src={padlock} />
              </div>
  
              <div className="div">
                <p className="p">
                  Toda la información operativa en un solo lugar, con estadísticas
                  y notificaciones clave.
                </p>
  
                <img className="title-2" alt="Title" src={title3} />
  
                <div className="frame-2" />
              </div>
            </div>
          </div>
  
          <div className="reporte-analisis">
            <div className="reporte">
              <div className="div-2">
                <div className="text-wrapper-2">REPORTE Y ANALISIS</div>
  
                <img className="robot" alt="Robot" src={robot2} />
              </div>
  
              <div className="overlap-group-2">
                <p className="text-wrapper-3">
                  Toda la información operativa en un solo lugar, con estadísticas
                  y notificaciones clave.
                </p>
  
                <img className="title-3" alt="Title" src={title} />
  
                <div className="frame-3" />
              </div>
            </div>
  
            <div className="reporte-2">
              <div className="div-2">
                <div className="text-2">REPORTE Y ANALISIS</div>
  
                <img className="robot" alt="Robot" src={robot} />
              </div>
  
              <div className="overlap-group-2">
                <p className="description-2">
                  Toda la información operativa en un solo lugar, con estadísticas
                  y notificaciones clave.
                </p>
  
                <img className="title-3" alt="Title" src={title5} />
  
                <div className="frame-3" />
              </div>
            </div>
          </div>
  
          <div className="funcionalidades">
            <div className="funcionalidades-dos">
              <div className="category-2">
                <div className="text-3">FUNCIONALIDADES</div>
  
                <img
                  className="icon-funcionalidades"
                  alt="Icon funcionalidades"
                  src={iconFuncionalidades}
                />
              </div>
  
              <div className="overlap-group-3">
                <p className="description-3">
                  Toda la información operativa en un solo lugar, con estadísticas
                  y notificaciones clave.
                </p>
  
                <img className="title-4" alt="Title" src={title4} />
  
                <div className="ellipse-wrapper">
                  <div className="ellipse" />
                </div>
              </div>
            </div>
  
            <div className="funcionalidades-uno">
              <div className="category-3">
                <img
                  className="icon-funcionalidades-2"
                  alt="Icon funcionalidades"
                  src={iconFuncionalidades2}
                />
  
                <div className="icon">FUNCIONALIDADES</div>
              </div>
  
              <div className="overlap-2">
                <p className="description-4">
                  Toda la información operativa en un solo lugar, con estadísticas
                  y notificaciones clave.
                </p>
  
                <img className="title-5" alt="Title" src={title4} />
  
                <div className="div-wrapper">
                  <div className="ellipse" />
                </div>
              </div>
            </div>
          </div>
  
          <div className="lines">
            <div className="overlap-3">
              <img className="vector" alt="Vector" src={vector} />
  
              <img className="vector-2" alt="Vector" src={vector6} />
            </div>
  
            <div className="overlap-4">
              <img className="vector-3" alt="Vector" src={vector2} />
  
              <img className="vector-4" alt="Vector" src={vector3} />
            </div>
  
            <div className="overlap-5">
              <img className="vector-5" alt="Vector" src={vector4} />
  
              <img className="vector-6" alt="Vector" src={vector5} />
            </div>
          </div>
  
          <div className="triangle">
            <div className="overlap-6">
              <img className="icon-ll" alt="Icon ll" src={iconLl} />
  
              <img className="icon-2" alt="Icon" src={icon} />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default CaracteristicasLll;