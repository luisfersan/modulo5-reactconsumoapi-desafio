// Importo los módulos necesarios de React (useState, useEffect) y el componente Buscador.

import { useState, useEffect } from "react";
import Buscador from "./Buscador";

// Inicia el Componente funcional MiApi.
const MiApi = () => {
  // Inicia Hook useState para manejar los datos de los países.
  const [countries, setCountries] = useState([]);

  // Inicia Hook useState para manejar los datos filtrados de los países
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Inicia Hook useEffect para obtener datos cuando el componente se cargue.
  useEffect(() => {
    // Function para obtener datos de la API.
    const fetchData = async () => {
      try {
        // Obteniendo datos de la API.
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags"
        );
        // Verificando si la respuesta es correcta.
        if (!response.ok) {
          throw new Error("La respuesta de la API no fue satisfactoria'");
        }
        // Parseando los datos JSON.
        const data = await response.json();
        // Estableciendo el estado con los datos obtenidos.
        setCountries(data);
        // Estableciendo el estado para los datos filtrados igual al inicial.
        setFilteredCountries(data);
      } catch (error) {
        // Registrando cualquier error que ocurra durante la obtención de datos
        console.error("Error al obtener datos.:", error);
      }
    };

    // Llamando a la función fetchData.
    fetchData();
  }, []); // Array de dependencias vacío para asegurar que esto se ejecute solo una vez cuando el componente se cargue.

  // Función para filtrar países de acuerdo con el criterio de búsqueda.
  const handleFilter = (criteria) => {
    // Filtrando países según el nombre.
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(criteria.toLowerCase())
    );
    // Estableciendo los datos filtrados en el estado.
    setFilteredCountries(filtered);
  };

  // Función para ordenar países según el orden de la lista.
  const handleSort = (order) => {
    // Ordenando países alfabéticamente según el orden de la lista.
    const sorted = [...filteredCountries].sort((a, b) => {
      if (order === "asc") {
        return a.name.common.localeCompare(b.name.common);
      } else {
        return b.name.common.localeCompare(a.name.common);
      }
    });
    // Estableciendo los datos ordenados en el estado.
    setFilteredCountries(sorted);
  };

  return (
    <div>
      {/* Incluyendo el componente Buscador y pasando las funciones de filtrar y ordenar como props. */}
      <Buscador
        onFilter={handleFilter}
        onSort={handleSort}
      />
      <div className="row">
        {/* Mapeando los países filtrados para mostrar cada uno. */}
        {filteredCountries.map((country) => (
          <div
            className="col-md-4 mb-4"
            key={country.name.common}
          >
            <div className="card h-100">
              {/* Mostrando la bandera del país. */}
              <img
                src={country.flags.png}
                className="card-img-top"
                alt={country.name.common}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                {/* Mostrando el nombre del país. */}
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">
                  Official Name: {country.name.official}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiApi;
