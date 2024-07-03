import React from "react";
import TypePill from "../../design/TypePill";

function PokeNameNumType({ pokemonDetail, paddedId }) {
  return (
    <div className="flex justify-center my-4">
      <div className="bg-slate-200 w-full sms:mx-4 flex flex-col sms:rounded-xl outline overflow-hidden">
        <div className="text-center capitalize py-2 flex flex-col sms:flex-row sms:justify-center bg-red-700">
          <div className="px-1 text-3xl text-white">{pokemonDetail.name}</div>
          <div className="px-1 text-3xl text-gray-300">#{paddedId}</div>
        </div>
        <div className="flex justify-center py-4">
          <div className="flex flex-row justify-center md:gap-8 gap-4 w-[90%]">
            {pokemonDetail.type.map((type, index) => (
              <TypePill key={index} type={type.type.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeNameNumType;
