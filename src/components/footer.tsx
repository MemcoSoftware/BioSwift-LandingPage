import React, { useState } from "react";
import "../styles/footer.css";
import logo from "../images/footer/logo.png";
import location from "../images/footer/location.png";
import phone from "../images/footer/phone.png";
import mail from "../images/footer/mail.png";
import facebook from "../images/footer/facebook.png";
import instagram from "../images/footer/instagram.png";
import linkedin from "../images/footer/linkedin.png";
import youtube from "../images/footer/youtube.png";
import tiktok from "../images/footer/tiktok.png";

interface FooterProps {
  onSectionChange: (section: string) => void;
}

const handleConsultorioClick = () => {
  // Redirección externa
  window.open("https://memcosas.com/categoria-producto/odontologia-2/consultorios/", "_blank");
};

const handleRayosXClick = () => {
  // Redirección externa
  window.open("https://memcosas.com/categoria-producto/odontologia-2/rayos-x/", "_blank");
};

const handleBasculasClick = () => {
  // Redirección externa
  window.open("https://memcosas.com/categoria-producto/medicina/basculas/", "_blank");
};

const handleBioseguridadClick = () => {
  // Redirección externa
  window.open("https://memcosas.com/categoria-producto/odontologia-2/bioseguridad/", "_blank");
};

const handleCompresoresClick = () => {
  // Redirección externa
  window.open("https://memcosas.com/categoria-producto/odontologia-2/compresores/", "_blank");
};

const handleTekomClick = () => {
  // Redirección externa
  window.open("https://tekom.com/", "_blank");
};
const handleMemcoClick = () => {
  // Redirección externa
  window.open("https://memcosas.com/", "_blank");
};

const handleBioswiftClick = () => {
  // Redirección externa
  window.open("https://bioswift.net/login", "_blank");
};

const handleFacebookClick = () => {
  // Redirección externa
  window.open("https://www.facebook.com/memcosas", "_blank");
};

const handleLinkedinClick = () => {
  // Redirección externa
  window.open("https://co.linkedin.com/company/memco-sas", "_blank");
};

const handleInstagramClick = () => {
  // Redirección externa
  window.open("https://www.instagram.com/memcosas/?hl=es-la", "_blank");
};

const handleTiktokClick = () => {
  // Redirección externa
  window.open("https://www.tiktok.com/@memcosas?lang=es", "_blank");
};

const handleYoutubeClick = () => {
  // Redirección externa
  window.open("https://www.youtube.com/@memcosas9598", "_blank");
};


export const Footer: React.FC<FooterProps> = ({ onSectionChange }) => {
  const [loading, setLoading] = useState<boolean>(false); // Estado para el loader
  const [activeSection, setActiveSection] = useState<string>(""); // Estado para la sección activa

  const handleClick = (section: string) => {
    setLoading(true); // Activa el loader
    setTimeout(() => {
      setLoading(false); // Desactiva el loader tras 650ms
      setActiveSection(section); // Actualiza la sección activa
      onSectionChange(section); // Notifica a MainPage la sección seleccionada
    }, 650);
  };

  return (
    <footer className="footer">
      {/* Loader */}
      {loading && (
        <div className="loader-container">
          <div className="loader-overlay">
            <p>Cargando...</p>
          </div>
        </div>
      )}

      <div className="footer-content">
        <div className="footer-bioswift">
          <img className="logo-footer" alt="logo-footer" src={logo} />
          <h3>BIOSWIFT</h3>
          <p>© 2025 Bioswift All rights reserved</p>
        </div>

        <div className="footer-info">
          <div className="info-content">
            <img className="contacts" alt="phone" src={phone} />
            <p>+57 3025409991</p>
          </div>
          <div className="info-content">
            <img className="contacts" alt="location" src={location} />
            <p>Cra. 70 #2IA 16</p>
          </div>
          <div className="info-content">
            <img className="contacts" alt="mail" src={mail} />
            <p>Serviclomenico@memcosas.com</p>
          </div>
        </div>

        {/* Sección de Overview con navegación a secciones */}
        <div className="footer-section">
          <div className="footer-selected">
            <h3>Overview</h3>
            <ul>
              <li onClick={() => handleClick("hero")}>Home</li>
              <li onClick={() => handleClick("caracteristicas")}>Características</li>
              <li onClick={() => handleClick("nuestrosClientes")}>Clientes</li>
              <li onClick={() => handleClick("nuestrosProductos")}>Productos</li>
              <li onClick={() => handleClick("faqs")}>Contacto</li>
            </ul>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-selected">
            <h3>Productos</h3>
            <ul>
              <li onClick={handleCompresoresClick}>Compresores</li>
              <li onClick={handleRayosXClick}>Rayos X</li>
              <li onClick={handleBasculasClick}>Basculas</li>
              <li onClick={handleBioseguridadClick}>Bioseguridad</li>
              <li onClick={handleConsultorioClick}>Consultorios</li>
            </ul>
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-selected">
            <h3>Pages</h3>
            <ul>
              <li onClick={handleMemcoClick}>Memcosas.com</li>
              <li onClick={handleBioswiftClick}>Bioswift.net</li>
              <li onClick={handleTekomClick}>Tekom.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-social-icons">
          <img className="social-icon-facebook" alt="Facebook" src={facebook} onClick={handleFacebookClick}/>
          <img className="social-icon" alt="YouTube" src={youtube} onClick={handleYoutubeClick} />
          <img className="social-icon" alt="TikTok" src={tiktok} onClick={handleTiktokClick}/>
          <img className="social-icon" alt="Instagram" src={instagram} onClick={handleInstagramClick}/>
          <img className="social-icon" alt="LinkedIn" src={linkedin} onClick={handleLinkedinClick}/>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
