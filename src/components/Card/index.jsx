import React, { useState } from 'react';
import '../../styles/styles.scss';

function Card({ logementName, imageUrl, logementPrice, description, prestation }) {
  const [showPrestation, setShowPrestation] = useState(false);

  const togglePrestation = () => {
    setShowPrestation(!showPrestation);
  };

  return (
    <div className="card" onClick={togglePrestation}>
      <div className="card__content">
        <img src={imageUrl} alt={logementName} className="card__image" />
        <h3>{logementName}</h3>
        <div className='card__content-text'>
          {description}
        </div>
        {showPrestation && (
          <div className='card__content-prestation'>
            <ul>
              {prestation.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        <div className='card__content-price'><p>A partir de: {logementPrice}€</p></div>
      </div>
    </div>
  );
}

export default Card;
