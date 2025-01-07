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
export const Caracteristicas = (): JSX.Element => {
  return (
    <div className="caracteristicas">
      <div className="overlap">
        <div className="ver-mas">
          <img className="text" alt="Text" src={text} />

          <img className="arrow" alt="Arrow" src={arrow2} />
        </div>

        <div className="overlap-wrapper">
          <div className="overlap-group">
            <div className="seguridad-y-accesos">
              <div className="div">
                <div className="overlap-2">
                  <img className="padlock" alt="Padlock" src={padlock} />

                  <p className="description">
                    <span className="text-wrapper">
                      Registro de actividad
                      <br />
                    </span>

                    <span className="span">
                      Sesiones temporales
                      <br />
                      Certificados SSL/TLS
                      <br />
                      Roles jerárquicos avanzados
                      <br />
                      Acceso segmentado
                    </span>
                  </p>
                </div>

                <div className="title">SEGURIDAD Y ACCESOS</div>
              </div>
            </div>

            <div className="reporte-y-analisis">
              <div className="div">
                <div className="overlap-group-2">
                  <img className="icon" alt="Icon" src={icon} />

                  <p className="p">
                    Panel de métricas clave
                    <br />
                    Comparación de períodos
                    <br />
                    Alertas en reportes
                    <br />
                    Informe de costos
                    <br />
                    Integración con Power BI
                  </p>
                </div>

                <div className="title-2">REPORTE Y ANALISIS</div>
              </div>
            </div>

            <div className="funcionalidades">
              <div className="overlap-3">
                <div className="overlap-group-3">
                  <img className="img" alt="Icon" src={image} />

                  <p className="description-2">
                    Gestión de inventarios automatizada
                    <br />
                    Estado de los equipos
                    <br />
                    Historial de intervenciones
                    <br />
                    Automatización de procesos
                    <br />
                    Monitoreo en tiempo real
                  </p>
                </div>

                <div className="title-3">FUNCIONALIDADES</div>
              </div>
            </div>

            <div className="neon-lines">
              <div className="rectangle" />

              <div className="rectangle-2" />

              <div className="rectangle-3" />
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