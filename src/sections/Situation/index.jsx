import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faPlane, faTrain, faBus } from '@fortawesome/free-solid-svg-icons';

const sectionTitle = 'Situation idéale : Proximité des transports en commun et cadre préservé';

function Situation() {
  const [iconsVisible, setIconsVisible] = useState([false, false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('situation');
      const sectionPosition = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (sectionPosition.top < windowHeight * 0.75) {
        setIconsVisible([false, true, true, false]);
      } else {
        setIconsVisible([false, false, false, false]);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='situation'>
      <h2>{sectionTitle}</h2>
      <div className="div__container-text">
        <p>
          La "Résidence Lac Léman" bénéficie d'un emplacement privilégié à Thonon-les-Bains, une ville idéalement située sur les rives du lac Léman, dans le département de la Haute-Savoie en région Auvergne-Rhône-Alpes. Nichée dans un cadre naturel préservé, notre résidence offre un accès facile à toutes les commodités nécessaires à une vie moderne et confortable.
          La proximité avec le centre-ville de Thonon-les-Bains permet aux résidents de profiter des nombreux commerces, restaurants et services disponibles à quelques pas de chez eux. De plus, la résidence est parfaitement desservie par les transports en commun, avec une proximité à la fois de la gare ferroviaire et des embarcadères du bateau CGN, offrant ainsi aux résidents la possibilité de se déplacer facilement dans la région et au-delà, tout en admirant les magnifiques paysages offerts par le lac Léman.
          En résumé, la "Résidence Lac Léman" offre un cadre de vie exceptionnel, combinant confort et proximité avec la nature, tout en étant parfaitement intégrée à la vie urbaine de Thonon-les-Bains.
        </p>
      </div>
      <div className="div__container-icon">
        <div className={`situation__icon ${iconsVisible[0] ? '' : 'hidden-left'}`}>
          <span className="situation__icon-circle"><FontAwesomeIcon icon={faShip} /></span>
          <p className="situation__icon-text">Navette CGN Thonon/Lausanne</p>
        </div>
        <div className={`situation__icon ${iconsVisible[1] ? '' : 'hidden-left'}`}>
          <span className="situation__icon-circle"><FontAwesomeIcon icon={faPlane} /></span>
          <p className="situation__icon-text">Aéroport International de Genève</p>
        </div>
        <div className={`situation__icon ${iconsVisible[2] ? '' : 'hidden-right'}`}>
          <span className="situation__icon-circle"><FontAwesomeIcon icon={faTrain} /></span>
          <p className="situation__icon-text">Gare Ferroviaire</p>
        </div>
        <div className={`situation__icon ${iconsVisible[3] ? '' : 'hidden-right'}`}>
          <span className="situation__icon-circle"><FontAwesomeIcon icon={faBus} /></span>
          <p className="situation__icon-text">Gare Routière</p>
        </div>
      </div>
    </section>
  );
}

export default Situation;
