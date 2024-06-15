// Importando los módulos necesarios de React (useState).
import { useState } from "react";

//Inicia Componente funcional Buscador.
const Buscador = ({ onFilter, onSort }) => {
  // Inicia Hook useState para manejar el término de búsqueda.
  const [searchTerm, setSearchTerm] = useState("");

  // Función para manejar cambios en el campo de búsqueda.
  const handleSearchChange = (e) => {
    // Estableciendo el término de búsqueda en el estado.
    setSearchTerm(e.target.value);
    // Llamando a la función onFilter pasada como prop con el término de búsqueda.
    onFilter(e.target.value);
  };

  // Función para manejar cambios en el orden de clasificación.
  const handleSortChange = (e) => {
    // Llamando a la función onSort pasada como prop con el orden seleccionado.
    onSort(e.target.value);
  };

  return (
    <div className="mb-4">
      <div className="input-group">
        {/* Campo de entrada para búsqueda. */}
        <input
          type="text"
          className="form-control"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {/* Dropdown para seleccionar el orden de clasificación. */}
        <select
          className="form-select"
          onChange={handleSortChange}
        >
          <option
            value="asc"
            border="black"
          >
            Sort A-Z
          </option>
          <option
            value="desc"
            border="black"
          >
            Sort Z-A
          </option>
        </select>
      </div>
    </div>
  );
};

export default Buscador;
