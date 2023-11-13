import React, { useEffect, useState } from 'react';
import NavBar from './component/navbar';
import './App.css';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
export default function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    alert('hello pokemon trainer :)');
  }, []);

  const handlePrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const handleNext = () => {
    const maxIndex = pokemonList.length - 1;
    if (pokemonIndex < maxIndex) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <div>
      <h1>Pokédex</h1>
      <p>{pokemonList[pokemonIndex].name}</p>
      <img src={pokemonList[pokemonIndex].imgSrc} alt={pokemonList[pokemonIndex].name} />

      <button onClick={handlePrevious} disabled={pokemonIndex === 0}>
        Précédent
      </button>
      <button onClick={handleNext} disabled={pokemonIndex === pokemonList.length - 1}>
        Suivant
      </button>

      <NavBar />
    </div>
  );
}





