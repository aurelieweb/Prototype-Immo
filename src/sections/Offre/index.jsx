import React from "react";
import Card from "../../components/Card";
import ImgVillaElise from '../../assets/imgProjet.jpeg';
import ImgVillaJuliette from '../../assets/imgProjet.jpeg';
import ImgVillaAngelique from '../../assets/imgProjet.jpeg';
import ImgVillaEugenie from '../../assets/imgProjet.jpeg';

const sectionTitle = 'Nos biens d\'exeption à la résidence Lac Leman';
const sectionText = 'a compléter';

/*Data services
    name:
    description:
    img:
    prix
*/ 
const logementsData = [
    { name: 'Villa Elise', 
      description: 'T4 - 115m²',
      prestation: ['Cuisine moderne entièrement équipée avec électroménagers de qualité',
                  'Salon spacieux et lumineux avec vue sur le jardin ou le lac',
                  'Chambres à coucher confortables avec placards intégrés',
                  'Salle de bains équipée avec douche à l\'italienne ou baignoire',
                  'Terrasse ou balcon privé pour profiter de l\'extérieur',
                  'Jardin paysager avec espace de détente',
                  'Parking privé pour une ou plusieurs voitures',
                  'Buanderie',
                  'Pompe à chaleur ',
                  'Possibilité d\'installer une cheminée pour une ambiance cosy en hiver',
                ],
      imageUrl: ImgVillaElise, 
      price: '649 000,00'
    },
    { name: 'Villa Juliette', 
      description: 'T5 - 145m²',
      prestation: ['Cuisine moderne entièrement équipée avec électroménagers de qualité',
      'Salon spacieux et lumineux avec vue sur le jardin ou le lac',
      'Chambres à coucher confortables avec placards intégrés',
      'Salle de bains équipée avec douche à l\'italienne ou baignoire',
      'Terrasse ou balcon privé pour profiter de l\'extérieur',
      'Jardin paysager avec espace de détente',
      'Parking privé pour une ou plusieurs voitures',
      'Buanderie',
      'Pompe à chaleur ',
      'Possibilité d\'installer une cheminée pour une ambiance cosy en hiver'
    ],
      imageUrl: ImgVillaJuliette, 
      price: '799 000,00'
    },
    { name: 'Villa Eugénie', 
    description: 'T4 - 120m²',
    prestation: ['Cuisine moderne entièrement équipée avec électroménagers de qualité',
                  'Salon spacieux et lumineux avec vue sur le jardin ou le lac',
                  'Chambres à coucher confortables avec placards intégrés',
                  'Salle de bains équipée avec douche à l\'italienne ou baignoire',
                  'Terrasse ou balcon privé pour profiter de l\'extérieur',
                  'Jardin paysager avec espace de détente',
                  'Parking privé pour une ou plusieurs voitures',
                  'Buanderie',
                  'Pompe à chaleur ',
                  'Possibilité d\'installer une cheminée pour une ambiance cosy en hiver'
    ],
    imageUrl: ImgVillaEugenie,
    price: '679 000,00' 
    },
    { name: 'Villa Angélique', 
    description: 'T3 - 100m²',
    prestation: ['Cuisine moderne entièrement équipée avec électroménagers de qualité',
    'Salon spacieux et lumineux avec vue sur le jardin ou le lac',
    'Chambres à coucher confortables avec placards intégrés',
    'Salle de bains équipée avec douche à l\'italienne ou baignoire',
    'Terrasse ou balcon privé pour profiter de l\'extérieur',
    'Jardin paysager avec espace de détente',
    'Parking privé pour une ou plusieurs voitures',
    'Buanderie',
    'Pompe à chaleur ',
    'Possibilité d\'installer une cheminée pour une ambiance cosy en hiver'
    ],
    imageUrl: ImgVillaAngelique,
    price: '579 000,00' 
    },
]

function Offre () {

    return (
        <section id='offre'>
            <h2>{sectionTitle}</h2>
            <p className='section-text'>
            {sectionText}</p>
            <div className='container__card'>
          {logementsData.map((logement, index) => (
            <Card
              key={index}
              logementName={logement.name}
              imageUrl={logement.imageUrl}
              logementPrice={logement.price}
              description={logement.description}
              prestation={logement.prestation}
            />
          ))}
        </div>
         </section> 
    )
}

export default Offre;
