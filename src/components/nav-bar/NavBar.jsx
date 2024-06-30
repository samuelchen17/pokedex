import React, { useState } from "react";
import Pearls from "../design/Pearls";

import Region from "./Region";
import Search from "./Search";

function NavBar({ setRegion, searchParam, setSearchParam }) {
  const [showFav, setShowFav] = useState(false);
  const [showRegion, setShowRegion] = useState(false);

  const handleOnClick = (event) => {
    const value = event.target.value.split(",").map(Number);
    setRegion(value);
  };

  return (
    // fixed z-40 top-0 h-[100px] px-10
    <div className="flex flex-col bg-red-500 w-full relative">
      <div className="flex flex-ro justify-between">
        <Pearls />
        {/* <h1 className="text-4xl">Pokedex</h1> */}
        <div className="flex justify-end flex-row md:w-[40%] w-full h-[30px] mt-2">
          <button
            className="flex outline items-center justify-center cursor-pointer shadow-lg w-[45%] bg-slate-500 rounded-full mx-2 text-white outline-black"
            onClick={() => setShowFav(true)}
          >
            favourites
          </button>
          <button
            className="flex outline items-center justify-center cursor-pointer shadow-lg w-[45%] bg-slate-500 rounded-full mx-2 text-white outline-black"
            onClick={() => setShowRegion(true)}
          >
            region
          </button>
        </div>
      </div>

      <Search searchParam={searchParam} setSearchParam={setSearchParam} />

      {showFav && <Favourites onClose={() => setShowFav(false)} />}
      {showRegion && (
        <Region
          onClose={() => setShowRegion(false)}
          setShowRegion={setShowRegion}
          showRegion={showRegion}
          handleOnClick={handleOnClick}
        />
      )}
    </div>
  );
}

export default NavBar;

const KANTO = [0, 151];
const JOHTO = [151, 100];
const HOENN = 252 - 386;
const SINNOH = 387 - 493;
const UNOVA = 494 - 649;
const KALOS = 650 - 721;
