import React from "react";

function Tag() {
  return (
    <div className="tag">
      <div className="tag__title">
        <h2>Explorez notre projet immobilier</h2>
        <p>Découvrez les atouts de notre résidence d'exception, idéalement située au bord du Lac Léman. Notre projet offre des lieux de vie exceptionnels</p>
      </div>
      <div className="tag__details">
        <div className="tag__details-card">
          <p>Vue panoramique sur le lac Léman</p>
        </div>
        <div className="tag__details-card">
          <p>Résidence de standing haut de gamme</p>
        </div>
        <div className="tag__details-card">
          <p>Espaces de vie spacieux et lumineux</p>
        </div>
        <div className="tag__details-card">
          <p>Nichée aux portes de Thonon</p>
        </div>
      </div>
    </div>
  );
}

export default Tag;
