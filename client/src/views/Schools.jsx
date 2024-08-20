// Table.jsx
import React, { useState } from 'react';
import Row from '../components/Row';
import SearchBar from '../components/SearchBar';

const Schools = ({ rows }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRows = rows
    .filter((row) => row.id && row.image && row.name && row.email && row.phone) // Asegúrate de que la fila tenga las propiedades necesarias
    .filter((row) =>
      Object.values(row).some((cell) => cell.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <div className="container">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Imagen</th>
            <th>Name</th>
            <th>Email</th>
            <th>Telephone</th>
            <th></th>
            <th>Actions</th>
            <th></th>
          </tr>
          {filteredRows.map((rowData, index) => (
            <Row key={index} data={Object.values(rowData)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schools;
