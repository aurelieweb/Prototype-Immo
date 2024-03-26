import React, { useState } from 'react';

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
          <a href="#accueil" className="menu__item-link" onClick={closeMenu}>
            Accueil
          </a>
        </li>
        <li className="menu__item">
          <a href="#projet" className="menu__item-link" onClick={closeMenu}>
            Notre Projet
          </a>
        </li>
        <li className="menu__item">
          <a href="#situation" className="menu__item-link" onClick={closeMenu}>
            Situation
          </a>
        </li>
        <li className="menu__item">
          <a href="#offre" className="menu__item-link" onClick={closeMenu}>
            Offre
          </a>
        </li>
        <li className="menu__item">
          <a href="#contact" className="menu__item-link" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
