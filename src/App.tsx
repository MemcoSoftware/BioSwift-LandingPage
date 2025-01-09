import React, { useState, useEffect } from "react";
import "../src/styles/App.css";

// Importa todos los componentes
import Head from "./components/head";
import Hero from "./components/hero";
import HeroII from "./components/hero_ll";
import Caracteristicas from "./components/caracteristicas";
import CaracteristicasLl from "./components/caracteristicas_ll";
import CaracteristicasIII from "./components/caracteristicas_lll";
import Tecnologias from "./components/tecnologias";
import NuestrosClientes from "./components/nuestros_clientes";
import NuestrosProductos from "./components/nuestros_productos";

const App: React.FC = (): JSX.Element => {
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
          <div>
            <HeroII />
          </div>
          <div>
            <Caracteristicas />
          </div>
          <div>
            <CaracteristicasLl />
          </div>
          <div>
            <CaracteristicasIII />
          </div>
          <div>
            <Tecnologias />
          </div>
          <div>
            <NuestrosClientes />
          </div>
          <div>
            <NuestrosProductos />
          </div>
        </div>
    </div>
  );
};

export default App;
