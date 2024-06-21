import React from "react";

function NavBar() {
  return (
    <div className="bg-red-600 flex flex-row h-16">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png" />
      <div className="flex flex-col">
        <h1>Pokedex</h1>
        <input
          className="outline-emerald-500 border border-red-500"
          type="text"
          placeholder="Search for Pokemon"
        />
      </div>
    </div>
  );
}

export default NavBar;
