import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(response => response.json())
    .then(listings => setListings(listings))
  }, []);

  function onDelete(deletedListingId) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListingId)
    setListings(updatedListings)
  }

  function onSearch(searchedValue) {
    setSearchText(searchedValue)
  }

  const listingsToDisplay = listings
  .filter((listing) => listing.description.toLowerCase().includes(searchText.toLowerCase()))
  
  return (
    <div className="app">
      <Header onSearch={onSearch}/>
      <ListingsContainer listings={listingsToDisplay} onDelete={onDelete}/>
    </div>
  );
}

export default App;
