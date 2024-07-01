import React from "react";
import PokeSort from "./PokeSort";
import { motion } from "framer-motion";

function PokedexSort({ sort, setSort, searchSortVis, region }) {
  return (
    // <div className="flex sm:flex-row sm:justify-between w-full mb-4 mt-2 flex-col items-center text-center">
    //   <div className="text-white text-xl font-medium mb-1 sm:mb-0">
    //     Showing 1-50
    //   </div>

    //   <PokeSort setSort={setSort} sort={sort} />
    // </div>
    <motion.div
      className="flex sm:flex-row sm:justify-between w-full mb-4 mt-2 flex-col items-center text-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: searchSortVis ? 0 : -50, opacity: searchSortVis ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="text-white text-xl font-medium mb-1 sm:mb-0">
        Showing {region[0] + 1}-{region[1] + region[0]}
      </div>

      <PokeSort setSort={setSort} sort={sort} />
    </motion.div>
  );
}

export default PokedexSort;
