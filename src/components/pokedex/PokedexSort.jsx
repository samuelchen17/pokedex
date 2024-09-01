import React from "react";
import PokeSort from "./PokeSort";
import { motion } from "framer-motion";

function PokedexSort({ sort, setSort, region }) {
  return (
    <div className="flex md:flex-row sm:justify-between w-full mb-4 mt-2 flex-col items-center text-center">
      <div className="text-white text-xl font-medium mb-1 sm:mb-0 hidden md:flex mx-2">
        Showing {region[0] + 1}-{region[1] + region[0]}
      </div>

      <PokeSort setSort={setSort} sort={sort} />
    </div>
  );
}

export default PokedexSort;
