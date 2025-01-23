import React from 'react';
import '../../styles/styles.scss';
import Menu from '../../components/Menu';
import logo from '../../assets/logo.svg';


//import Fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="header__container" >
        
        <div className='header__logo'>
          <a href="#accueil">
            <img className="logo" src={logo} alt="Logo Aurélie DEMETRIO, L'agence Digitale, développeur freelance " />
           </a>
        </div>   
        <div className='header__container-contact'>
 
          <div className='header__contact'>
            <div className='header__contact-details'>
              <a href="tel:+33636869270" aria-label="Accédez à la section contact"><FontAwesomeIcon icon={faPhone} /></a>
            </div>
            <div className='header__contact-media'>
            <a href="#contact" aria-label="Accédez à la section contact">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div> 
          </div>
          <Menu/>
        </div>
   
    </header>
  );
}

export default Header;
