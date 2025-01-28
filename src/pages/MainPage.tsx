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

const MainPage: React.FC = (): JSX.Element => {
  const [showHeader, setShowHeader] = useState(true);
  const [selectedSection, setSelectedSection] = useState<string>(""); // Estado para la sección seleccionada

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

  // Efecto para desplazarse automáticamente a la sección seleccionada
  useEffect(() => {
    if (selectedSection) {
      const sectionElement = document.getElementById(selectedSection);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [selectedSection]); // Este efecto se ejecuta cada vez que cambia `selectedSection`

  // Función para manejar la sección seleccionada
  const handleSectionChange = (section: string): void => {
    setSelectedSection(section); // Cambia la sección activa
  };

  const [showMore, setShowMore] = useState<boolean>(false);

const handleShowMore = () => {
  setShowMore(true); // Activa la visualización de las secciones adicionales
};


  return (
    <div>
      {showHeader && <Head />} {/* Header visible solo si `showHeader` es true */}
      <div className="snap-container">
        <div id="hero">
          <Hero />
        </div>

        <div id="heroll">
          <HeroII onSectionChange={handleSectionChange} />
        </div>

        {selectedSection === "caracteristicas" && (
          <div id="caracteristicas">
         <Caracteristicas onShowMore={handleShowMore} />
          </div>
        )}

        {showMore && (
          <>
            <div id="caracteristicasll">
              <CaracteristicasLl />
            </div>
            <div id="caracteristicaslll">
              <CaracteristicasIII />
            </div>
          </>
        )}

        {selectedSection === "tecnologias" && (
          <div id="tecnologias">
            <Tecnologias />
          </div>
        )}

        {selectedSection === "nuestrosClientes" && (
          <div id="nuestrosClientes">
            <NuestrosClientes />
          </div>
        )}

        {selectedSection === "nuestrosProductos" && (
          <div id="nuestrosProductos">
            <NuestrosProductos />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
