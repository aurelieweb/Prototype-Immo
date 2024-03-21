import React from 'react';
import '../../styles/styles.scss';

function Button({ buttonText, onClick }) {
  return (
    <button onClick={onClick}>{buttonText}</button>
  );
}

export default Button;
