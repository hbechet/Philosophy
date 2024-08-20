// Table.jsx
import React, { useState } from 'react';
import Row from '../components/Row';
import SearchBar from '../components/SearchBar';

const Philosophers = ({ rows }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRows = rows
    .filter((row) => row.id && row.image && row.name && row.quantity && row.provider)
    .filter((row) =>
      ['id', 'name', 'quantity', 'provider'].some(
        (field) => String(row[field]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  return (
    <div className="container">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Provider</th>
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

export default Philosophers;
