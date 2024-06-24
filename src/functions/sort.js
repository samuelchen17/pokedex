// sort pokemons
export const sortPokemons = (pokemons, sort) => {
  const sortedPokemons = [...pokemons];
  if (sort === "a-z") {
    return sortedPokemons.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "z-a") {
    return sortedPokemons.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sort === "highNumFirst") {
    return sortedPokemons.sort((a, b) => b.id - a.id);
  } else if (sort === "lowNumFirst") {
    return sortedPokemons.sort((a, b) => a.id - b.id);
  }
};
