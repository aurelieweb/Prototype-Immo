import React from 'react';

import '../../styles/styles.scss';
import ImgBanner from '../../assets/imgBanner.jpeg';


/*Fonction Banner*/ 
function Banner({ pageTitle, bannerText }) {
  return (
    <div className="banner" id='accueil'>
      <img className="banner__image" src={ImgBanner} alt="Banner" />
      <div className="banner__content">
 {/*}       <p className='banner__content-title'>Aurélie Demetrio</p>*/}
        <h1>{pageTitle}</h1>        
        <div className='banner__content-text'>
        </div>
      </div>
    </div>
  );
}

export default Banner;
