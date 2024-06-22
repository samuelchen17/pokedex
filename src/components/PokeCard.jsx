import React, { useEffect, useState } from "react";

import { getPokemon } from "../../services/pokeApi";

function PokeCard() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const pokemonData = await getPokemon();
        setPokemons(pokemonData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPokemon();
  }, []);

  console.log(pokemons[1]);
  return (
    <div className="cursor-pointer w-[px] h-[px] block relative bg-red-500 my-1 mx-2 py-2 px-5">
      <div></div>
      <div className="w-[130px] h-[160px] bg-slate-200 rounded">
        <span>#0001</span>
        <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png" />
      </div>
      <div>
        <div>
          <span className="text-xl">Bulbasaur</span>
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
