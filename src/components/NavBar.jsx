import React from "react";
import Pearls from "./design/Pearls";

function NavBar() {
  return (
    <div className="flex flex-col bg-red-300">
      <Pearls />
      <h1 className="text-4xl">Pokedex</h1>
      <div className="flex flex-row">
        <div className="h-[50px] w-[50px] bg-red-600"></div>
        <div className="h-[50px] w-[50px] bg-red-600">hello</div>
        <input
          className="outline-emerald-500 border border-red-500"
          type="text"
          placeholder="Search for Pokemon"
        />
      </div>
    </div>
  );
}

export default NavBar;
