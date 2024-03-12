import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="menu">
      <button className="menu__burger" onClick={toggleMenu}>
        ☰
      </button>
      {menuOpen && (
        <button className="close-button" onClick={closeMenu}>
          ✕
        </button>
      )}
      <ul className={`menu__list ${menuOpen ? 'open' : ''}`}>
        <li className="menu__item">
          <Link to="/" className="menu__item-link" onClick={closeMenu}>
            Accueil
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/projet" className="menu__item-link" onClick={closeMenu}>
            Projet
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/situation" className="menu__item-link" onClick={closeMenu}>
            Situation
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/offre" className="menu__item-link" onClick={closeMenu}>
            Offre
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/partenaire" className="menu__item-link" onClick={closeMenu}>
            Partenaires
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/contact" className="menu__item-link" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
