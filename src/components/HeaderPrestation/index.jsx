import React from "react";

function HeaderPrestation() {
  return (
    <div className="header__prestation">
    <div className="header__prestation-details">
      <p>Chaque villa comprend :</p>
      <ul>
        <li>1 garage et deux places de parking</li>
        <li>Une buanderie</li>
        <li>Une terrasse avec jardin privé paysager</li>
        <li>Une cuisine équipée moderne et fonctionnelle</li>
        <li>Un salon spacieux</li>
        <li>Des chambres confortables avec placards intégrés</li>
        <li>Une pompe à chaleur</li>
      </ul>
    </div>
      <div className="header__prestation-text">
        <p>Nos partenaires locaux, artisans de talent, sont au cœur de chaque projet. Leur savoir-faire authentique et leur dévouement contribuent à créer des espaces de vie uniques, reflétant l'essence même de notre région.</p>
        <p>Profitez de l'expertise de nos artisans pour <strong>personnaliser votre villa</strong> et la transformer en un véritable havre de paix <strong>à votre image</strong>.</p>
      </div>
    </div>
  );
}

export default HeaderPrestation;
