import React from 'react';
import '../../styles/styles.scss';

function Button({ buttonText = 'Cliquer ici', onClick = () => {}, className }) {
  return (
    <button onClick={onClick} className={className}>
      {buttonText}
    </button>
  );
}


export default Button;
