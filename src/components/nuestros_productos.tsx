import React from "react";
import showingProduct from "../images/nuestros_productos/showing_product.png";
import "../styles/nuestros_productos.css";
import verMas from "../images/nuestros_productos/ver_mas.png";

export const NuestrosProductos = (): JSX.Element => {
  return (
    <div className="nuestros-productos">
      <div className="overlap">
        <div className="bg">
          <div className="overlap-group">
            <div className="rectangle" />

            <div className="div" />
          </div>
        </div>

        <img className="ver-mas" alt="Ver mas" src={verMas} />

        <div className="product-info">
          <div className="overlap-2">
            <p className="descritpion">
              Este innovador sistema combina tecnología de separación ciclónica
              y turbina para una gestión eficiente de espuma y líquidos,
              optimizando el rendimiento. Su diseño compacto "dos en
              uno" ahorra espacio, mientras que la tobera de ventilación
              integrada garantiza una potencia de aspiración constante y máxima
              eficacia en cualquier entorno.
            </p>

          </div>

          <p className="title">
            Sistema de aspiración centralizada con separación automática
          </p>
        </div>

        <img
          className="showing-product"
          alt="Showing product"
          src={showingProduct}
        />

        <div className="product-name">
          <div className="marca">Durr Dental</div>

          <div className="overlap-3">
            <div className="shadow-text">Bomba de Succión VS300S</div>

            <div className="text">Bomba de Succión VS300S</div>
          </div>
        </div>

        <div className="overlap-wrapper">
          <div className="overlap-4">
            <div className="text-wrapper">NUESTROS PRODUCTOS</div>

            <div className="shadow-text-2">NUESTROS PRODUCTOS</div>

            <div className="text-2">NUESTROS PRODUCTOS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestrosProductos;