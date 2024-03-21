import React from 'react';
import Button from '../../components/Button';
import '../../styles/styles.scss';
import ImgBanner from '../../assets/imgBanner.jpeg';

const buttonText = 'Demander plus d\'infos';

/* Fonction Banner */ 
function Banner({ pageTitle, bannerText }) {
  const scrollToContactForm = () => {
    const contactFormSection = document.getElementById('contact');
    contactFormSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="banner" id='accueil'>
      <img className="banner__image" src={ImgBanner} alt="Banner" />
      <div className="banner__content">
        <h1>{pageTitle}</h1>        
        <div className='banner__content-text'>
          <p>{bannerText}</p>
        </div>
        <Button buttonText={buttonText} onClick={scrollToContactForm} />
      </div>
    </div>
  );
}

export default Banner;