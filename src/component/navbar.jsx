import React from 'react';

const NavBar = ({ pokemonList, onPokemonClick, onPrevious, onNext, handleSelection }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => onPokemonClick(index)}>
          {pokemon.name}
        </button>
      ))}
      <button onClick={onPrevious}>Précédent</button>
      <button onClick={onNext}>Suivant</button>
      <button onClick={handleSelection}>Sélectionner Pikachu</button>
    </div>
  );
};

export default NavBar;
