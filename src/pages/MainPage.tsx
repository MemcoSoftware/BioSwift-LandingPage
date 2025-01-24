import React, { useState, useEffect } from "react";
import "./styles/MainPage.css";
import Head from "../components/head";
import Hero from "../components/hero";
import HeroII from "../components/hero_ll";
import Caracteristicas from "../components/caracteristicas";
import CaracteristicasLl from "../components/caracteristicas_ll";
import CaracteristicasIII from "../components/caracteristicas_lll";
import Tecnologias from "../components/tecnologias";
import NuestrosClientes from "../components/nuestros_clientes";
import NuestrosProductos from "../components/nuestros_productos";

// Importa todos los componentes

const MainPage: React.FC = (): JSX.Element => {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const heroElement = document.getElementById("hero");

    if (!heroElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHeader(entry.isIntersecting); // Actualiza si el Hero está visible
      },
      { threshold: 0.5 } // Se considera visible si el 50% de Hero está en el viewport
    );

    observer.observe(heroElement);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {showHeader && <Head />} {/* Header visible solo si `showHeader` es true */}
      <div className="snap-container">
          <div id="hero">
            <Hero />
          </div>
          <div id="heroll">
            <HeroII />
          </div>
          <div id='caracteristicas'>
            <Caracteristicas />
          </div>
          <div id='caracteristicasll'>
            <CaracteristicasLl />
          </div>
          <div id="caracteristicaslll">
            <CaracteristicasIII />
          </div>
          <div id="tecnologias">
            <Tecnologias />
          </div>
          <div id="nuestrosClientes">
            <NuestrosClientes />
          </div>
          <div id="nuestrosProductos">
            <NuestrosProductos />
          </div>
        </div>
    </div>
  );
};

export default MainPage;
