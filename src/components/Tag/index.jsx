import React from "react";

function Tag() {
  return (
    <div className="tag">
      <div className="tag__title">
        <h2>Explorez notre projet immobilier</h2>
        <p>Découvrez notre résidence d'exception, alliant élégance, confort et cadre de vie idyllique au bord du lac Léman. Voici quatre mots-clés pour décrire notre projet :</p>
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
          <p>Intégration harmonieuse avec la nature environnante</p>
        </div>
      </div>
    </div>
  );
}

export default Tag;
