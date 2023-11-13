import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <div>
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
