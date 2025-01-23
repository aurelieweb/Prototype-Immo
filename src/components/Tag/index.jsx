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
          <h4>Vue panoramique sur le lac Léman</h4>
        </div>
        <div className="tag__details-card">
          <h4>Résidence de standing haut de gamme</h4>
        </div>
        <div className="tag__details-card">
          <h4>Espaces de vie spacieux et lumineux</h4>
        </div>
        <div className="tag__details-card">
          <h4>Nichée aux portes de Thonon</h4>
        </div>
      </div>
    </div>
  );
}

export default Tag;
