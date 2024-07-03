import React, { useState, useEffect, useRef } from "react";
import { getPokemonDetail } from "../../../services/pokeApi";
import PokeStats from "./modal-components/PokeStats";

import PokeNameNumType from "./modal-components/PokeNameNumType";
import PokeBio from "./modal-components/PokeBio";
import PokeImg from "./modal-components/PokeImg";
import PokeModalNavBar from "./modal-components/PokeModalNavBar";
import PokeAboutText from "./modal-components/PokeAboutText";
import Susceptibility from "./modal-components/susceptibility/Susceptibility";
import ModalEvo from "./modal-components/evolution/ModalEvo";

function PokeModal({
  pokeId,
  onClose,
  handleAddFavourite,
  isFavourite,
  setSelectedPokemon,
}) {
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const contentRef = useRef(null);

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
    if (pokeId + increment < 1) {
      setSelectedPokemon(721);
    } else if (pokeId + increment > 721) {
      setSelectedPokemon(1);
    } else {
      setSelectedPokemon(pokeId + increment);
    }

    // if less than region[0] or more than region[1]
    // if more than display 54 - x do nothing
    // or make it loop to the biggest and vice versa
  };

  const playSound = (event) => {
    event.stopPropagation();
    const audio = new Audio(pokemonDetail.cry);
    audio.play();
  };

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
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
          className={`overflow-hidden bg-red-500 max-w-[700px] sm:mx-6 sms:px-4 rounded-xl h-[100vh] xl:h-[95%] relative outline`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="">
            <PokeModalNavBar handleOnClick={handleOnClick} onClose={onClose} />
          </div>
          <div
            className="bg-white rounded-xl overflow-y-auto overscroll-none outline relative h-[90%] pb-[50px]"
            ref={contentRef}
          >
            <PokeNameNumType
              pokemonDetail={pokemonDetail}
              paddedId={paddedId}
            />

            <PokeImg
              pokemonDetail={pokemonDetail}
              paddedId={paddedId}
              playSound={playSound}
              handleAddFavourite={handleAddFavourite}
              isFavourite={isFavourite}
            />
            <PokeAboutText pokemonDetail={pokemonDetail} />
            <PokeBio pokemonDetail={pokemonDetail} />
            <PokeStats stats={pokemonDetail.stats} />
            <Susceptibility susceptibility={pokemonDetail.susceptibility} />
            <ModalEvo
              evoUrl={pokemonDetail.evo}
              setSelectedPokemon={setSelectedPokemon}
              scrollToTop={scrollToTop}
            />
          </div>
        </div>
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
