import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import { getPokemon } from "../../services/pokeApi";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("lowNumFirst");

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

  // sort pokemons
  const sortPokemons = (pokemons, sort) => {
    const sortedPokemons = [...pokemons];
    if (sort === "a-z") {
      return sortedPokemons.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "z-a") {
      return sortedPokemons.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sort === "highNumFirst") {
      return sortedPokemons.sort((a, b) => b.id - a.id);
    } else if (sort === "lowNumFirst") {
      return sortedPokemons.sort((a, b) => a.id - b.id);
    }
  };

  const sortedPokemons = sortPokemons(pokemons, sort);

  return (
    <div className="bg-red-500 py-2 px-2 flex justify-center items-center flex-col">
      <div className="flex sms:justify-end w-[67%] mb-4 mt-2 sms:items-center sms:flex-row flex-col">
        <label className="text-white mr-2">Sort By:</label>
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
      {loading ? (
        // add a spinning circle?
        <div>Loading...</div>
      ) : (
        <div className="grid lg:max-w-[80%] bg-white rounded-xl grid-cols-1 sms:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center py-4 px-4">
          {sortedPokemons.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Pokedex;
