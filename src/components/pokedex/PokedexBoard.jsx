import React, { useEffect, useState } from "react";
import PokeCard from "../PokeCard";

function PokedexBoard({ loading, sortedPokemons }) {
  // grab initial local storage
  const [favouritesList, setFavouritesList] = useState(
    JSON.parse(localStorage.getItem("favourites") || "[]")
  );
  const getFavourites = () => {
    return JSON.parse(localStorage.getItem("favourites") || "[]");
  };

  return (
    <div className="outline bg-white rounded-xl py-4 px-4">
      <div className="mx-2 mb-2 outline rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center overflow-hidden overflow-y-scroll">
          {loading ? (
            // add a spinning circle?
            <div>Loading...</div>
          ) : (
            // map favourites and grab detail using api
            favouritesList.map((id, index) => {
              const paddedId = id.toString().padStart(3, "0");
              return (
                <img
                  key={index}
                  src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${paddedId}.png`}
                />
              );
            })
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center overflow-hidden overflow-y-scroll">
        {loading ? (
          // add a spinning circle?
          <div>Loading...</div>
        ) : (
          sortedPokemons.map((pokemon) => (
            <PokeCard
              key={pokemon.id}
              pokemon={pokemon}
              setFavouritesList={setFavouritesList}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default PokedexBoard;
