import React from 'react';
import Banner from '../../components/Banner';
import Contact from '../../sections/Contact';

function Accueil() {

    const pageTitle = "Résidence du Leman";
    const bannerText = "Thonon";
    
    
    return (

        <div className='main'>
            <Banner pageTitle={pageTitle} bannerText={bannerText}/>
            <div>
                <p>test</p>
            </div>
            <Contact/>
            
        </div>
    );
}
export default Accueil;