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
import { getFavFromApi } from "../../../services/pokeApi";

function PokedexBoard({ loading, sortedPokemons }) {
  // this will store an array of ids
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites") || "[]")
  );
  const getFavourites = () => {
    return JSON.parse(localStorage.getItem("favourites") || "[]");
  };

  useEffect(() => {
    const grabFav = () => {
      const fav = JSON.parse(localStorage.getItem("favourites") || "[]");
      if (fav) {
        setFavourites(fav);
        console.log("hello");
      }
    };

    grabFav();

    window.addEventListener("storage", grabFav);

    return () => {
      window.removeEventListener("storage", grabFav);
    };
  }, []);

  // useEffect(() => {
  //   const favouriteIds = getFavourites();
  //   const favouritePokemons = sortedPokemons.filter((pokemon) =>
  //     favouriteIds.includes(pokemon.id)
  //   );
  //   setFavourites(favouritePokemons);
  // }, [sortedPokemons]);

  return (
    <div className="outline bg-white rounded-xl py-4 px-4">
      <div className="mx-2 mb-2 outline rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center overflow-hidden overflow-y-scroll">
          {loading ? (
            // add a spinning circle?
            <div>Loading...</div>
          ) : (
            // map favourites and grab detail using api
            favourites.map((id, index) => {
              const paddedId = id.toString().padStart(3, "0");
              return (
                <img
                  key={index}
                  src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${paddedId}.png`}
                />
              );
            })
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
