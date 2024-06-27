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
    <div>
      <div className="flex flex-row justify-center">
        {/* <div className="hidden lg:flex bg-red-500">Region</div> */}
        <div className="bg-red-500 py-2 px-2 flex justify-center items-center w-full">
          <div className="flex justify-center items-center flex-col">
            <NavBar setRegion={setRegion} />
            <PokedexSort sort={sort} setSort={setSort} />
            <div className="">
              <PokedexBoard loading={loading} sortedPokemons={sortedPokemons} />
            </div>
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
