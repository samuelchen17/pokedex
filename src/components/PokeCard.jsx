import React, { useState } from "react";
import PokeModal from "./PokeModal";

function PokeCard({ pokemon }) {
  // add the zeros in front
  const paddedId = pokemon.id.toString().padStart(3, "0");
  const [showModal, setShowModal] = useState(false);
  // make the card a % width and also set a max or min width
  // @media query for a max-width for pokedex

  return (
    <div
      // hover:animate-bounceOnce
      className=" cursor-pointer bg-red-200 my-2 mx-1 py-2 px-5 flex-grow"
      onClick={() => setShowModal(true)}
    >
      <div className=" bg-slate-100 rounded">
        <div className="pl-2 pt-1">#{paddedId}</div>
        <div className="flex justify-center">
          <img
            className="w-full h-full object-cover"
            src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${paddedId}.png`}
          />
        </div>
      </div>
      <div>
        <div className="py-1 text-xl capitalize outline-dashed outline-red-500">
          {pokemon.name}
        </div>
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
