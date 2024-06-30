import React, { useState } from "react";
import PokeCard from "../PokeCard";
import { sortPokemons } from "../../functions/sort";
import PokeFav from "./PokeFav";
import PokeModal from "../modal/PokeModal";

function PokedexBoard({ loading, sortedPokemons }) {
  // grab initial local storage
  const [favouritesList, setFavouritesList] = useState(
    JSON.parse(localStorage.getItem("favourites") || "[]")
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handleAddFavourite = (pokeId) => {
    let favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
    if (favourites.includes(pokeId)) {
      favourites = favourites.filter((fav) => fav !== pokeId);
    } else {
      favourites.push(pokeId);
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
    setFavouritesList(favourites);
  };

  const handlePokeClick = (pokeId) => {
    setSelectedPokemon(pokeId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPokemon(null);
  };

  return (
    <div className="outline bg-white rounded-xl py-4 px-4">
      <div className="mx-2 mb-2 rounded-xl">
        <div className="text-center text-3xl uppercase pb-2">Favourites</div>
        <div className="grid grid-cols-2 sms:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 justify-items-center overflow-hidden overflow-y-scroll">
          {loading ? (
            // add a spinning circle?
            <div>Loading...</div>
          ) : (
            // map favourites and grab detail using api
            favouritesList.map((id, index) => (
              <PokeFav
                key={index}
                id={id}
                handleAddFavourite={handleAddFavourite}
                isFavourite={favouritesList.includes(id)}
                onClick={() => handlePokeClick(id)}
              />
            ))
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
              handleAddFavourite={handleAddFavourite}
              isFavourite={favouritesList.includes(pokemon.id)}
              onClick={() => handlePokeClick(pokemon.id)}
            />
          ))
        )}
      </div>
      {showModal && selectedPokemon && (
        <PokeModal
          pokemonId={selectedPokemon}
          onClose={closeModal}
          handleAddFavourite={() => handleAddFavourite(selectedPokemon)}
          isFavourite={favouritesList.includes(selectedPokemon)}
        />
      )}
    </div>
  );
}

export default PokedexBoard;
