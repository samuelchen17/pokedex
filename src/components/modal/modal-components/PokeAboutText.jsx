import React from "react";

function PokeAboutText({ pokemonDetail }) {
  return (
    <div className="mx-4 my-4 max-w-[500px] w-full outline text-wrap">
      <div>About</div>
      <div className="text-wrap">{pokemonDetail.aboutText}</div>
    </div>
  );
}

export default PokeAboutText;
