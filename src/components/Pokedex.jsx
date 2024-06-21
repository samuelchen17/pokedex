import React from "react";
import { getPokemon } from "../../services/pokeApi";
import PokeCard from "./PokeCard";

function Pokedex() {
  //   getPokemon();
  return (
    <div className="bg-green-500 h-[500px] py-2">
      <div className="flex flex-wrap justify-center">
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </div>
    </div>
  );
}

export default Pokedex;
