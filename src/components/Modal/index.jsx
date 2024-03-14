import React from 'react';

function Modal({ logement, onCloseModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal__content">
          <button className="modal__close-button" onClick={onCloseModal}>
            ✕
          </button>
          <img src={logement.imageUrl} alt={logement.name} className="modal__image" />
          <h3>{logement.name}</h3>
          <p>{logement.description}</p>
          <ul>
            {logement.prestation.map((item, index) => (
              <li key={index}>{item.name}: {item.description}</li>
            ))}
          </ul>
          <p>A partir de: {logement.price}€</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;

