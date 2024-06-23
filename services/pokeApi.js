const MAX_POKEMON = 1302;
const KANTO = 9;

const POKE_BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=${KANTO}&offset=0`;
const POKE_IMG_SM = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png`;
const POKE_IMG_LG = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png`;

// list of objects containing name, number, type
let pokemons = [];

// modify to allow for different regions
const getPokemon = async () => {
  try {
    const res = await fetch(POKE_BASE_URL);
    const data = await res.json();
    const pokemonUrls = data.results.map((pokemon) => pokemon.url);

    pokemons = await Promise.all(pokemonUrls.map(getPokemonInfo));
    // console.log(pokemons[4].name);
    return pokemons;
  } catch {
    console.log("error getting pokemon list");
  }
};

// for each pokemon, grab the url, go to url and extract relavant information
// should return objects or a list of objects
const getPokemonInfo = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return {
      name: data.name,
      id: data.id,
      type: data.types,
    };
  } catch {
    console.log("error getting pokemon data");
  }
};

// // wait for this function to complete before proceeding
// const awaitPokemonData = async () => {
//     try {
//         const [pokemon, pokemonId] = await
//     }
// };

export { getPokemon };

// get all the type colours from pokemon
const typeColours = {};

// url for all pokemon
// https://pokeapi.co/api/v2/pokemon?limit=151&offset=0

// url for small image
// https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png
// big image
// https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png

// either write an algorithm to calc weaknesses or check api

// if user input is a number or text
