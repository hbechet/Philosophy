// SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className='searchbar'>
      <form class="d-flex" role="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </form>
    </div>

  );
};

export default SearchBar;
