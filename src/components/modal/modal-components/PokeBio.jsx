import React from "react";

function PokeBio({ pokemonDetail }) {
  return (
    <div className="grid grid-cols-3 gap-2 sms:mx-4 sms:gap-4">
      <div className="flex flex-col items-center justify-center w-full bg-slate-200 sms:rounded-xl rounded-r-xl h-[70px] outline">
        <span>height</span>
        <span>{pokemonDetail.height} m</span>
      </div>
      <div className="flex flex-col items-center justify-center w-full bg-slate-200 rounded-xl h-[70px] outline">
        <span>Weight</span>
        <span>{pokemonDetail.weight} kg</span>
      </div>
      <div className="flex flex-col items-center justify-center w-full bg-slate-200 sms:rounded-xl rounded-l-xl h-[70px] outline">
        <span>Category</span>
        <span>{pokemonDetail.genus}</span>
      </div>
    </div>
  );
}

export default PokeBio;
