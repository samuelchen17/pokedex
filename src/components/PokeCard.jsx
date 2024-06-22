import React from "react";

function PokeCard({ pokemon }) {
  // add the zeros in front
  const paddedId = pokemon.id.toString().padStart(3, "0");

  return (
    <div className="cursor-pointer w-[px] h-[px] block relative bg-red-500 my-1 mx-2 py-2 px-5">
      <div></div>
      <div className="w-[130px] h-[160px] bg-slate-200 rounded">
        <span>#{paddedId}</span>
        <img
          src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${paddedId}.png`}
        />
      </div>
      <div>
        <div>
          <span className="text-xl">{pokemon.name}</span>
        </div>
        <div className="flex justify-between">
          <span>Grass</span>
          <span>Flying</span>
        </div>
      </div>
    </div>
  );
}

export default PokeCard;

// set the use effect in pokedex instead, and pass the children in while for each
