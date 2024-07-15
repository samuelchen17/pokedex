import React, { useState } from "react";
import TypePill from "../design/TypePill";
import ImgRetry from "../ImgRetry";

function PokeCard({ pokemon, handleAddFavourite, isFavourite, onClick }) {
  const paddedId = pokemon.id.toString().padStart(3, "0");

  const handleFavClick = (event) => {
    event.stopPropagation();
    handleAddFavourite(pokemon.id);
  };

  return (
    <div>
      <div
        className="hover:animate-bounceOnce cursor-pointer bg-slate-300 outline rounded-xl py-2 px-2 my-2 mx-2"
        onClick={onClick}
      >
        <div className="bg-slate-200 rounded-xl">
          <div className="flex justify-between">
            <div className="pl-2 pt-1">#{paddedId}</div>
            <div className="pr-2 pt-1 text-xl" onClick={handleFavClick}>
              {isFavourite ? "★" : "☆"}
            </div>
          </div>
          <div className="flex justify-center sms:min-w-[180px] sms:h-[200px] min-w-[120px] min-h-[100px] py-2">
            <ImgRetry
              className="sms:min-w-[180px] sms:h-[200px] min-w-[120px] min-h-[100px] flex"
              src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${paddedId}.png`}
              alt={`${pokemon.name} png`}
            />
          </div>
        </div>
        <div>
          <div className="py-1 text-xl capitalize">{pokemon.name}</div>
          <div className="flex justify-between gap-2">
            {pokemon.type.map((type, index) => (
              <TypePill key={index} type={type.type.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
// src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${paddedId}.png`}

export default PokeCard;
