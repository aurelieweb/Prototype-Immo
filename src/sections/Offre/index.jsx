import React, { useState } from "react";
import Card from "../../components/Card";
import Modal from '../../components/Modal';
import HeaderPrestation from '../../components/HeaderPrestation';
import ImgVillaElise from '../../assets/imgProjet.jpeg';
import ImgVillaJuliette from '../../assets/imgProjet.jpeg';
import ImgVillaAngelique from '../../assets/imgProjet.jpeg';
import ImgVillaEugenie from '../../assets/imgProjet.jpeg';

const sectionTitle = 'Nos biens d\'exception à la résidence Lac Leman';
const sectionText = (
  <p>
    Les villas de la <strong>"Résidence du Lac"</strong> possèdent un charme unique et proposent des prestations haut de gamme. Des espaces spacieux aux agencements ingénieux, explorez les détails qui rendent chaque logement exceptionnel. Laissez-vous séduire par le style de vie incomparable offert par la Résidence du Lac.
  </p>
);

const logementsData = [
  { 
    name: 'Villa Elise', 
    description: 'T4 - 115m²',
    prestation: [
      { name: 'Chambre', description: '3 chambres' },
      { name: 'Cuisine moderne', description: 'Entièrement équipée avec électroménagers haut de gamme' },
      { name: 'Salon spacieux', description: 'Lumineux avec vue sur le jardin ou le lac' },
      { name: 'Chambres confortables', description: 'Avec placards intégrés pour un espace de rangement optimal' },
      { name: 'Salle de bains luxueuse', description: 'Équipée avec douche à l\'italienne ou baignoire' },
      { name: 'Espaces extérieurs privés', description: 'Terrasse ou balcon pour profiter de l\'environnement' },
      { name: 'Jardin paysager', description: 'Avec espaces de détente pour une ambiance sereine' },
      { name: 'Parking privé', description: 'Pour une ou plusieurs voitures' },
      { name: 'Buanderie', description: 'Facilitez les tâches ménagères' },
      { name: 'Pompe à chaleur', description: 'Pour un confort thermique optimal' },
      { name: 'Ambiance cosy', description: 'Possibilité d\'installer une cheminée' }
    ],
    imageUrl: ImgVillaElise, 
    price: '629 000,00',
  },
  { 
    name: 'Villa Juliette', 
    description: 'T5 - 145m²',
    prestation: [
      { name: 'Chambre', description: '4 chambres' },
      { name: 'Cuisine moderne', description: 'Entièrement équipée avec électroménagers haut de gamme' },
      { name: 'Salon spacieux', description: 'Lumineux avec vue sur le jardin ou le lac' },
      { name: 'Chambres confortables', description: 'Avec placards intégrés pour un espace de rangement optimal' },
      { name: 'Salle de bains luxueuse', description: 'Équipée avec douche à l\'italienne ou baignoire' },
      { name: 'Espaces extérieurs privés', description: 'Terrasse ou balcon pour profiter de l\'environnement' },
      { name: 'Jardin paysager', description: 'Avec espaces de détente pour une ambiance sereine' },
      { name: 'Parking privé', description: 'Pour une ou plusieurs voitures' },
      { name: 'Buanderie', description: 'Facilitez les tâches ménagères' },
      { name: 'Pompe à chaleur', description: 'Pour un confort thermique optimal' },
      { name: 'Ambiance cosy', description: 'Possibilité d\'installer une cheminée' }
    ],
    imageUrl: ImgVillaJuliette, 
    price: '799 000,00',
  },
  { 
    name: 'Villa Eugénie', 
    description: 'T4 - 120m²',
    prestation: [
      { name: 'Chambre', description: '3 chambres' },
      { name: 'Cuisine moderne', description: 'Entièrement équipée avec électroménagers haut de gamme' },
      { name: 'Salon spacieux', description: 'Lumineux avec vue sur le jardin ou le lac' },
      { name: 'Chambres confortables', description: 'Avec placards intégrés pour un espace de rangement optimal' },
      { name: 'Salle de bains luxueuse', description: 'Équipée avec douche à l\'italienne ou baignoire' },
      { name: 'Espaces extérieurs privés', description: 'Terrasse ou balcon pour profiter de l\'environnement' },
      { name: 'Jardin paysager', description: 'Avec espaces de détente pour une ambiance sereine' },
      { name: 'Parking privé', description: 'Pour une ou plusieurs voitures' },
      { name: 'Buanderie', description: 'Facilitez les tâches ménagères' },
      { name: 'Pompe à chaleur', description: 'Pour un confort thermique optimal' },
      { name: 'Ambiance cosy', description: 'Possibilité d\'installer une cheminée' }
    ],
    imageUrl: ImgVillaEugenie,
    price: '649 000,00',
  },
  { 
    name: 'Villa Angélique', 
    description: 'T3 - 100m²',
    prestation: [
      { name: 'Chambre', description: '2 chambres' },
      { name: 'Cuisine moderne', description: 'Entièrement équipée avec électroménagers haut de gamme' },
      { name: 'Salon spacieux', description: 'Lumineux avec vue sur le jardin ou le lac' },
      { name: 'Chambres confortables', description: 'Avec placards intégrés pour un espace de rangement optimal' },
      { name: 'Salle de bains luxueuse', description: 'Équipée avec douche à l\'italienne ou baignoire' },
      { name: 'Espaces extérieurs privés', description: 'Terrasse ou balcon pour profiter de l\'environnement' },
      { name: 'Jardin paysager', description: 'Avec espaces de détente pour une ambiance sereine' },
      { name: 'Parking privé', description: 'Pour une ou plusieurs voitures' },
      { name: 'Buanderie', description: 'Facilitez les tâches ménagères' },
      { name: 'Pompe à chaleur', description: 'Pour un confort thermique optimal' },
      { name: 'Ambiance cosy', description: 'Possibilité d\'installer une cheminée' }
    ],
    imageUrl: ImgVillaAngelique,
    price: '430 000,00'
  },
];

function Offre () {
  const [modalLogement, setModalLogement] = useState(null);

  const openModal = (logement) => {
    setModalLogement(logement);
  };

  const closeModal = () => {
    setModalLogement(null);
  };

  return (
    <section id='offre'>
      <h2>{sectionTitle}</h2>
      <div className="div__container-text">{sectionText}</div>
        <HeaderPrestation />
      <div className="container__card">
        {logementsData.map((logement, index) => (
          <Card
            key={index}
            logement={logement}
            onOpenModal={openModal}
          />
        ))}
      </div>
      {modalLogement && <Modal logement={modalLogement} onCloseModal={closeModal} />}
    </section> 
  );
}

export default Offre;
