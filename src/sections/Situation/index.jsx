import React from "react";

const sectionTitle = 'Situation idéale : Proximité des transports en commun et cadre préservé';
const sectionText = 'a compléter';

function Situation () {

    return (
        <section id='situation'>
            <h2>{sectionTitle}</h2>
            <p className='section-text'>
            {sectionText}</p>
            <div>
                <p>
                La "Résidence Lac Léman" bénéficie d'un emplacement privilégié à Thonon-les-Bains, une ville idéalement située sur les rives du lac Léman, dans le département de la Haute-Savoie en région Auvergne-Rhône-Alpes. Nichée dans un cadre naturel préservé, notre résidence offre un accès facile à toutes les commodités nécessaires à une vie moderne et confortable.
La proximité avec le centre-ville de Thonon-les-Bains permet aux résidents de profiter des nombreux commerces, restaurants et services disponibles à quelques pas de chez eux. De plus, la résidence est parfaitement desservie par les transports en commun, avec une proximité à la fois de la gare ferroviaire et des embarcadères du bateau CGN, offrant ainsi aux résidents la possibilité de se déplacer facilement dans la région et au-delà, tout en admirant les magnifiques paysages offerts par le lac Léman.
En résumé, la "Résidence Lac Léman" offre un cadre de vie exceptionnel, combinant confort et proximité avec la nature, tout en étant parfaitement intégrée à la vie urbaine de Thonon-les-Bains.

                </p>
            </div>
         </section> 
    )
}

export default Situation;