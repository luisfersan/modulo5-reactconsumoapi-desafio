// Importando componente MiApi

import MiApi from "./components/MiApi";

// Importando estilos de App.css
import "./App.css";

// Inicia Componente funcional App.
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1 className="text-center">Welcome to My Country Flags App</h1>
          <p className="lead text-center">
            Discover and learn about different countries around the world
          </p>
        </div>
      </header>
      <main className="app-main">
        <MiApi />
      </main>
      <footer className="app-footer text-center py-3">
        &copy; 2024 My Country Flags App
      </footer>
    </div>
  );
}

export default App;
