import React from 'react';

function Card({ logement, onOpenModal }) {
  const { name, imageUrl, price, description } = logement;

  return (
    <div className="card" onClick={() => onOpenModal(logement)}>
      <div className="card__content">
        <img src={imageUrl} alt={name} className="card__image" />
        <h3>{name}</h3>
        <div className='card__content-text'>
          {description}
        </div>
        <div className='card__content-price'><p>A partir de: {price}€</p></div> {/* Utilisez la propriété price */}
      </div>
    </div>
  );
}

export default Card;
