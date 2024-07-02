import React, { useEffect, useState } from "react";
import { getPokemonDetail } from "../../../services/pokeApi";

function PokeFav({ id, handleAddFavourite, isFavourite, onClick }) {
  const paddedId = id.toString().padStart(3, "0");
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const handleFavClick = (event) => {
    event.stopPropagation();
    handleAddFavourite(id);
  };

  // add use effect to get name of pokemon
  // write a new api to get only name of pokemon

  useEffect(() => {
    const fetchPokeDetail = async () => {
      try {
        const pokeDetail = await getPokemonDetail(id);
        setPokemonDetail(pokeDetail);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchPokeDetail();
  }, [id]);

  return (
    <div
      className="hover:animate-bounceOnce bg-red-500 outline cursor-pointer rounded-xl py-2 px-2 my-2 mx-2 max-w-[150px]"
      onClick={onClick}
    >
      {loading ? (
        // add a spinning circle?
        <div>Loading...</div>
      ) : (
        <>
          <div className="rounded-xl outline bg-slate-100">
            <div className="flex justify-between">
              <div className="pl-2 pt-1">#{paddedId}</div>
              <div onClick={handleFavClick} className="">
                {isFavourite ? "★" : "☆"}
              </div>
            </div>
            <div className="relative w-[100px] h-[85px] overflow-hidden">
              <img
                className="absolute top-[-64px] left-0 w-full h-[150px] object-cover"
                src={`https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen7x/regular/${pokemonDetail.name}.png`}
                alt={`${pokemonDetail.name} sprite`}
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <div className="text-center capitalize">{pokemonDetail.name}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default PokeFav;
