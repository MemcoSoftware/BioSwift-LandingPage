import React, { useState, useEffect } from "react";
import iconAccess from "../images/caracteristicas_ll/icon_access.png";
import iconCustomizable from "../images/caracteristicas_ll/icon_customizable.png";
import iconDashboard from "../images/caracteristicas_ll/icon_dashboard.png";
import iconFilters2 from "../images/caracteristicas_ll/icon_filters-1.png";
import iconFilters from "../images/caracteristicas_ll/icon_filters.png";
import iconIntegration from "../images/caracteristicas_ll/icon_integration.png";
import iconIntelligent from "../images/caracteristicas_ll/icon_intelligent.png";
import iconIntuitive from "../images/caracteristicas_ll/icon_intuitive.png";
import iconNotifications from "../images/caracteristicas_ll/icon_notifications.png";
import iconPassword from "../images/caracteristicas_ll/icon_password.png";
import iconReports from "../images/caracteristicas_ll/icon_reports.png";
import iconSupport from "../images/caracteristicas_ll/icon_support.png";
import "../styles/caracteristicas_ll.css";

const features = [
  { title: ["Acceso"], icon: iconAccess },
  { title: ["Personalizable"], icon: iconCustomizable },
  { title: ["Dashboard", "Interactivo"], icon: iconDashboard },
  { title: ["Filtros", "Avanzados"], icon: iconFilters2 },
  { title: ["Filtros"], icon: iconFilters },
  { title: ["Integración", "con APIs"], icon: iconIntegration },
  { title: ["Informes", "Inteligentes"], icon: iconIntelligent },
  { title: ["Diseño", "Intuitivo"], icon: iconIntuitive },
  { title: ["Notificaciones"], icon: iconNotifications },
  { title: ["Contraseñas", "Robustas"], icon: iconPassword },
  { title: ["Reportes"], icon: iconReports },
  { title: ["Soporte", "Técnico"], icon: iconSupport },
];

export const CaracteristicasLl = (): JSX.Element => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotation, setAutoRotation] = useState<boolean>(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
  
    if (autoRotation) {
      intervalId = setInterval(() => {
        setRotationAngle((prevAngle) => (prevAngle + 0.2) % 360);
      }, 16); // Aproximadamente 60FPS (1000ms / 60 ≈ 16ms)
    }
  
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoRotation]);

  const handleFeatureClick = (index: number) => {
    if (selectedFeature === index) {
      setSelectedFeature(null);
      setAutoRotation(true); // Reactiva la rotación automática
    } else {
      setSelectedFeature(index);
      setAutoRotation(false); // Detiene la rotación automática
  
      const totalItems = features.length;
      const currentAngle = rotationAngle % 360;
      const targetAngle = (-360 / totalItems) * index;
  
      // 🔥 Asegurar que siempre tome el camino más corto
      let newRotationAngle = currentAngle;
      const angleDifference = ((targetAngle - currentAngle + 540) % 360) - 180;
      
      newRotationAngle += angleDifference;
  
      setRotationAngle(newRotationAngle);
    }
  };
  

  return (
      
      <div className="caracteristicas-ll">
        <div className="bgs">
          <div className="bg-new"></div>
          <div className="bg-second"></div>
        </div>

        <div className="overlap-title">
          <div className="overlap-ll">
            <div className="text-s">DESTACADOS</div>

            <div className="title-text">DESTACADOS</div>
          </div>
        </div>

        <div
          className="slider"
          style={
            {
              "--quantity": features.length,
              transform: `translateZ(3000px) rotateX(-8deg) rotateY(${rotationAngle}deg)`,
              transition: "transform 1s ease",
            } as React.CSSProperties
          }
        >
          {features.map((feature, index) => (
            <div
            key={index}
            className={`item ${selectedFeature === index ? "selected" : ""}`}
            onClick={() => handleFeatureClick(index)}
              style={
                {
                  "--position": index + 1,
                  transform: `rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px)`,
                } as React.CSSProperties
              }
            >
              <div className="feature-content">
                <div className="feature-title">
                  {feature.title.map((word, i) => (
                    <div key={i} className={i === 1 ? "gradient-text" : ""}>
                      {word}
                    </div>
                  ))}
                </div>
                <img className="feature-icon" alt={`Icono ${feature.title.join(" ")}`} src={feature.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default CaracteristicasLl;