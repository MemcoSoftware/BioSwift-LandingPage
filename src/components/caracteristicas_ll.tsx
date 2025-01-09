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

export const CaracteristicasLl = (): JSX.Element => {
  return (
    <div className="caracteristicas-ll">
      <div className="overlap">
        <div className="third-line">
          <div className="overlap-group">
            <div className="tech-support">
              <img
                className="text-support"
                alt="Text support"
                src={textSupport}
              />

              <img
                className="icon-support"
                alt="Icon support"
                src={iconSupport}
              />
            </div>

            <div className="operational">
              <img
                className="text-filters"
                alt="Text filters"
                src={textFilters2}
              />

              <img
                className="icon-filters"
                alt="Icon filters"
                src={iconFilters}
              />
            </div>

            <div className="advanced-filters">
              <img className="img" alt="Text filters" src={textFilters} />

              <img
                className="icon-filters-2"
                alt="Icon filters"
                src={iconFilters2}
              />
            </div>

            <div className="intelligent-reports">
              <img
                className="text-intelligent"
                alt="Text intelligent"
                src={textIntelligent}
              />

              <img
                className="icon-intelligent"
                alt="Icon intelligent"
                src={iconIntelligent}
              />
            </div>

            <div className="div">
              <img
                className="img-2"
                alt="Vector intelligent"
                src={vectorIntelligent}
              />

              <img className="img-3" alt="Vector filters" src={vectorFilters} />

              <img
                className="img-4"
                alt="Vector filters"
                src={vectorFilters2}
              />

              <img className="img-5" alt="Vector support" src={vectorSupport} />
            </div>
          </div>
        </div>

        <div className="second-line">
          <div className="overlap-group">
            <div className="notifications">
              <img
                className="text-customizable"
                alt="Text customizable"
                src={textCustomizable}
              />

              <img
                className="icon-notifications"
                alt="Icon notifications"
                src={iconNotifications}
              />
            </div>

            <div className="customizable-reports">
              <img
                className="text-customizable-2"
                alt="Text customizable"
                src={textCustomizable}
              />

              <img
                className="icon-customizable"
                alt="Icon customizable"
                src={iconCustomizable}
              />
            </div>

            <div className="graphic-reports">
              <img
                className="text-reports"
                alt="Text reports"
                src={textReports}
              />

              <img
                className="icon-reports"
                alt="Icon reports"
                src={iconReports}
              />
            </div>

            <div className="strong-password">
              <img
                className="text-password"
                alt="Text password"
                src={textPassword}
              />

              <img
                className="icon-password"
                alt="Icon password"
                src={iconPassword}
              />
            </div>

            <div className="div">
              <img
                className="img-2"
                alt="Vector password"
                src={vectorPassword}
              />

              <img className="img-3" alt="Vector reports" src={vectorReports} />

              <img
                className="img-4"
                alt="Vector customizable"
                src={vectorCustomizable}
              />

              <img
                className="img-5"
                alt="Vector customizable"
                src={vectorCustomizable2}
              />
            </div>
          </div>
        </div>

        <div className="first-line">
          <div className="overlap-group">
            <div className="api-integration">
              <img
                className="text-integration"
                alt="Text integration"
                src={textIntegration}
              />

              <img
                className="icon-integration"
                alt="Icon integration"
                src={iconIntegration}
              />
            </div>

            <div className="documentation-access">
              <img className="text-access" alt="Text access" src={textAccess} />

              <img className="icon-access" alt="Icon access" src={iconAccess} />
            </div>

            <div className="intuitive-design">
              <img
                className="text-intuitive"
                alt="Text intuitive"
                src={textIntuitive}
              />

              <img
                className="icon-intuitive"
                alt="Icon intuitive"
                src={iconIntuitive}
              />
            </div>

            <div className="dashboard">
              <img
                className="text-dashboard"
                alt="Text dashboard"
                src={textDashboard}
              />

              <img
                className="icon-dashboard"
                alt="Icon dashboard"
                src={iconDashboard}
              />
            </div>

            <div className="div">
              <img
                className="img-2"
                alt="Vector dashboard"
                src={vectorDashboard}
              />

              <img
                className="img-3"
                alt="Vector intuitive"
                src={vectorIntuitive}
              />

              <img className="img-4" alt="Vector access" src={vector5Access} />

              <img
                className="img-5"
                alt="Vector integration"
                src={vectorIntegration}
              />
            </div>
          </div>
        </div>

        <div className="effects">
          <div className="rectangle" />

          <div className="rectangle-2" />
        </div>
      </div>
    </div>
  );
};

export default CaracteristicasLl;