import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {

  const listingCardComponent = listings.map((listing) => <ListingCard key={listing.id} listing={listing} onDelete={onDelete}/>)

  return (
    <main>
      <ul className="cards">
        {listingCardComponent}
      </ul>
    </main>
  );
}

export default ListingsContainer;
