import React, { useState } from "react";
import PokeModal from "./modal/PokeModal";
import TypePill from "./design/TypePill";

function PokeCard({ pokemon, handleAddFavourite, isFavourite }) {
  const [showModal, setShowModal] = useState(false);

  // Add the zeros in front
  const paddedId = pokemon.id.toString().padStart(3, "0");

  const handleFavClick = (event) => {
    event.stopPropagation();
    handleAddFavourite(pokemon.id);
  };

  return (
    <div>
      <div
        className="hover:animate-bounceOnce cursor-pointer bg-slate-300 outline rounded-xl py-2 px-2 my-2 mx-2"
        onClick={() => setShowModal(true)}
      >
        <div className="bg-slate-200 rounded-xl">
          <div className="flex justify-between">
            <div className="pl-2 pt-1">#{paddedId}</div>
            <div onClick={handleFavClick}>{isFavourite ? "★" : "☆"}</div>
          </div>
          <div className="flex justify-center">
            <img
              className="w-full h-full object-cover"
              src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${paddedId}.png`}
              alt={`${pokemon.name} png`}
            />
          </div>
        </div>
        <div>
          <div className="py-1 text-xl capitalize">{pokemon.name}</div>
          <div className="flex justify-between">
            {pokemon.type.map((type, index) => (
              <TypePill key={index} type={type.type.name} />
            ))}
          </div>
        </div>
      </div>
      {showModal && (
        <PokeModal
          pokemonId={pokemon.id}
          onClose={() => setShowModal(false)}
          handleAddFavourite={handleFavClick}
          isFavourite={isFavourite}
        />
      )}
    </div>
  );
}

export default PokeCard;
