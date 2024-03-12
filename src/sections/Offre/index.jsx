import React, { useState } from "react";
import Card from "../../components/Card";
import Modal from '../../components/Modal';
import ImgVillaElise from '../../assets/imgProjet.jpeg';
import ImgVillaJuliette from '../../assets/imgProjet.jpeg';
import ImgVillaAngelique from '../../assets/imgProjet.jpeg';
import ImgVillaEugenie from '../../assets/imgProjet.jpeg';

const sectionTitle = 'Nos biens d\'exception à la résidence Lac Leman';

const logementsData = [
    { 
      name: 'Villa Elise', 
      description: 'T4 - 115m²',
      prestation: ['3 chambres'],
      imageUrl: ImgVillaElise, 
      price: '629 000,00'
    },
    { 
      name: 'Villa Juliette', 
      description: 'T5 - 145m²',
      prestation: ['4 chambres'],
      imageUrl: ImgVillaJuliette, 
      price: '799 000,00'
    },
    { 
      name: 'Villa Eugénie', 
      description: 'T4 - 120m²',
      prestation: ['3 chambres'],
      imageUrl: ImgVillaEugenie,
      price: '649 000,00' 
    },
    { 
      name: 'Villa Angélique', 
      description: 'T3 - 100m²',
      prestation: ['2 chambres'],
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
