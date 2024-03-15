import React from 'react';
import Banner from '../../components/Banner';
import Contact from '../../sections/Contact';
import Projet from '../../sections/Projet';
import Situation from '../../sections/Situation';
import Offre from '../../sections/Offre';

function Accueil() {

    const pageTitle = "Bienvenue à la Résidence du Lac, au cœur de Thonon";
    const bannerText = "Découvrez la douceur de vivre à la Résidence du Lac, un cadre préservé où la quiétude des rives du Leman rencontre l'effervescence culturelle et économique de Thonon";
    
    
    return (

        <div className='main'>
            <Banner pageTitle={pageTitle} bannerText={bannerText}/>
            <Projet />
            <Situation />
            <Offre />
            <Contact />
            
            
        </div>
    );
}
export default Accueil;