import React, { useState, useEffect } from "react";
import { getPokemonDetail } from "../../../services/pokeApi";
import PokeStats from "./modal-components/PokeStats";
import NextPrev from "./modal-components/NextPrev";
import PokeNameNumType from "./modal-components/PokeNameNumType";
import PokeBio from "./modal-components/PokeBio";
import PokeImg from "./modal-components/PokeImg";

function PokeModal({ pokemonId, onClose }) {
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [pokeId, setPokeId] = useState(pokemonId);

  const paddedId = pokeId.toString().padStart(3, "0");
  let statTotal = 0;

  useEffect(() => {
    const fetchPokeDetail = async () => {
      try {
        const pokeDet = await getPokemonDetail(pokeId);
        setPokemonDetail(pokeDet);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchPokeDetail();
  }, [pokeId]);

  const handleOnClick = (increment) => {
    setPokeId(pokeId + increment);
    // if less than 0 do nothing
    // if more than display 54 - x do nothing
    // or make it loop to the biggest and vice versa
  };

  return (
    <div
      className="fixed bg-slate-900 bg-opacity-50 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={(event) => event.stopPropagation()}
    >
      {loading ? (
        <div className="text-white">Loading ...</div>
      ) : (
        <div
          className={`bg-red-500 max-w-[600px] sm:mx-6 sms:px-10 rounded-xl max-h-[95vh] overflow-y-auto outline`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex justify-end my-2" onClick={onClose}>
            cross
          </div>

          <NextPrev handleOnClick={handleOnClick} />
          <PokeNameNumType pokemonDetail={pokemonDetail} paddedId={paddedId} />

          <PokeImg pokemonDetail={pokemonDetail} paddedId={paddedId} />
          <PokeBio pokemonDetail={pokemonDetail} />
          <div>About</div>
          <div>
            fajkl fjlekwa jflkseajlf jewlaj fleaw jflawj fiowj lfiwjalijfdsfsdf
            sd sdfs dfsd fsd
          </div>
          <PokeStats stats={pokemonDetail.stats} />
          <div>sound icon</div>
        </div>
        // </div>
      )}
    </div>
  );
}

export default PokeModal;

// fix the enxt and prev, need to implement region search and search range
// add stat total
// add the sound when clicked
// add abilities and weaknesses?
// stat name conditional render?

// add stat abbre for smaller screens
// at the number at the end, make the gaps even

// add icons to height and weight

// add box shadows and hover effects

// background colour is a transition of both types

// add stat total
// make prev and next arrows or add arrows
