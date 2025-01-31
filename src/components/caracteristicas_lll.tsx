import React from "react";
import iconFuncionalidades2 from "../images/caracteristicas_lll/icon_funcionalidades-1.png";
import iconFuncionalidades from "../images/caracteristicas_lll/icon_funcionalidades.png";
import triangle from "../images/caracteristicas_lll/polygon_30.png"
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
import leftUpLine from "../images/caracteristicas_lll/leftUpLine.png";
import rightUpLine from "../images/caracteristicas_lll/rightUpLine.png";
import leftDownLine from "../images/caracteristicas_lll/leftDownLine.png";
import rightDownLine from "../images/caracteristicas_lll/rightDownLine.png";
import leftDownLine2 from "../images/caracteristicas_lll/rightDownLine2.png";
import rightDownLine2 from "../images/caracteristicas_lll/rightDownLine2.png";
export const CaracteristicasLll = (): JSX.Element => {
  return (
      <div>
      <div className="caracteristicas-lll">
      <div className="bgs-lll">
          <div className="bg-new-lll"></div>
          <div className="bg-second-lll"></div>
        </div>
        <div className="overlap">
          <div className="bg-effect" />
  
          <div className="seguridad">
            <div className="seguridad-dos">
              <div className="category">

                <div className="text">SEGURIDAD</div>

                <img className="padlock" alt="Padlock" src={padlock2} />
  

                <div className="rectangle-seguridad"/>
              </div>
  
              <div className="overlap-group">
                <p className="description">
                Gestiona los permisos de acceso con niveles de jerarquía definidos para cada usuario. Asegura acceso solo a la información y herramientas especificas por usuario.
                </p>
  
                <div className="title-funcionalidad-2">ROLES <span className="gradient-title">JERARQUICOS</span></div>
  
                <div className="frame" />
              </div>
            </div>
  
            <div className="seguridad-uno">
              <div className="CHARACTERISTICS">
                <div className="text-wrapper">SEGURIDAD</div>
  
                <img className="img" alt="Padlock" src={padlock} />

                <div className="rectangle-seguridad"/>
              </div>
  
              <div className="div">
                <p className="p">
                Define reglas de acceso específicas según áreas, usuarios o dispositivos. Implementa una seguridad granular para proteger la información.
                </p>
  
                <div className="title-funcionalidad-2">ACCESO <span className="gradient-title">SEGMENTADO</span></div>
  
                <div className="frame-2" />
              </div>
            </div>
          </div>
  
          <div className="reporte-analisis">
            <div className="reporte">
              <div className="div-2">
                <div className="text-wrapper-2">REPORTE Y ANALISIS</div>
  
                <img className="robot" alt="Robot" src={robot2} />

                <div className="rectangle-analisis"/>
              </div>
  
              <div className="overlap-group-2">
                <p className="text-wrapper-3">
                Conecta y visualiza tus datos en Power BI, genera informes dinámicos e interactivos. Usa su capacidad analítica avanzada para obtener insights precisos.
                </p>
  
                <div className="title-funcionalidad-2">INTEGRACION CON <span className="gradient-title">POWER BI</span></div>
  
                <div className="frame-3" />
              </div>
            </div>
  
            <div className="reporte-2">
              <div className="div-2">
                <div className="text-2">REPORTE Y ANALISIS</div>
  
                <img className="robot" alt="Robot" src={robot} />

                <div className="rectangle-analisis"/>
              </div>
  
              <div className="overlap-group-2">
                <p className="description-2">
                Accede en tiempo real a un conjunto de métricas estratégicas que facilitan la toma de decisiones basada en datos.
                </p>
  
                <div className="title-funcionalidad-2">PANEL DE <span className="gradient-title">METRICAS CLAVES</span></div>
  
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

                <div className="rectangle-category"/>
              </div>
  
              <div className="overlap-group-3">
                <p className="description-3">
                  Toda la información operativa en un solo lugar, con estadísticas
                  y notificaciones clave.
                </p>
  
                <div className="title-funcionalidad-2">MONITOREO EN <span className="gradient-title">TIEMPO </span>REAL</div>
  
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

                  <div className="rectangle-category"/>
              </div>
  
              <div className="overlap-2">
                <p className="description-4">
                Automatiza procesos clave para reducir tiempos de ejecución, minimizar errores y mejorar la productividad
                </p>
  
                <div className="title-funcionalidad-2"><span className="gradient-title">AUTOMATIZACION </span>DE PROCESOS</div>
  
                <div className="div-wrapper">
                  <div className="ellipse" />
                </div>
              </div>
            </div>
          </div>

          <div className="lines-triangle">
            <img src={leftUpLine} alt="Left Up Line" className="left-upline" />
            <img src={rightUpLine} alt="Right Up Line" className="right-upline" />
            <img src={leftDownLine} alt="Left Down Line" className="left-downline" />
            <img src={rightDownLine} alt="Right Down Line" className="right-downline" />
            <img src={leftDownLine2} alt="Left Down Line 2" className="left-downline-2" />
            <img src={rightDownLine2} alt="Right Down Line 2" className="right-downline-2" />
          </div>
  
          <div className="triangle">
            <div className="overlap-6">
              <div className="triangulo">
              <div className="icon-triangle">
              <img className="icon-2" alt="Icon" src={icon} />
              <img className="icon-ll" alt="Icon ll" src={iconLl} />
              </div>
              <div className="borde borde-top"></div>
        <div className="borde borde-left"></div>
        <div className="borde borde-right"></div>
                <div className="sombra"></div>
              </div>


            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };

export default CaracteristicasLll;