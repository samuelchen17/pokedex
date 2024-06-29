import React from "react";

function PokeFav({ id }) {
  const paddedId = id.toString().padStart(3, "0");
  return (
    <div className="hover:animate-bounceOnce cursor-pointer bg-slate-300 outline rounded-xl py-2 px-2 my-2 mx-2">
      <div className="rounded-xl bg-slate-200">
        <img
          src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${paddedId}.png`}
        />
      </div>
      <div>name</div>
    </div>
  );
}

export default PokeFav;
