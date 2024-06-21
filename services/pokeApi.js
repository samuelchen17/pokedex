const MAX_POKEMON = 1302;
const KANTO = 10;

const POKE_BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=${KANTO}&offset=0`;
const POKE_IMG_SM = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png`;
const POKE_IMG_LG = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png`;

// list of objects containing name, number, type
let pokemons = [];

let allPokemons = [];
// modify to allow for different regions
const getPokemon = async () => {
  fetch(POKE_BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      const pokemonUrls = data.results.map((pokemon) => pokemon.url);

      pokemonUrls.forEach((url) => {
        // go to each url and grab relavant info
        pokemons.map(getPokemonInfo(url));
        console.log(pokemons);
      });
      //   const allPokemons = getPokemonInfo(data.results);
    });
};

// for each pokemon, grab the url, go to url and extract relavant information
// should return objects or a list of objects
const getPokemonInfo = (url) => {
  try {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let pokeInfo = {
          name: data.name,
          id: data.id,
          type: data.types,
        };
        // console.log(pokeInfo);
        return { pokeInfo };
      });
  } catch {
    console.log("error getting pokemon data");
  }
};

const displayPokemon = () => {};

// // wait for this function to complete before proceeding
// const awaitPokemonData = async () => {
//     try {
//         const [pokemon, pokemonId] = await
//     }
// };

export { getPokemon };

// get all the type colours from pokemon
// const typeColours = {}

// url for all pokemon
// https://pokeapi.co/api/v2/pokemon?limit=151&offset=0

// url for small image
// https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png
// big image
// https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png

// either write an algorithm to calc weaknesses or check api

// if user input is a number or text
