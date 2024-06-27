import React from "react";
import PokeCard from "../PokeCard";

function PokedexBoard({ loading, sortedPokemons }) {
  return (
    <div className="grid outline bg-white rounded-xl grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center py-4 px-4 h-[70vh] overflow-hidden overflow-y-scroll">
      {loading ? (
        // add a spinning circle?
        <div>Loading...</div>
      ) : (
        sortedPokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))
      )}
    </div>
  );
}

export default PokedexBoard;
