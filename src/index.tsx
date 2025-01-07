import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importa tu componente principal

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement // Obtén el contenedor principal
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
