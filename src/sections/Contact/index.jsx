import React from "react";
import ContactForm from '../../components/ContactForm';

const sectionTitle = 'Demandez des informations sur la résidence "Lac Leman" à Thonon';

const questions = [
    {
      id: '1',
      question: "Pour quel logement souhaitez vous des informations?",
      options: ['Villa Elise - T4','Villa Juliette - T5', 'Villa Eugenie - T4', 'Villa Angelique - T3'],
    },
    
    // Ajoutez d'autres questions selon les besoins du client
  ];

function Contact() {

    return (
        <section id='contact'>
            <h2>{sectionTitle}</h2>
                < ContactForm questions={questions}/>
         </section> 
    )
}

export default Contact;