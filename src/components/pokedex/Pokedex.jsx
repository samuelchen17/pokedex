import React, { useEffect, useState } from "react";
import PokeCard from "../PokeCard";
import { getPokemon } from "../../../services/pokeApi";
import { sortPokemons } from "../../functions/sort";
import PokeSort from "./PokeSort";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("lowNumFirst");
  // create a useState for regions

  useEffect(() => {
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

  const sortedPokemons = sortPokemons(pokemons, sort);

  return (
    <div className="bg-red-500 py-2 px-2 flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <div className="flex sm:flex-row sm:justify-between w-full lg:w-[80%] mb-4 mt-2 flex-col items-center text-center">
          <div className="text-white text-xl font-medium mb-1 sm:mb-0">
            Showing 1-50
          </div>

          <PokeSort setSort={setSort} sort={sort} />
        </div>
        <div className="grid lg:max-w-[80%] bg-white rounded-xl grid-cols-1 sms:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center py-4 px-4">
          {loading ? (
            // add a spinning circle?
            <div>Loading...</div>
          ) : (
            sortedPokemons.map((pokemon) => (
              <PokeCard key={pokemon.id} pokemon={pokemon} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Pokedex;

// allow favourites, use their sprite for the favourites
// sort by favourites only

// filters
// filter by type
// filter by region
// add display of showing 151-252
// search by number range
// search by name and number
// show all 1 - 721
