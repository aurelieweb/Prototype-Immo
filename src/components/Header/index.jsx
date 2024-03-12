import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../styles/styles.scss';
import Menu from '../../components/Menu';
import logo from '../../assets/logo.svg';


//import Fontawesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="header__container" id='accueil'>
        
        <div className='header__logo'>
          <Link to="/">
            <img className="logo" src={logo} alt="Logo Aurélie DEMETRIO, L'agence Digitale, développeur freelance " />
           </Link>
        </div>   
        <div className='header__container-contact'>
 
          <div className='header__contact'>
            <div className='header__contact-details'>
              <a href="tel:+33636869270"><FontAwesomeIcon icon={faPhone} /></a>
            </div>
            <div className='header__contact-media'>
              <Link to='/#contact'>
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </div> 
          </div>
          <Menu/>
        </div>
   
    </header>
  );
}

export default Header;
