# Poke Web Handbook

## Video Demo:

## Live site Demo: https://poke-web-handbook.vercel.app/

## Description:

### What is Poke Web Handbook?

It is essentially a pokedex (A pokemon encyclopedia) covering generations 1 through 6. It provides the user with an overview of all the pokemon, the user can also click a pokemon to see more detailed information such as it's type, description, height, weight, genus, stats, weaknesses, resistances, immunities, evolution chain and an audio of the pokemon's cry. It also has the functionality to search for different regions, favourites section, search and sort. The UI is designed to be user friendly with responsive design (works in mobile). The app leverages the pokemon API to dynamically fetch and display detailed pokemon data. The app is developed using React, HTML, javaScript and Tailwind CSS.

### What each file does

This contains all the code to fetch the pokemon information from the pokemon API (https://pokeapi.co/), It navigates through the api to grab relevant information to display to the user. There are multiple functions inside this file which I will quickly summarise:

- getPokemon: This will get the pokemon api urls for each pokemon.
- getPokemonInfo: This will grab basic information such as name, id and type for each pokemon to display on the main display.
- getPokemonDetail: This function will get detailed information based on the pokemon id for the poke modal pop up.
- getTypeDamageRelation: This function will get the type relationship for the selected pokemon.
- getSusceptibility: This function calculates the immunities, resistances and weaknesses based on the type relationship from the previous function.
- getEnGenus: This function just fetches the genus of the pokemon for the detailed information section.
- getEnAboutText: This function fetches the about section for the pokemon selected.

### /src/components/design

The files inside this folder are mainly just designs for parts of the UI that are reused in different parts of the project. Includes the pearls on the top left corner which is used in the main pokedex and modal. The region button which is duplicated for each region and takes in the custom colours of each region. There is the TypePill to display the pokemon type and they respective colours.

### /src/components/modal

The files in this folder are all for the popup when a pokemon is clicked to display detailed information about that pokemon to the user. The design choice was to simulate a pokedex, providing user friendly UI and intuitive navigation and controls. There was also a large focus on responsive design so that it works on all screen sizes.

- PokeModal.jsx: This is the main component that houses all the sub components to display the information and provide functionality. The pokemon information fetched from the API is stored in a useState. This file also conditionally renders a loading screen while the data is loading. Uses, useEffect to load the pokemon data once fetched using async await.
- PokeStats.jsx: This file displays the each of the stats of the selected pokemon, displays it in a bar graph format and also calculates the combined stat total.
- PokeNameNumType.jsx: This component displays the name, the national pokedex number and type of the selected pokemon.
- PokeModalNavBar.jsx: This component is the nav-bar for the modal, contains some design elements and houses the close modal button, next and previous pokemon button.
- PokeImg.jsx: This component houses the image of the selected pokemon and a sound button to play the pokemon's sound to the user. It also has the favourites button here where user's can add to remove the selected pokemon to their favourites list.
- PokeBio.jsx: This component displays the pokemon's height, weight and genus fetched from the api to the user.
- PokeAboutText.jsx: This component displays the pokemons about section fetched from the API.
- Susceptibility.jsx: This component houses the SuscepComponents.
- SuscepComponent.jsx: This component is a reuseable component that is used to display the pokemon's weaknesses, resistances and immunities based on what information is passed in from the parent component.
- ModalEvo.jsx: This component displays the evolution chain of the selected pokemon. The user can click on any of the evolutions and be directed to that pokemon's pokedex entry. The sprites of the pokemon was used here to mimic how it would look in games. When an evolution is clicked, it will scroll back to the top of the modal to provide the user with better user experience.

### /src/components/nav-bar

This folder housed all the components for the main pokedex nav bar, This includes the search bar and the button to select what region's pokemon to display.

- NavBar.jsx: This file houses the design elements of the pokedex, uses some of the files from the design folder and contains the button to allow a user to change the region and search for a pokemon.
- Region.jsx: This file houses the information for each region such as the name of the region, the range of pokemon and design colour of each region. It is built with scalability in mind. It displays the buttons that allow for different region selection.
- Search.jsx: This just displays the search bar, the functionality of the search bar is in another file, the search parameters are stored in a useState which is passed down from a parent component.

### /src/components/poke-card/PokeCard.jsx

This file is a reuseable component that displays basic pokemon information such as the favourite status, national pokedex entry, image, name, and types. The design choice here was to mimic the pokemon trading card game as well as the in game display of pokemons. There is also a bounce effect when hovering to provide user's more visual feedback and interactivity.

### /src/components/pokedex

This folder contains all the files for the main pokedex

- Pokedex.jsx: This file houses all the components for the pokedex, it is essentially the homepage. There is a button that scrolls to the top to help improve user navigation experience. It also contains the code to search for pokemon by name or ID and updates the UI immediately by filtering pokemon that match the search. Also uses useEffect to update the pokemon data based on the data fetched by the API. It is also the parent file that houses most of the useStates that is passed down into the child components.
- PokedexBoard.jsx: This component houses board that displays the user's favourites and also all the pokemon cards. This is essentially the "main" of the app. It contains the logic to store favourted pokemon into local storage and the logic to open the pokemodal. There is also a loading icon while the pokemons load to provide a better user experience. It also contains code to update the favourites bar live when a user interacts with the favourites feature. It uses .map to render all the favourites and pokemon cards.
- PokedexSort.jsx: This file houses the pokesort component and also displays the range of currently displayed pokemon.
- PokeFav.jsx: This file is reused to display the favourites card and also can be clicked to open the pokemodal. Provides basic information such as the pokemon name, number and sprite. Has a hover bounce effect for better UX.
- PokeSort.jsx: This file displays the sort button. Can sort numerically or alphabetically.

### /src/components/ImgRetry.jsx

This file is contains logic that is used to wrap every image that is rendered. It displays a loading screen while the image is loading and contains the logic to reload the image a set number of times in case images fail to load initially. This was implemented to ensure that images would successfully render even with bad internet.

### /src/components/functions/sort.js

This file contains the sort sort logic to sort pokemons either numerically by their national pokedex number of alphabetically.
