import "./App.css";

import MiApi from "./components/MiApi";

function App() {
  return (
    <div className="container">
      <header className="my-4">
        <h1 className="text-center">
          Bienvenidos a mi Página Web (Consumo de API con React)
        </h1>
      </header>
      <MiApi />
    </div>
  );
}

export default App;
