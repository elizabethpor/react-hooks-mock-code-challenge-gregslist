import React, { useState } from "react";

function Search({ onSearch }) {

  const [searchedValue, setSearchedValue] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(searchedValue)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchedValue}
        onChange={e => setSearchedValue(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
