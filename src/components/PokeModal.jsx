import React, { useState, useEffect } from "react";
import TypePill from "./TypePill";
import { getPokemonDetail } from "../../services/pokeApi";

function PokeModal({ pokemonId, onClose, paddedId }) {
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokeDetail = async () => {
      try {
        const pokeDet = await getPokemonDetail(pokemonId);
        console.log(pokeDet);
        setPokemonDetail(pokeDet);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchPokeDetail();
  }, [pokemonId]);

  return (
    <div
      className="fixed bg-slate-900 bg-opacity-50 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={(event) => event.stopPropagation()}
    >
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div
          className="bg-slate-200 max-w-[600px] mx-6 outline-dashed outline-green-500"
          onClick={(event) => event.stopPropagation()}
        >
          <div onClick={onClose}>cross</div>
          <div className="flex flex-row justify-between">
            <div>Prev</div>
            <div>Next</div>
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
              <span>32</span>
            </div>
            <div className="flex flex-col">
              <span>Weight</span>
              <span>3532</span>
            </div>
            <div className="flex flex-col">
              <span>Category</span>
              <span>Lizard</span>
            </div>
          </div>
          <div>About</div>
          <div>
            fajkl fjlekwa jflkseajlf jewlaj fleaw jflawj fiowj lfiwjalijfdsfsdf
            sd sdfs dfsd fsd
          </div>
          <div>
            {/* use .map to generate the stats */}
            <span>stats</span>
            <div className="flex flex-row">
              <p>HP</p>
              <progress value="100" max="255"></progress>
            </div>
            <div className="flex flex-row">
              <p>HP</p>
              <progress value="100" max="255"></progress>
            </div>
            <div className="flex flex-row">
              <p>HP</p>
              <progress value="100" max="255"></progress>
            </div>
            <div className="flex flex-row">
              <p>HP</p>
              <progress value="100" max="255"></progress>
            </div>
            <div className="flex flex-row">
              <p>HP</p>
              <progress value="100" max="255"></progress>
            </div>
          </div>
          <div>sound icon</div>
        </div>
      )}
    </div>
  );
}

export default PokeModal;

// make it so stats is a .map
// set correct loading
// figure out why there is two undefined when clicked? maybe because the console.log
// is being executed before data is here
