import React from "react";

const NavBar = ({ onPrevious, onNext }) => {
  return (
    <div>
      <button onClick={onPrevious}>Précédent</button>
      <button onClick={onNext}>Suivant</button>
    </div>
  );
};

export default NavBar;
