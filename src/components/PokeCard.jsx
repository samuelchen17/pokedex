import React from "react";

function PokeCard({ pokemon }) {
  // add the zeros in front
  const paddedId = pokemon.id.toString().padStart(3, "0");
  // make the card a % width and also set a max or min width
  // @media query for a max-width for pokedex

  return (
    <div className="hover:animate-bounceOnce cursor-pointer bg-red-200 my-1 mx-1 py-2 px-5">
      <div className="min-w-[120px] max-w-[150px] h-[200px] bg-slate-100 rounded">
        <div className="pl-2 pt-1">#{paddedId}</div>
        <img
          src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${paddedId}.png`}
        />
      </div>
      <div>
        <div className="py-1 text-xl capitalize outline-dashed outline-red-500">
          {pokemon.name}
        </div>
        <div className="flex justify-between capitalize">
          {pokemon.type.map((type, index) => (
            <span
              key={index}
              className={`${type.type.name} rounded-md text-sm shadow-md w-[45%] text-center`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokeCard;
