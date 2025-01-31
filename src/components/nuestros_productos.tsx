import React, { useState } from "react";
import showingProduct from "../images/nuestros_productos/showing_product.png";
import product2 from "../images/nuestros_productos/product2.png";
import product3 from "../images/nuestros_productos/product3.png";
import "../styles/nuestros_productos.css";
import verMas from "../images/nuestros_productos/ver_mas.png";

const products = [
  {
    image: showingProduct,
    title: "Bomba de Succión VS300S",
    description:
      "Este innovador sistema de aspiración ha sido diseñado para maximizar la eficiencia en la gestión de espuma y líquidos, incorporando tecnología avanzada de separación ciclónica y turbina para garantizar un rendimiento óptimo en todo momento. Su diseño compacto 'dos en uno' no solo permite un ahorro significativo de espacio, sino que también facilita su instalación en diversos entornos sin comprometer su funcionalidad. ",
    brand: "Durr Dental",
    dtitle: "Sistema de aspiracion centralizada con separación automática"
  },
  {
    image: product2,
    title: "Bomba de Succión VS600",
    description:
      "Combina aspiración centralizada y separación automática en un solo motor, optimizando espacio y eficiencia. Su sistema de separación en dos etapas, con ciclón y turbina, elimina eficazmente espuma y líquidos, garantizando un flujo constante. Su diseño compacto facilita la instalación sin comprometer potencia, mientras que su ingeniería de precisión reduce el mantenimiento y prolonga la vida útil, ofreciendo un rendimiento confiable en cualquier entorno.",
    brand: "Durr Dental",
    dtitle: "Sistema de Aspiración Global VS 600 de Dürr"
  },
  {
    image: product3,
    title: "Bomba de Succión VS1200S",
    description:
      "Integra un separador automático en un solo motor, optimizando espacio y eficiencia. Su doble sistema de separación en dos etapas, con ciclón y turbina, garantiza la eliminación efectiva de espuma y líquidos en el área de turbina. Su diseño compacto dos en uno reduce el espacio necesario para la instalación, mientras que la tobera de ventilación integrada mantiene una aspiración potente y constante en todo momento.",
    brand: "Durr Dental",
    dtitle: "Sistema de Aspiración Húmeda Centralizada"
  },
];

export const NuestrosProductos = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return; // Evitar múltiples clics durante la animación
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      setIsAnimating(false);
    }, 500); // Duración de la animación
  };

  const handlePrev = () => {
    if (isAnimating) return; // Evitar múltiples clics durante la animación
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
      setIsAnimating(false);
    }, 500); // Duración de la animación
  };

  const handleMasProducts = () => {
    window.open("https://memcosas.com/tienda/", "_blank");
  };

  const handleProductClick = (index: number) => {
    if (index === (currentIndex - 1 + products.length) % products.length) {
      handlePrev(); // Si se hace clic en el producto de la izquierda
    } else if (index === (currentIndex + 1) % products.length) {
      handleNext(); // Si se hace clic en el producto de la derecha
    }
  };

  return (
    <div className="nuestros-productos">
      <div className="overlap">
        <div className="bg">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="div" />
          </div>
        </div>

        <div className="ver-mas" onClick={handleMasProducts}>
          VER <span className="ver-mas-gradient">MÁS</span>
        </div>

        <div className={`product-info ${isAnimating ? "fade-out" : ""}`}>
          <div className="overlap-2">
            <p className={`descritpion ${isAnimating ? "fade-out" : ""}`}>
              {products[currentIndex].description}
            </p>
          </div>
          <p className={`title ${isAnimating ? "fade-out" : ""}`}>
            {products[currentIndex].dtitle}
          </p>
        </div>

        <div className="product-carousel">
          {products.map((product, index) => {
            let positionClass = "side";
            if (index === currentIndex) {
              positionClass = "center";
            } else if (index === (currentIndex - 1 + products.length) % products.length) {
              positionClass = "left";
            } else if (index === (currentIndex + 1) % products.length) {
              positionClass = "right";
            }
            return (
              <img
                key={index}
                className={`product-image ${positionClass}`}
                alt="Product"
                src={product.image}
                onClick={() => handleProductClick(index)}
              />
            );
          })}
        </div>

        <div className="product-name">
          <div className={`marca ${isAnimating ? "fade-out" : ""}`}>
            {products[currentIndex].brand}
          </div>
          <div className={`overlap-3 ${isAnimating ? "fade-out" : ""}`}>
            <div className={`shadow-text ${isAnimating ? "fade-out" : ""}`}>
              {products[currentIndex].title}
            </div>
            <div className={`text ${isAnimating ? "fade-out" : ""}`}>
              {products[currentIndex].title}
            </div>
          </div>
        </div>

        <div className="overlap-wrapper">
          <div className="overlap-4">
            <div className="text-wrapper">NUESTROS PRODUCTOS</div>
            <div className="shadow-text-2">NUESTROS PRODUCTOS</div>
            <div className="text-2">NUESTROS PRODUCTOS</div>
          </div>
        </div>

        <div className="carousel-indicators">
          {products.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NuestrosProductos;