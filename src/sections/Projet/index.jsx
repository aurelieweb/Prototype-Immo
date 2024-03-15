import React from "react";
import ImgProjet from '../../assets/imgProjet.jpeg';
import Tag from "../../components/Tag"; // Importez le composant Tag ici

const sectionTitle = 'Découvrez notre projet : Une résidence de standing au bord du Lac Leman';
const sectionText = 'Une résidence de standing bordant le Lac Léman, où chaque détail est pensé pour offrir un cadre de vie exceptionnel et des prestations haut de gamme. Vivez au rythme d\'une harmonie parfaite entre la sérénité des lieux tout en profitant de la proximité de la vie urbaine et de ses commodités.';

function Projet() {
    return (
        <section id='projet'>
            <h2>{sectionTitle}</h2>
            <div className="div__container-text">
        <p>{sectionText}</p>
        </div>
            <div className="projet__container">
                <img className="projet__image" src={ImgProjet} alt="Banner" />
                <div className="projet__container-text">
                    <div className="projet__div-text">
                        <h3>Villa de Luxe au Bord du Lac</h3>
                        <p>Nichée sur les paisibles rives du lac Léman à Thonon-les-Bains, notre résidence offre un cadre de vie exceptionnel dans un environnement préservé. Composée de quatre villas spacieuses et élégantes, notre résidence propose confort et tranquillité.</p>
                    </div>
                    <div className="projet__div-text">
                        <h3>Vue Imprenable sur le Lac</h3>
                        <p>Les espaces de vie généreux et les grandes fenêtres offrant une vue imprenable sur le lac permettent aux résidents de profiter pleinement de la beauté naturelle environnante.</p>
                    </div>
                    <div className="projet__div-text">
                        <h3>Conception Soignée et Élégante</h3>
                        <p>Chaque villa de notre résidence de standing est conçue avec une attention particulière à l'esthétique et à la fonctionnalité. Des matériaux de haute qualité sont utilisés dans la construction pour garantir durabilité et élégance. Les espaces de vie généreux et les grandes fenêtres offrant une vue imprenable sur le lac permettent aux résidents de profiter pleinement de la beauté naturelle environnante.</p>
                    </div>
                    
                    <div className="projet__div-text">
                        <h3>Jardins Privés et Sérénité</h3>
                        <p>Les jardins privés offrent un espace de sérénité à chaque villa. Notre résidence incarne l’harmonie entre la vie citadine dynamique et la tranquillité des espaces naturels. Que ce soit pour se ressourcer après une journée bien remplie ou pour profiter de moments de détente en famille, notre résidence offre un havre de paix au bord du lac Léman.</p>
                    </div>
                </div>
            </div>
            <Tag /> {/* Inclure le composant Tag ici */}
        </section>
    )
}

export default Projet;
