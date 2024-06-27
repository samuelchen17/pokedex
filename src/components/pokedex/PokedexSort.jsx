import React from "react";
import PokeSort from "./PokeSort";

function PokedexSort({ sort, setSort }) {
  return (
    <div className="flex sm:flex-row sm:justify-between w-full mb-4 mt-2 flex-col items-center text-center">
      <div className="text-white text-xl font-medium mb-1 sm:mb-0">
        Showing 1-50
      </div>

      <PokeSort setSort={setSort} sort={sort} />
    </div>
  );
}

export default PokedexSort;
