import React from "react";

function PokeAboutText({ pokemonDetail }) {
  return (
    <div className="mx-4 my-4 w-full">
      <div>About</div>
      <div>{pokemonDetail.aboutText}</div>
    </div>
  );
}

export default PokeAboutText;
