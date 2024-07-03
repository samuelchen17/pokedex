import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoArrowDown } from "react-icons/go";

// recursive rendering of evolution
//

function ModalEvo({ evoUrl, setSelectedPokemon, scrollToTop }) {
  const [evolutionChain, setEvolutionChain] = useState(null);

  const onClick = (evoChain) => {
    const id = parseInt(evoChain.species.url.split("/")[6], 10);
    setSelectedPokemon(id);
    scrollToTop();
  };

  useEffect(() => {
    const getEvoData = async (url) => {
      try {
        const response = await axios.get(url);
        setEvolutionChain(response.data.chain);
      } catch (error) {
        console.error("Error fetching evolution data:", error);
      }
    };

    if (evoUrl) {
      getEvoData(evoUrl);
    }
  }, [evoUrl]);

  // recursively render the evolution chain?
  //
  const renderEvolutions = (evoChain) => {
    if (!evoChain) return null;

    return (
      <div className="flex flex-col justify-center items-center pb-3 bg-slate-200 w-full">
        <div
          className="flex justify-center flex-col w-[200px] sms:w-[200px] md:w-[200px] cursor-pointer"
          onClick={() => onClick(evoChain)}
        >
          <div className="relative h-[100px]">
            <img
              className="absolute w-full left-0 h-[100%] object-cover object-bottom"
              src={`https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen7x/regular/${evoChain.species.name}.png`}
              alt={`${evoChain.species.name} sprite`}
              style={{
                imageRendering: "pixelated",
              }}
            />
          </div>
          <div className="text-center capitalize">{evoChain.species.name}</div>
        </div>
        {evoChain.evolves_to.length > 0 && (
          <div className="flex flex-col items-center">
            <div className="pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
            </div>

            <div className="flex flex-row w-full flex-wrap justify-center items-center">
              {evoChain.evolves_to.map((evolution, index) => (
                <div key={index}>
                  <div>{renderEvolutions(evolution)}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="outline sms:rounded-xl my-4 sms:mx-4">
      <div className="bg-red-700 text-white sms:rounded-t-xl text-center py-1">
        Evolution
      </div>
      <div className="flex justify-center">
        {evolutionChain ? renderEvolutions(evolutionChain) : "Loading..."}
      </div>
    </div>
  );
}

export default ModalEvo;
