import React, { useState } from "react";
import Pearls from "../design/Pearls";
import Region from "./Region";
import Search from "./Search";

function NavBar({ setRegion, searchParam, setSearchParam }) {
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
        <div className="flex justify-end md:w-[40%] w-full h-[30px] mt-14">
          {/* <button
            className="flex outline items-center justify-center cursor-pointer shadow-lg w-[45%] bg-slate-500 rounded-full mx-2 text-white outline-black"
            onClick={() => setShowFav(true)}
          >
            favourites
          </button> */}
          <button
            className="flex outline items-center justify-center cursor-pointer shadow-lg w-[45%] bg-slate-500 hover:bg-slate-600 rounded-full mx-2 text-white outline-black"
            onClick={() => setShowRegion(!showRegion)}
          >
            <div className="sms:flex hidden">Region</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 sms:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* {showFav && <Favourites onClose={() => setShowFav(false)} />} */}
      <div className="">
        {showRegion && (
          <Region
            onClose={() => setShowRegion(false)}
            setShowRegion={setShowRegion}
            handleOnClick={handleOnClick}
          />
        )}
        <Search searchParam={searchParam} setSearchParam={setSearchParam} />
      </div>
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
