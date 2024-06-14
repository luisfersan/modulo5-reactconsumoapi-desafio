// Importando los módulos y estilos necesarios de React.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Renderizando el componente App dentro del elemento root.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
