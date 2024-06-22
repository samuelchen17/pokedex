import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import { getPokemon } from "../../services/pokeApi";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  // loading usestate?

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
    <div className="bg-green-500 h-[500px] py-2">
      <div className="flex flex-wrap justify-center">
        {pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
