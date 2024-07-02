import React from "react";
import TypePill from "../../design/TypePill";

function PokeNameNumType({ pokemonDetail, paddedId }) {
  return (
    <div className="flex justify-center my-4">
      <div className="bg-slate-200 w-[60%] flex flex-col rounded-xl outline">
        <div className="text-center capitalize py-2 flex flex-col sms:flex-row sms:justify-center">
          <div className="px-1 text-3xl">{pokemonDetail.name}</div>
          <div className="px-1 text-3xl text-slate-600">#{paddedId}</div>
        </div>
        <div className="flex justify-center py-2">
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
