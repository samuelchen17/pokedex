const MAX_POKEMON = 1302;
const KANTO = [0, 151];
const JOHTO = [151, 100];
// const HOENN = 252 - 386
// const SINNOH = 387 - 493
// const UNOVA = 494 - 649
// const KALOS = 650 - 721

const test = [0, 20];

const POKE_BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=${test[1]}&offset=${test[0]}`;
const POKE_IMG_SM = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png`;
const POKE_IMG_LG = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png`;

// modify to allow for different regions
const getPokemon = async () => {
  let pokemons = [];
  try {
    const data = await fetch(POKE_BASE_URL).then((res) => res.json());
    // const res = await fetch(POKE_BASE_URL);
    // const data = await res.json();
    const pokemonUrls = data.results.map((pokemon) => pokemon.url);

    pokemons = await Promise.all(pokemonUrls.map(getPokemonInfo));
    // console.log(pokemons[4].name);
    return pokemons;
  } catch (err) {
    console.log("error getting pokemon list", err);
  }
};

// for each pokemon, grab the url, go to url and extract relavant information
// should return objects or a list of objects
const getPokemonInfo = async (url) => {
  try {
    const data = await fetch(url).then((res) => res.json());
    // const res = await fetch(url);
    // const data = await res.json();
    return {
      name: data.name,
      id: data.id,
      type: data.types,
    };
  } catch (err) {
    console.log("error getting pokemon data", err);
  }
};

// for getting stats etc. of pokemon
// grab the pokemon by id from front end
const getPokemonDetail = async (id) => {
  try {
    // const [pokeDetails, pokeSpecies] = await Promise.all([]);

    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(
      (res) => res.json()
    );
    // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    // const data = await res.json();
    const pokeDetails = {
      name: data.name,
      id: data.id,
      type: data.types,
      height: data.height / 10,
      weight: data.weight / 10,
      stats: data.stats,
    };
    console.log(pokeDetails);
    return pokeDetails;
  } catch (err) {
    console.log("error getting pokemon details", err);
  }
};

export { getPokemon, getPokemonDetail };

// url for all pokemon
// https://pokeapi.co/api/v2/pokemon?limit=151&offset=0

// url for small image
// https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png
// big image
// https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png

// either write an algorithm to calc weaknesses or check api

// if user input is a number or text
