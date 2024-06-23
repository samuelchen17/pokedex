import React from "react";

function PokeCard({ pokemon }) {
  // add the zeros in front
  const paddedId = pokemon.id.toString().padStart(3, "0");

  // the reason why the css is not loading is probably because the card is being rendered
  // before the data is coming in from the api
  const type = pokemon.type[0].type.name;
  console.log(type);
  //   console.log(pokemon.type[0].type.name);

  // make the card a % width and also set a max or min width
  // @media query for a max-width for pokedex

  return (
    <div className="cursor-pointer h-[px] block relative bg-red-200 my-1 mx-1 py-2 px-5">
      <div className="min-w-[130px] max-w-[200px] h-[200px] bg-slate-100 rounded">
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
          <span
            className={`${type} font-semibold rounded-md shadow-md w-[38%]`}
          >
            {type}
          </span>
          {pokemon.type[1]?.type?.name && (
            <span
              className={`${pokemon.type[1].type.name} font-semibold rounded-md shadow-md w-[38%]`}
            >
              {pokemon.type[1].type.name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokeCard;

// set the use effect in pokedex instead, and pass the children in while for each

// !!! something is wrong with generating the cards,
