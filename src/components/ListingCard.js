import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {

  const {id, description, image, location} = listing;

  const [isFavorite, setIsFavorite] = useState(false);

  function hanldeClick() {
    setIsFavorite(isFavorite => !isFavorite)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    })
    onDelete(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={hanldeClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={hanldeClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
