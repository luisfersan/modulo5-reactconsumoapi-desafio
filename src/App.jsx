// Importando componente MiApi

import MiApi from "./components/MiApi";

// Inicia Componente funcional App.
function App() {
  return (
    <div className="container">
      <header className="my-4">
        {/* Título de la aplicación. */}
        <h1 className="text-center">
          Bienvenidos a mi Página Web (Consumo de API con React)
        </h1>
      </header>
      {/* Incluyendo el componente MiApi. */}
      <MiApi />
    </div>
  );
}

export default App;
