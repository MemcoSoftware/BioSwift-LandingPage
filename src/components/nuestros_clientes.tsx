import React from "react";
import bgDetails from "../images/nuestros_clientes/bg_details.png";
import mainTitle from "../images/nuestros_clientes/main_title.png";
import "../styles/nuestros_clientes.css";
import ParticlesBackgroundComponent from "./ParticlesBackgroundComponent";
import colmendicaLogo from "../images/nuestros_clientes/colmendica-removebg.png";
import ponalLogo from "../images/nuestros_clientes/PONAL-removebg.png";
import militarLogo from "../images/nuestros_clientes/MILITAR-removebg.png";
import ponal2Logo from "../images/nuestros_clientes/ponal2-removebg.png";
import dinamicaLogo from "../images/nuestros_clientes/dinamica-removebg.png";
import comfandiLogo from "../images/nuestros_clientes/comfandi-logo-removebg.png";
import secretariaSaludLogo from "../images/nuestros_clientes/secretaria_de_salud-removebg.png";
import senaLogo from "../images/nuestros_clientes/SENA-removebg.png";
import suraEpsLogo from "../images/nuestros_clientes/sura_EPS-removebg.png";
import suraArpLogo from "../images/nuestros_clientes/sura_ARP-removebg.png";
import uniAntioquiaLogo from "../images/nuestros_clientes/universidad_antioquia-removebg.png";
import uniBosqueLogo from "../images/nuestros_clientes/universidad_del_bosque-removebg.png";

export const NuestrosClientes = (): JSX.Element => {
  return (
    <div className="nuestros-clientes">
      <div className="overlap-group">
        <img className="bg-details" alt="Bg details" src={bgDetails} />
        <div className="clients-grid">
          {[colmendicaLogo, ponalLogo, militarLogo, ponal2Logo, dinamicaLogo, comfandiLogo, secretariaSaludLogo, senaLogo, suraEpsLogo, suraArpLogo, uniAntioquiaLogo, uniBosqueLogo].map((logo, index) => (
            <div className="hexagon-wrapper" key={index}>
              <div className="hexagon-border"></div>
              <div className="hexagon-inner">
                <img className="client-logo" alt={`Client ${index + 1}`} src={logo} />
              </div>
            </div>
          ))}
        </div>
        <div className="particlesbg-container">
          <ParticlesBackgroundComponent />
        </div>
      </div>

      <img className="main-title" alt="Main title" src={mainTitle} />
    </div>
  );
};

export default NuestrosClientes;
