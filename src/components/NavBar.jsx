import React from "react";

function NavBar() {
  return (
    <div className="flex flex-col outline-dotted outline-green-600">
      <div className="bg-red-600 flex flex-row h-16">
        <div className="h-[60px] w-[60px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png" />
        </div>
        <h1 className="text-4xl">Pokedex</h1>
      </div>
      <div className="flex flex-row outline-dashed outline-lime-500">
        <div className="h-[50px] w-[50px] bg-red-600"></div>
        <div className="h-[50px] w-[50px] bg-red-600">hello</div>
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
