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

  return (
    <div className="bg-red-300">
      <div className="flex flex-row justify-center">
        {/* <div className="hidden lg:flex bg-red-500">Region</div> */}
        <div className="bg-red-500 py-2 px-2 my-2 flex justify-center items-center rounded-xl outline">
          <div className="flex justify-center items-center flex-col">
            <NavBar setRegion={setRegion} />

            {/* <button
              onClick={() => {
                setSearchSortVis(!searchSortVis);
              }}
              className="bg-blue-500 text-white px-4 py-2 mb-4"
            >
              Toggle Sort
            </button> */}

            <PokedexSort
              sort={sort}
              setSort={setSort}
              searchSortVis={searchSortVis}
            />
            {/* <div className=""> */}
            <PokedexBoard loading={loading} sortedPokemons={sortedPokemons} />
            {/* </div> */}
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