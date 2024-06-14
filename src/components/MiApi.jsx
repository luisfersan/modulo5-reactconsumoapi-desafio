import { useState, useEffect } from "react";
import Buscador from "./Buscador";

const MiApi = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (criteria) => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(criteria.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleSort = (order) => {
    const sorted = [...filteredCountries].sort((a, b) => {
      if (order === "asc") {
        return a.name.common.localeCompare(b.name.common);
      } else {
        return b.name.common.localeCompare(a.name.common);
      }
    });
    setFilteredCountries(sorted);
  };

  return (
    <div>
      <Buscador
        onFilter={handleFilter}
        onSort={handleSort}
      />
      <div className="row">
        {filteredCountries.map((country) => (
          <div
            className="col-md-4 mb-4"
            key={country.name.common}
          >
            <div className="card h-100">
              <img
                src={country.flags.png}
                className="card-img-top"
                alt={country.name.common}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{country.name.common}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiApi;
