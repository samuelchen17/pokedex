import axios from "axios";

// const POKE_BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=${test[1]}&offset=${test[0]}`;
const POKE_IMG_SM = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png`;
const POKE_IMG_LG = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png`;
const EVO = "https://pokeapi.co/api/v2/evolution-chain/2/";
const SPES = "https://pokeapi.co/api/v2/pokemon-species/5";

// modify to allow for different regions
const getPokemon = async (region) => {
  let pokemons = [];
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${region[1]}&offset=${region[0]}`
    );
    const data = res.data;
    const pokemonUrls = data.results.map((pokemon) => pokemon.url);

    console.log(data);

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
    const res = await axios.get(url);
    const data = res.data;
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
    const [pokeAboutData, pokeSpecieData] = await axios.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`),
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`),
    ]);
    const pokeAbout = pokeAboutData.data;
    const pokeSpecie = pokeSpecieData.data;

    const genus = getEnGenus(pokeSpecie);
    const aboutText = getEnAboutText(pokeSpecie);

    const typesUrl = pokeAbout.types.map((type) => type.type.url);
    const susceptibility = await getSusceptibility(typesUrl);

    const pokeDetails = {
      name: pokeAbout.name,
      id: pokeAbout.id,
      type: pokeAbout.types,
      height: pokeAbout.height / 10,
      weight: pokeAbout.weight / 10,
      stats: pokeAbout.stats,
      genus: genus,
      aboutText: aboutText,
      cry: pokeAbout.cries.latest,
      susceptibility: susceptibility,
      evo: pokeSpecie.evolution_chain.url,
    };

    // console.log(pokeDetails);

    return pokeDetails;
  } catch (err) {
    console.log("error getting pokemon details", err);
  }
};

const getTypeDamageRelation = async (typeUrl) => {
  try {
    const res = await axios.get(typeUrl);
    const data = res.data;
    // console.log(data.damage_relations);
    return data.damage_relations;
  } catch (err) {
    console.log("error getting type  effectiveness", err);
  }
};

const getSusceptibility = async (typesUrl) => {
  const typeDamageRelations = await Promise.all(
    typesUrl.map(getTypeDamageRelation)
  );
  const weaknesses = {};
  const resistances = {};
  const immunity = {};
  typeDamageRelations.forEach((damageRel) => {
    damageRel.double_damage_from.forEach((type) => {
      if (!weaknesses[type.name]) {
        weaknesses[type.name] = 2;
      } else {
        weaknesses[type.name] *= 2;
      }
    });
  });
  typeDamageRelations.forEach((damageRel) => {
    damageRel.half_damage_from.forEach((type) => {
      if (weaknesses[type.name]) {
        delete weaknesses[type.name];
      } else {
        resistances[type.name] = 0.5;
      }
    });
  });
  typeDamageRelations.forEach((damageRel) => {
    damageRel.no_damage_from.forEach((type) => {
      if (weaknesses[type.name]) {
        delete weaknesses[type.name];
      }
      immunity[type.name] = 0;
    });
  });
  const susceptibility = {
    weaknesses,
    resistances,
    immunity,
  };
  // console.log("susceptibility", susceptibility);
  return susceptibility;
};

const getEnGenus = (pokeSpecie) => {
  for (const entry of pokeSpecie.genera) {
    if (entry.language.name === "en") {
      return entry.genus.replace(/ Pokémon$/, "");
    }
  }
  return null;
};

const getEnAboutText = (pokeSpecie) => {
  for (const entry of pokeSpecie.flavor_text_entries) {
    if (entry.language.name === "en" && entry.version.name === "x") {
      return entry.flavor_text;
    }
  }
  return null;
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

// const MAX_POKEMON = 1302;
// const KANTO = [0, 151];
// const JOHTO = [151, 100];
// const HOENN = 252 - 386;
// const SINNOH = 387 - 493;
// const UNOVA = 494 - 649;
// const KALOS = 650 - 721;
// const test = [0, 20];
