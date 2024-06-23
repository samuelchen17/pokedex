import React from "react";

function PokeCard({ pokemon }) {
  // add the zeros in front
  const paddedId = pokemon.id.toString().padStart(3, "0");

  const type = pokemon.type[0].type.name;

  console.log(pokemon.type[0].type.name);

  return (
    <div className="cursor-pointer w-[px] h-[px] block relative bg-red-500 my-1 mx-1 py-2 px-5">
      <div></div>
      <div className="w-[130px] h-[160px] bg-slate-100 rounded">
        <span className="pl-2">#{paddedId}</span>
        <img
          src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${paddedId}.png`}
        />
      </div>
      <div>
        <div>
          <span className="text-xl capitalize">{pokemon.name}</span>
        </div>
        <div className="flex justify-between capitalize">
          {/* [perhaps make this map] */}
          <span className={`grass`}>{type}</span>
          {pokemon.type[1]?.type?.name && (
            <span className="bg-blue-500">{pokemon.type[1].type.name}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokeCard;

// set the use effect in pokedex instead, and pass the children in while for each
