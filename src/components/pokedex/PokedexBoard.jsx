// import React from "react";
// import PokeCard from "../PokeCard";

// function PokedexBoard({ loading, sortedPokemons }) {
//   return (
//     <div className="outline bg-white rounded-xl py-4 px-4 ">
//       <div className="mx-2 mb-2 outline rounded-xl">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center overflow-hidden overflow-y-scroll">
//           {loading ? (
//             // add a spinning circle?
//             <div>Loading...</div>
//           ) : (
//             favourites.map((pokemon) => (
//               <PokeCard key={pokemon.id} pokemon={pokemon} />
//             ))
//           )}
//         </div>
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center overflow-hidden overflow-y-scroll">
//         {loading ? (
//           // add a spinning circle?
//           <div>Loading...</div>
//         ) : (
//           sortedPokemons.map((pokemon) => (
//             <PokeCard key={pokemon.id} pokemon={pokemon} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default PokedexBoard;

import React, { useEffect, useState } from "react";
import PokeCard from "../PokeCard";

const getFavourites = () => {
  return JSON.parse(localStorage.getItem("favourites") || "[]");
};

function PokedexBoard({ loading, sortedPokemons }) {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favouriteIds = getFavourites();
    const favouritePokemons = sortedPokemons.filter((pokemon) =>
      favouriteIds.includes(pokemon.id)
    );
    setFavourites(favouritePokemons);
  }, [sortedPokemons]);

  const getFavourites = () => {
    return JSON.parse(localStorage.getItem("favourites") || "[]");
  };

  // test it out
  useEffect(() => {
    window.addEventListener("storage", () => {
      setFavourites(JSON.parse(localStorage.getItem("favourites")) || []);
    });
  }, [favourites]);

  console.log(favourites);

  return (
    <div className="outline bg-white rounded-xl py-4 px-4">
      <div className="mx-2 mb-2 outline rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center overflow-hidden overflow-y-scroll">
          {loading ? (
            // add a spinning circle?
            <div>Loading...</div>
          ) : (
            favourites.map((pokemon) => (
              <PokeCard key={pokemon.id} pokemon={pokemon} />
            ))
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center overflow-hidden overflow-y-scroll">
        {loading ? (
          // add a spinning circle?
          <div>Loading...</div>
        ) : (
          sortedPokemons.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))
        )}
      </div>
    </div>
  );
}

export default PokedexBoard;

// favourites
// when clicked i want to save it to local Storage,
// when local storage changes i want the favourites panel to change dynamically

// use custom hook
