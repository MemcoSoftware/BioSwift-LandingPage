import React from "react";
import bgDetails from "../images/nuestros_clientes/bg_details.png";
import clients from "../images/nuestros_clientes/clients.png";
import mainTitle from "../images/nuestros_clientes/main_title.png";
import "../styles/nuestros_clientes.css";

export const NuestrosClientes = (): JSX.Element => {
  return (
    <div className="nuestros-clientes">
      <div className="overlap-group">
        <img className="bg-details" alt="Bg details" src={bgDetails} />

        <img className="clients" alt="Clients" src={clients} />
      </div>

      <img className="main-title" alt="Main title" src={mainTitle} />
    </div>
  );
};

export default NuestrosClientes;