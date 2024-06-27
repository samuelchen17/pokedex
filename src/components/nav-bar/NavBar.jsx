import React, { useState } from "react";
import Pearls from "../design/Pearls";
import RegionBtn from "../design/RegionBtn";
import Region from "./Region";

function NavBar({ setRegion }) {
  const [showFav, setShowFav] = useState(false);
  const [showRegion, setShowRegion] = useState(false);

  const handleOnClick = (event) => {
    const value = event.target.value.split(",").map(Number);
    setRegion(value);
    console.log(value);
  };
  return (
    // fixed z-40 top-0 h-[100px] px-10
    <div className="flex flex-col bg-red-300 w-full">
      <div className="flex flex-ro justify-between">
        <Pearls />
        <h1 className="text-4xl">Pokedex</h1>
        <div className="flex justify-end flex-col w-[60px]">
          <button
            className="bg-slate-500 outline"
            onClick={() => setShowFav(true)}
          >
            favourites popout
          </button>
          <button
            className="bg-slate-500 outline"
            onClick={() => setShowRegion(true)}
          >
            region popout
          </button>
        </div>
      </div>

      <div className="flex flex-row">
        <input className="" type="text" placeholder="Search for Pokemon" />
      </div>
      <div className="flex flex-col">
        <RegionBtn handleOnClick={handleOnClick} />
        {/* <button onClick={handleOnClick} value="151, 100">
          johto
        </button>
        <button onClick={handleOnClick} value="251, 135">
          hoenn
        </button>
        <button onClick={handleOnClick} value="386, 107">
          Sinnoh
        </button>
        <button onClick={handleOnClick} value="493, 156">
          Unova
        </button>
        <button onClick={handleOnClick} value="649, 72">
          Kalos
        </button>
        <button onClick={handleOnClick} value="0, 721">
          Show All
        </button> */}
      </div>
      {showFav && <Favourites onClose={() => setShowFav(false)} />}
      {showRegion && (
        <Region
          onClose={() => setShowRegion(false)}
          setShowRegion={setShowRegion}
          showRegion={showRegion}
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
