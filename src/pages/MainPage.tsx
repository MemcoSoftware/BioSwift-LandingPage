import React, { useState, useEffect, useRef } from "react";
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
import Footer from "../components/footer";

const MainPage: React.FC = (): JSX.Element => {
  const caracteristicasllRef = useRef<HTMLDivElement>(null);
  const [showHeader, setShowHeader] = useState(true);
  const [selectedSection, setSelectedSection] = useState<string>(""); // Estado para la sección seleccionada
  const [showMore, setShowMore] = useState(false);

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
  }, [selectedSection]);

  // Función para manejar la sección seleccionada desde cualquier parte (Head, Footer, HeroII)
  const handleSectionChange = (section: string): void => {
    setSelectedSection(section);
    if (section !== "caracteristicas") {
      setShowMore(false);
    }
  };

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
    setTimeout(() => {
      caracteristicasllRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <div>
      {showHeader && <Head onSectionChange={handleSectionChange} selectedSection={selectedSection} />}
      
      <div className="snap-container">
        <div id="hero">
          <Hero />
        </div>

        <div id="heroll">
          <HeroII onSectionChange={handleSectionChange} selectedSection={selectedSection} />
        </div>

        {selectedSection === "caracteristicas" && (
          <div id="caracteristicas">
            <Caracteristicas onShowMore={handleShowMore} showMore={showMore} />
          </div>
        )}

        {selectedSection === "caracteristicas" && showMore && (
          <>
            <div id="caracteristicasll" ref={caracteristicasllRef}>
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

        {selectedSection === "Footer" && (
          <div id="Footer">
            <Footer onSectionChange={handleSectionChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
