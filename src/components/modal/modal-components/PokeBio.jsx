import React from "react";

function PokeBio({ pokemonDetail }) {
  return (
    <div className="flex flex-row justify-between sms:mx-4">
      <div className="flex flex-col items-center justify-center bg-slate-200 w-[32%] sms:rounded-xl rounded-r-xl h-[70px] outline">
        <span>height</span>
        <span>{pokemonDetail.height} m</span>
      </div>
      <div className="flex flex-col items-center justify-center bg-slate-200 w-[32%] rounded-xl h-[70px] outline">
        <span>Weight</span>
        <span>{pokemonDetail.weight} kg</span>
      </div>
      <div className="flex flex-col items-center justify-center bg-slate-200 w-[32%] sms:rounded-xl rounded-l-xl h-[70px] outline">
        <span>Category</span>
        <span>{pokemonDetail.genus}</span>
      </div>
    </div>
  );
}

export default PokeBio;
