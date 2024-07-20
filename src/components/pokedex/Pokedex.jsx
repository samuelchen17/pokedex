import React, { useEffect, useState } from "react";

import { getPokemon } from "../../../services/pokeApi";
import { sortPokemons } from "../../functions/sort";

import PokedexSort from "./PokedexSort";
import PokedexBoard from "./PokedexBoard";
import NavBar from "../nav-bar/NavBar";

function Pokedex({ region, setRegion }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("lowNumFirst");
  const [searchSortVis, setSearchSortVis] = useState("true");
  const [searchParam, setSearchParam] = useState("");

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const pokemonData = await getPokemon(region);
        setPokemons(pokemonData);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [region]);

  const filteredPokemons = pokemons.filter(
    (pokemon) =>
      pokemon.name !== undefined &&
      pokemon.id !== undefined &&
      pokemon.type !== undefined &&
      (pokemon.name.toLowerCase().includes(searchParam.toLowerCase()) ||
        pokemon.id.toString().includes(searchParam))
  );

  const sortedPokemons = sortPokemons(filteredPokemons, sort);

  return (
    <div className="bg-gradient-to-br from-blue-100 from-5% to-blue-400 to-90% min-h-dvh relative">
      <div className="flex flex-row justify-center">
        <div className="bg-red-500 py-2 sm:px-4 px-2 sm:my-2 flex justify-center items-center rounded-xl outline ">
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-col w-full">
              <NavBar
                setRegion={setRegion}
                searchParam={searchParam}
                setSearchParam={setSearchParam}
              />
              <PokedexSort
                sort={sort}
                setSort={setSort}
                searchSortVis={searchSortVis}
                region={region}
              />
            </div>

            <PokedexBoard loading={loading} sortedPokemons={sortedPokemons} />
          </div>
        </div>
      </div>
      <button
        className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-md"
        onClick={toTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </button>
    </div>
  );
}

export default Pokedex;
