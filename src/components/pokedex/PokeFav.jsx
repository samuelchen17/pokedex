import React from "react";

function PokeFav({ id, handleAddFavourite, isFavourite, onClick }) {
  const paddedId = id.toString().padStart(3, "0");

  const handleFavClick = (event) => {
    event.stopPropagation();
    handleAddFavourite(id);
  };

  // add use effect to get name of pokemon
  // write a new api to get only name of pokemon

  return (
    <div
      className="hover:animate-bounceOnce cursor-pointer bg-slate-300 outline rounded-xl py-2 px-2 my-2 mx-2"
      onClick={onClick}
    >
      <div className="rounded-xl bg-slate-200">
        <div className="flex justify-between">
          <div>#001</div>
          <div onClick={handleFavClick} className="outline">
            {isFavourite ? "★" : "☆"}
          </div>
        </div>
        <img
          src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${paddedId}.png`}
        />
      </div>
      <div>name</div>
    </div>
  );
}

export default PokeFav;
