import React from 'react';
import Banner from '../../components/Banner';
import Contact from '../../sections/Contact';
import Projet from '../../sections/Projet';
import Situation from '../../sections/Situation';
import Offre from '../../sections/Offre';
import Partenaire from '../../sections/Partenaire';

function Accueil() {

    const pageTitle = "Résidence du Leman";
    const bannerText = "Thonon";
    
    
    return (

        <div className='main'>
            <Banner pageTitle={pageTitle} bannerText={bannerText}/>
            <Projet />
            <Situation />
            <Offre />
            <Partenaire />
            <Contact />
            
            
        </div>
    );
}
export default Accueil;