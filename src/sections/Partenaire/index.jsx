import React from "react";

const sectionTitle = 'Nos Partenaires Locaux : Un Réseau de Qualité';
const sectionText = 'a compléter';

function Situation () {

    return (
        <section id='partenaire'>
            <h2>{sectionTitle}</h2>
            <p className='section-text'>
            {sectionText}</p>
            <div>
                <p>Notre réseau de partenaires locaux soigneusement sélectionnés, comprends des fournisseurs et des artisans qualifiés. Nous collaborons avec des professionnels expérimentés et passionnés, partageant notre engagement envers la qualité.</p>
                <p>Que vous recherchiez des matériaux de construction de haute qualité, des solutions d'aménagement intérieur sur mesure, ou des services d'entretien et de rénovation, nos partenaires sont là pour répondre à tous vos besoins. Leur savoir-faire et leur expertise garantissent fiablité et qualité aux prestations que nous proposons.</p>
            </div>
            <div></div>
         </section> 
    )
}

export default Situation;