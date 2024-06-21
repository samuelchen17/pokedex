const MAX_POKEMON = 1302;
const KANTO = 151;

const POKE_BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=${KANTO}&offset=0`;

let pokemons = [];

// modify to allow for different regions
const getPokemon = () => {
  fetch(POKE_BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      pokemons = data.results;
      console.log(data.results);
    });
};

export { getPokemon };

// url for all pokemon
// https://pokeapi.co/api/v2/pokemon?limit=151&offset=0

// url for small image
// https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png
// big image
// https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png

// either write an algorithm to calc weaknesses or check api
