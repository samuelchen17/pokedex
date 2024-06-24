import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import { getPokemon } from "../../services/pokeApi";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPokemon = async () => {
      try {
        const pokemonData = await getPokemon();
        setPokemons(pokemonData);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  console.log(pokemons[1]);
  return (
    <div className="bg-green-500 py-2 px-2">
      {loading ? (
        // add a spinning circle?
        <div>Loading...</div>
      ) : (
        // <div className="flex flex-wrap justify-center bg-blue-600 w-auto py-2">
        <div className="grid bg-blue-600 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {pokemons.map((pokemon) => (
            <div className="flex-grow min-w-[150px] max-w-[370px] w-full sm:w-[150px] md:w-[150px] lg:w-[150px]">
              <PokeCard key={pokemon.id} pokemon={pokemon} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Pokedex;
