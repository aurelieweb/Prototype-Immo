import React from "react";
import Card from "../../components/Card";
import ImgVillaElise from '../../assets/imgProjet.jpeg';
import ImgVillaJuliette from '../../assets/imgProjet.jpeg';
import ImgVillaAngelique from '../../assets/imgProjet.jpeg';
import ImgVillaEugenie from '../../assets/imgProjet.jpeg';

const sectionTitle = 'Nos biens d\'exception à la résidence Lac Leman';
//const sectionText = 'Découvrez les prestations d\'exception offertes par la Résidence du Lac, où confort, modernité et bien-être se rencontrent harmonieusement. Explorez nos offres pour un style de vie privilégié au cœur d\'un cadre enchanteur.';

/*Data services
    name:
    description:
    img:
    prix
*/ 
const logementsData = [
    { name: 'Villa Elise', 
      description: 'T4 - 115m²',
      prestation: ['3 chambres'
                ],
      imageUrl: ImgVillaElise, 
      price: '629 000,00'
    },
    { name: 'Villa Juliette', 
      description: 'T5 - 145m²',
      prestation: ['4 chambres'
    ],
      imageUrl: ImgVillaJuliette, 
      price: '799 000,00'
    },
    { name: 'Villa Eugénie', 
    description: 'T4 - 120m²',
    prestation: ['3 chambres'
    ],
    imageUrl: ImgVillaEugenie,
    price: '649 000,00' 
    },
    { name: 'Villa Angélique', 
    description: 'T3 - 100m²',
    prestation: ['2 chambres',
    ],
    imageUrl: ImgVillaAngelique,
    price: '430 000,00' 
    },
];

const sectionDescription = [
  { name: 'Cuisine moderne', description: 'Entièrement équipée avec électroménagers haut de gamme', icon: 'fa fa-cutlery' },
  { name: 'Salon spacieux', description: 'Lumineux avec vue sur le jardin ou le lac', icon: 'fa fa-couch' },
  { name: 'Chambres confortables', description: 'Avec placards intégrés pour un espace de rangement optimal', icon: 'fa fa-bed' },
  { name: 'Salle de bains luxueuse', description: 'Équipée avec douche à l\'italienne ou baignoire', icon: 'fa fa-bath' },
  { name: 'Espaces extérieurs privés', description: 'Terrasse ou balcon pour profiter de l\'environnement', icon: 'fa fa-tree' },
  { name: 'Jardin paysager', description: 'Avec espaces de détente pour une ambiance sereine', icon: 'fa fa-leaf' },
  { name: 'Parking privé', description: 'Pour une ou plusieurs voitures', icon: 'fa fa-car' },
  { name: 'Buanderie', description: 'Facilitez les tâches ménagères', icon: 'fa fa-washer' },
  { name: 'Pompe à chaleur', description: 'Pour un confort thermique optimal', icon: 'fa fa-thermometer-full' },
  { name: 'Ambiance cosy', description: 'Possibilité d\'installer une cheminée', icon: 'fa fa-fire' },
];

function Offre () {

    return (
        <section id='offre'>
            <h2>{sectionTitle}</h2>
            <div className="offre__description">
              {sectionDescription.map((item, index) => (
                <div key={index} className="offre__item">
                  <span><i className={item.icon}></i></span>
                  <div className="offre__item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='container__card'>
              <p className="container__card-text">Chaque villa de la Résidence du Lac possède un charme unique et propose des prestations haut de gamme. Des espaces spacieux aux agencements ingénieux, explorez les détails qui rendent chaque logement exceptionnel. Laissez-vous séduire par le style de vie incomparable offert par la Résidence du Lac.</p>
              <div className="container__card-div">{logementsData.map((logement, index) => (
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
            </div>
         </section> 
    )
}

export default Offre;
