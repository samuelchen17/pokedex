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

  const sortedPokemons = sortPokemons(pokemons, sort);

  const filteredPokemons = sortedPokemons.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchParam.toLowerCase()) ||
      pokemon.id.toString().includes(searchParam)
  );

  return (
    <div className="bg-red-300 min-h-[100vh]">
      <div className="flex flex-row justify-center">
        {/* <div className="hidden lg:flex bg-red-500">Region</div> */}
        <div className="bg-red-500 py-2 px-2 my-2 flex justify-center items-center rounded-xl outline">
          <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center flex-col outline-blue-500 outline w-full">
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

            {/* <button
              onClick={() => {
                setSearchSortVis(!searchSortVis);
              }}
              className="bg-blue-500 text-white px-4 py-2 mb-4"
            >
              Toggle Sort
            </button> */}

            <PokedexBoard loading={loading} sortedPokemons={filteredPokemons} />
          </div>
        </div>
        {/* <div className="hidden lg:flex bg-red-500">Favourites</div> */}
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
