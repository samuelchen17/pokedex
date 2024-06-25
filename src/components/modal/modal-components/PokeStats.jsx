import React from "react";

const statNameShort = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "Sp.ATK",
  "special-defense": "Sp.DEF",
  speed: "SPD",
};

function PokeStats({ stats }) {
  return (
    <div className="w-full">
      <span>stats</span>
      {stats.map((stat, index) => {
        const statValue = (stat.base_stat / 255) * 100;
        return (
          <div key={index} className="flex flex-row items-center">
            {/* conditional render here base on screen size? */}
            <div className="w-[15%]">{statNameShort[stat.stat.name]}</div>
            <div className="bg-gray-400 w-full h-2.5 rounded-full">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${statValue}%` }}
              ></div>
            </div>
            <div className="w-[15%]">{stat.base_stat}</div>
          </div>
        );
      })}
    </div>
  );
}

export default PokeStats;
