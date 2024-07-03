import React from "react";

function PokeAboutText({ pokemonDetail }) {
  return (
    <div className="sms:mx-4 my-4 outline sms:rounded-xl bg-slate-200">
      <div className="bg-red-700 sms:rounded-t-xl text-white text-center py-1">
        About
      </div>
      <div className="text-wrap px-2 py-2">{pokemonDetail.aboutText}</div>
    </div>
  );
}

export default PokeAboutText;
