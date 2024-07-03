import React from "react";

function PokeImg({
  pokemonDetail,
  paddedId,
  playSound,
  handleAddFavourite,
  isFavourite,
}) {
  return (
    <div className="flex justify-center items-center bg-slate-200 sms:rounded-xl sms:mx-4 my-4 outline relative">
      <div className="absolute top-0 right-0 m-2 cursor-pointer">
        <div
          className="flex justify-end px-2 py-2 sms:text-3xl text-xl"
          onClick={handleAddFavourite}
        >
          {isFavourite ? "★" : "☆"}
        </div>
      </div>
      <img
        className="max-w-[80%]"
        src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${paddedId}.png`}
        alt={`${pokemonDetail.name} png`}
      />
      <div
        onClick={playSound}
        className="absolute bottom-0 right-0 m-2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="sms:size-10 size-7 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default PokeImg;
