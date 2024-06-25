import React, { useState, useEffect } from "react";
import TypePill from "./TypePill";
import { getPokemonDetail } from "../../services/pokeApi";

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
  };

  return (
    <div
      className="fixed bg-slate-900 bg-opacity-50 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={(event) => event.stopPropagation()}
    >
      {loading ? (
        <div className="text-white">Loading ...</div>
      ) : (
        <div className="px-20 py-20 bg-blue-500">
          <div
            className="bg-slate-200 max-w-[600px] mx-6 outline-dashed outline-green-500"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-row justify-between text-white">
              <div
                className="cursor-pointer outline-dashed w-[50%] bg-slate-600 rounded-xl"
                onClick={() => handleOnClick(-1)}
              >
                Prev
              </div>
              <div className="cursor-pointer" onClick={() => handleOnClick(1)}>
                Next
              </div>
            </div>
            <div className="flex justify-end" onClick={onClose}>
              cross
            </div>
            <div className="text-center capitalize">
              {pokemonDetail.name} #{paddedId}
            </div>
            <div className="flex justify-center">
              <div className="flex flex-row justify-center gap-8 w-[50%]">
                {pokemonDetail.type.map((type, index) => (
                  <TypePill key={index} type={type.type.name} />
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <img
                className="max-w-[60%]"
                src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${paddedId}.png`}
              />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span>height</span>
                <span>{pokemonDetail.height} m</span>
              </div>
              <div className="flex flex-col">
                <span>Weight</span>
                <span>{pokemonDetail.weight} kg</span>
              </div>
              <div className="flex flex-col">
                <span>Category</span>
                <span>Lizard</span>
              </div>
            </div>
            <div>About</div>
            <div>
              fajkl fjlekwa jflkseajlf jewlaj fleaw jflawj fiowj
              lfiwjalijfdsfsdf sd sdfs dfsd fsd
            </div>
            <div>
              <span>stats</span>
              {pokemonDetail.stats.map((stat, index) => (
                <div className="flex flex-row" key={index}>
                  {/* conditional render here base on screen size? */}
                  <p>{stat.stat.name}</p>
                  <progress value={stat.base_stat} max="255" />
                </div>
              ))}
            </div>
            <div>sound icon</div>
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
