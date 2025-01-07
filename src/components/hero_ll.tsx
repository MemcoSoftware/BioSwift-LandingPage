import React from "react";
import arrow1 from "../images/hero_ll/arrow_1.png";
import heartM from "../images/hero_ll/heartM.png";
import polygon29 from "../images/hero_ll/polygon_29.png";
import polygon30 from "../images/hero_ll/polygon_30.png";
import polygon31 from "../images/hero_ll/polygon_31.png";
import subtexto from "../images/hero_ll/subtexto.png";
import texto from "../images/hero_ll/texto.png";
import vector46 from "../images/hero_ll/vector_46.png";
import vector47 from "../images/hero_ll/vector_47.png"
import vector48 from "../images/hero_ll/vector_48.png"
import vector49 from "../images/hero_ll/vector_49.png"
import vector from "../images/hero_ll/vector.png";
import '../styles/hero_ll.css'

export const HeroLl = (): JSX.Element => {
  return (
    <div className="hero-ll">
      <div className="overlap">
        <div className="test-bioswift">
          <div className="overlap-group">
            <img className="arrow" alt="Arrow" src={arrow1} />
          </div>

          <div className="text">TEST BIOSWIFT</div>
        </div>

        <div className="float-info">
          <div className="indicadores">
            <div className="div">
              <div className="text-wrapper">Indicadores en tiempo real</div>

              <img className="vector" alt="Vector" src={vector} />
            </div>
          </div>

          <div className="trazabilidad-gestion">
            <div className="overlap-2">
              <p className="p">Trazabilidad y gestion de sus equipos</p>

              <img className="heart-m" alt="Heart m" src={heartM} />
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="overlap-3">
            <img className="img" alt="Vector" src={vector46} />

            <img className="vector-2" alt="Vector" src={vector47} />
          </div>

          <div className="overlap-4">
            <img className="vector-3" alt="Vector" src={vector48} />

            <img className="vector-4" alt="Vector" src={vector49} />
          </div>
        </div>

        <div className="main-text">
          <img className="texto" alt="Texto" src={texto} />

          <img className="subtexto" alt="Subtexto" src={subtexto} />
        </div>

        <div className="upper-capsules">
          <div className="phrase-capsule">
            <div className="best-innovation-wrapper">
              <div className="best-innovation">Best Innovation Software</div>
            </div>
          </div>

          <div className="nav-capsule">
            <div className="overlap-5">
              <div className="rectangle" />

              <div className="text-wrapper-2">Caracteristicas</div>

              <div className="text-wrapper-3">Productos</div>

              <div className="text-wrapper-4">Clientes</div>

              <div className="text-wrapper-5">Servicios</div>

              <div className="text-wrapper-6">FAQ</div>
            </div>
          </div>
        </div>

        <div className="bg-effects">
          <img className="polygon" alt="Polygon" src={polygon29} />

          <img className="polygon-2" alt="Polygon" src={polygon30} />

          <img className="polygon-3" alt="Polygon" src={polygon31} />
        </div>
      </div>
    </div>
  );
};

export default HeroLl;