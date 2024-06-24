import React, { useState } from "react";
import PokeModal from "./PokeModal";

function PokeCard({ pokemon }) {
  // add the zeros in front
  const paddedId = pokemon.id.toString().padStart(3, "0");
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      // hover:animate-bounceOnce
      className="hover:animate-bounceOnce cursor-pointer bg-slate-300 rounded-xl py-2 px-2 my-2 mx-2"
      onClick={() => setShowModal(true)}
    >
      <div className=" bg-slate-200 rounded-xl">
        <div className="pl-2 pt-1">#{paddedId}</div>
        <div className="flex justify-center">
          <img
            className="w-full h-full object-cover"
            src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${paddedId}.png`}
          />
        </div>
      </div>
      <div>
        <div className="py-1 text-xl capitalize">{pokemon.name}</div>
        <div className="flex justify-between capitalize">
          {pokemon.type.map((type, index) => (
            <span
              key={index}
              className={`${type.type.name} rounded-md text-sm shadow-md w-[45%] text-center`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
      {showModal && (
        <PokeModal
          pokemon={pokemon}
          paddedId={paddedId}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default PokeCard;
