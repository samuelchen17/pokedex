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
  let statTotal = 0;
  return (
    <div className="outline my-4 sms:mx-4 py-2 px-2 sms:rounded-xl bg-slate-200">
      <span>stats</span>
      {stats.map((stat, index) => {
        const statValue = (stat.base_stat / 255) * 100;
        statTotal += stat.base_stat;
        return (
          <div key={index} className="">
            <div className="flex justify-between pb-1">
              <span className="">{statNameShort[stat.stat.name]}</span>
              <span className="">{stat.base_stat}</span>
            </div>
            <div className="bg-gray-400 h-2.5 rounded-full">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${statValue}%` }}
              ></div>
            </div>
          </div>
        );
      })}
      <div className="w-[15%]">Stat Total: {statTotal}</div>
    </div>
  );
}

export default PokeStats;
{
  /* <div class="flex justify-between mb-1">
  <span class="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
  <span class="text-sm font-medium text-blue-700 dark:text-white">45%</span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
</div> */
}
