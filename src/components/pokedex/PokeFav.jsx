import React from "react";

function PokeFav({ id }) {
  const paddedId = id.toString().padStart(3, "0");
  return (
    <img
      src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${paddedId}.png`}
    />
  );
}

export default PokeFav;
