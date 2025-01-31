import React from "react";
import "../styles/footer.css"; // Asegúrate de crear este archivo CSS

export const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>BIOSWIFT</h3>
          <p>2025 Bioswift All rights reserved</p>
          <p>+57 3025409991</p>
          <p>Cra. 70 #2IA 16</p>
          <p>Serviclomenico@memcosas.com</p>
        </div>
        <div className="footer-section">
          <h3>Overview</h3>
          <ul>
            <li>Home</li>
            <li>Caracteristicos</li>
            <li>Clientes</li>
            <li>Servicios</li>
            <li>FAQS</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Productos</h3>
          <ul>
            <li>Loser</li>
            <li>Camillo</li>
            <li>Termometro</li>
            <li>Cuchilla</li>
            <li>Cranometro</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Pages</h3>
          <ul>
            <li>Memcosas.com</li>
            <li>Bukmemcosas.com</li>
            <li>BioSwift.net</li>
            <li>PhotoSwift.net</li>
            <li>PlatterSwift.net</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;