import React from "react";

function PokeAboutText({ pokemonDetail }) {
  return (
    <div className="sms:mx-4 my-4 px-2 py-2 outline sms:rounded-xl bg-slate-200">
      <div>About</div>
      <span className="text-wrap">{pokemonDetail.aboutText}</span>
    </div>
  );
}

export default PokeAboutText;
