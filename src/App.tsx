import React from "react";

// Importa todos los componentes desde la carpeta "components"
import Head from "./components/head";
import Hero from "./components/hero";
import HeroII from "./components/hero_ll";
import Caracteristicas from "./components/caracteristicas";
import CaracteristicasII, { CaracteristicasLl } from "./components/caracteristicas_ll";
import CaracteristicasIII from "./components/caracteristicas_lll";
import Tecnologias from "./components/tecnologias";
import NuestrosClientes from "./components/nuestros_clientes";
import NuestrosProductos from "./components/nuestros_productos";
//import Footer from "./components/footer";

// Componente principal de la aplicación
const App: React.FC = (): JSX.Element => {
  return (
    <div>
      {/* Estructura de la landing page */}
      <Head />
      <Hero />
      <HeroII />
      <Caracteristicas />
      <CaracteristicasLl />
      <CaracteristicasIII/>
      <Tecnologias/>
      <NuestrosClientes/>
      <NuestrosProductos/>
    </div>
  );
};

// Exporta el componente principal
export default App;
