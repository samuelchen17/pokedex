import React from "react";

function PokeImg({ pokemonDetail, paddedId }) {
  return (
    <div className="flex justify-center items-center bg-slate-200 sms:rounded-xl sms:mx-4 my-4 outline">
      <img
        className="max-w-[80%]"
        src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${paddedId}.png`}
        alt={`${pokemonDetail.name} png`}
      />
    </div>
  );
}

export default PokeImg;
