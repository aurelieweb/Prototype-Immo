import React from "react";

const sectionTitle = 'Situation idéale : Proximité des transports en commun et cadre préservé';
const sectionText = 'a compléter';

function Situation () {

    return (
        <section id='situation'>
            <h2>{sectionTitle}</h2>
            <p className='section-text'>
            {sectionText}</p>
         </section> 
    )
}

export default Situation;