import React from "react";

function PokeBio({ pokemonDetail }) {
  return (
    <div className="grid grid-cols-3 sms:mx-4 sms:gap-4">
      <div className="flex flex-col w-full bg-slate-200 sms:rounded-xl sms:rounded-r-xl outline">
        <div className="bg-red-700 text-white sms:rounded-t-xl text-center py-1">
          height
        </div>
        <div className="text-center py-2">{pokemonDetail.height} m</div>
      </div>
      <div className="flex flex-col w-full bg-slate-200 sms:rounded-xl outline">
        <div className="bg-red-700 text-white sms:rounded-t-xl text-center py-1">
          Weight
        </div>
        <div className="text-center py-2">{pokemonDetail.weight} kg</div>
      </div>
      <div className="flex flex-col w-full bg-slate-200 sms:rounded-xl sms:rounded-l-xl outline">
        <div className="bg-red-700 text-white sms:rounded-t-xl text-center py-1">
          Category
        </div>
        <div className="text-center py-2">{pokemonDetail.genus}</div>
      </div>
    </div>
  );
}

export default PokeBio;
