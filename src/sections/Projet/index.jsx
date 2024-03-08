import React from "react";
import ImgProjet from '../../assets/imgProjet.jpeg';

const sectionTitle = 'Découvrez notre projet : Une résidence de standing au bord du Lac Leman';
//const sectionText = 'a compléter';

function Projet () {

    return (
        <section id='projet'>
            <h2>{sectionTitle}</h2>
            <div className="div__container-text">
                <p>Nichée sur les paisibles rives du lac Léman à Thonon-les-Bains, notre résidence offre un cadre de vie exceptionnel dans un environnement préservé. Composée de quatre villas spacieuses et élégantes, notre résidence propose confort et tranquillité.</p>
                <p>Chaque villa de notre résidence de standing est conçue avec une attention particulière à l'esthétique et à la fonctionnalité. Des matériaux de haute qualité sont utilisés dans la construction pour garantir durabilité et élégance. Les espaces de vie généreux et les grandes fenêtres offrant une vue imprenable sur le lac permettent aux résidents de profiter pleinement de la beauté naturelle environnante.</p>
                <p>Les jardins privés offrent un espace de sérénité à chaque villa. Notre résidence incarne l’harmonie entre la vie citadine dynamique et la tranquillité des espaces naturels. Que ce soit pour se ressourcer après une journée bien remplie ou pour profiter de moments de détente en famille, notre résidence offre un havre de paix au bord du lac Léman.</p>
            </div>
            <div>
            <img className="banner__image" src={ImgProjet} alt="Banner" />
            </div>
         </section> 
    )
}

export default Projet;