import { useState } from "react";

const Buscador = ({ onFilter, onSort }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select
          className="form-select"
          onChange={handleSortChange}
        >
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default Buscador;
