import React from "react";
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
import textAccess from "../images/caracteristicas_ll/text_access.png";
import textCustomizable from "../images/caracteristicas_ll/text_customizable.png";
import textCustomizable2 from "../images/caracteristicas_ll/text_customizable-1.png";
import textDashboard from "../images/caracteristicas_ll/text_dashboard.png";
import textFilters2 from "../images/caracteristicas_ll/text_filters-1.png";
import textFilters from "../images/caracteristicas_ll/text_filters.png";
import textIntegration from "../images/caracteristicas_ll/text_integration.png";
import textIntelligent from "../images/caracteristicas_ll/text_intelligent.png";
import textIntuitive from "../images/caracteristicas_ll/text_intuitive.png";
import textPassword from "../images/caracteristicas_ll/text_password.png";
import textReports from "../images/caracteristicas_ll/text_reports.png";
import textSupport from "../images/caracteristicas_ll/text_support.png";
import vector5Access from "../images/caracteristicas_ll/vector_5_access.png";
import vectorCustomizable2 from "../images/caracteristicas_ll/vector_customizable-1.png";
import vectorCustomizable from "../images/caracteristicas_ll/vector_customizable.png";
import vectorDashboard from "../images/caracteristicas_ll/vector_dashboard.png";
import vectorFilters2 from "../images/caracteristicas_ll/vector_filters-1.png";
import vectorFilters from "../images/caracteristicas_ll/vector_filters.png";
import vectorIntegration from "../images/caracteristicas_ll/vector_integration.png";
import vectorIntelligent from "../images/caracteristicas_ll/vector_intelligent.png";
import vectorIntuitive from "../images/caracteristicas_ll/vector_intuitive.png";
import vectorPassword from "../images/caracteristicas_ll/vector_password.png";
import vectorReports from "../images/caracteristicas_ll/vector_reports.png";
import vectorSupport from "../images/caracteristicas_ll/vector_support.png";

const features = [
  { text: textAccess, icon: iconAccess, vector: vector5Access },
  { text: textCustomizable, icon: iconCustomizable, vector: vectorCustomizable },
  { text: textDashboard, icon: iconDashboard, vector: vectorDashboard },
  { text: textFilters2, icon: iconFilters2, vector: vectorFilters2 },
  { text: textFilters, icon: iconFilters, vector: vectorFilters },
  { text: textIntegration, icon: iconIntegration, vector: vectorIntegration },
  { text: textIntelligent, icon: iconIntelligent, vector: vectorIntelligent },
  { text: textIntuitive, icon: iconIntuitive, vector: vectorIntuitive },
  { text: textCustomizable2, icon: iconNotifications, vector: vectorCustomizable2 },
  { text: textPassword, icon: iconPassword, vector: vectorPassword },
  { text: textReports, icon: iconReports, vector: vectorReports },
  { text: textSupport, icon: iconSupport, vector: vectorSupport },
];

export const CaracteristicasLl = (): JSX.Element => {
  return (
    <div className="caracteristicas-ll">
      <div className="slider" style={{ "--quantity": features.length } as React.CSSProperties}>
        {features.map((feature, index) => (
          <div
            className="item"
            key={index}
            style={{ "--position": index + 1 } as React.CSSProperties}
          >
            <div className="feature-content">
              <img className="feature-text" alt={`Texto ${index}`} src={feature.text} />
              <img className="feature-icon" alt={`Icono ${index}`} src={feature.icon} />
            </div>
            <img className="feature-vector" alt={`Vector ${index}`} src={feature.vector} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaracteristicasLl;