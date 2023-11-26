import React from 'react';

const NavBar = ({ onPrevious, onNext, selectedPokemon }) => {
  const handleSelection = () => {
    if (selectedPokemon === 'pikachu') {
      alert('pika pikachu !!!');
    }
  };

  return (
    <div>
      <button onClick={onPrevious}>Précédent</button>
      <button onClick={onNext}>Suivant</button>
      <button onClick={handleSelection}>Sélectionner Pikachu</button>
    </div>
  );
};

export default NavBar;
