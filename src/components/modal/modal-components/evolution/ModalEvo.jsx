import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoArrowDown } from "react-icons/go";

// recursive rendering of evolution
//

function ModalEvo({ evoUrl, setSelectedPokemon, scrollToTop }) {
  const [evolutionChain, setEvolutionChain] = useState(null);

  const onClick = (evoChain) => {
    const id = evoChain.species.url.split("/")[6];
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
      <div className="flex flex-col justify-center items-center">
        <div
          className="flex justify-center flex-col w-[100px] sms:w-[150px] md:w-[200px] outline outline-blue-500"
          onClick={() => onClick(evoChain)}
        >
          <div className="relative h-[100px]">
            <img
              className="absolute top-[-64px] left-0 w-full h-[150px] object-cover"
              src={`https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen7x/regular/${evoChain.species.name}.png`}
              alt={`${evoChain.species.name} sprite`}
              style={{
                imageRendering: "pixelated",
              }}
            />
          </div>
          <div className="text-center">{evoChain.species.name}</div>
        </div>
        {evoChain.evolves_to.length > 0 && (
          <div className="flex flex-col items-center">
            <GoArrowDown className="outline" />
            <div className="flex flex-row w-full outline flex-wrap justify-center items-center">
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
    <div className="outline rounded-xl my-4 mx-4">
      <div className="text-center bg-red-500 rounded-t-xl">Evolution</div>
      <div className="flex justify-center">
        {evolutionChain ? renderEvolutions(evolutionChain) : "Loading..."}
      </div>
    </div>
  );
}

export default ModalEvo;
