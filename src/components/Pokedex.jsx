import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import { getPokemon } from "../../services/pokeApi";
import { sortPokemons } from "../functions/sort";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("lowNumFirst");
  // create a useState for regions

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

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  const sortedPokemons = sortPokemons(pokemons, sort);

  return (
    <div className="bg-red-500 py-2 px-2 flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <div className="flex sms:flex-row sms:justify-between w-full lg:w-[80%] mb-4 mt-2 flex-col items-center text-center">
          {/* sms:justify-between sms:items-center sms:flex-row flex-col */}
          <div className="text-white text-xl font-medium ">Showing 1-50</div>
          <div>
            <label className="text-white mr-2 text-xl font-medium">
              Sort By:
            </label>
            <select
              value={sort}
              onChange={handleSort}
              className="px-2 py-1 rounded"
            >
              <option value="lowNumFirst">Lowest Number (First)</option>
              <option value="highNumFirst">Highest Number (First)</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
          </div>
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
