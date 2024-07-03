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
    <div className="outline my-4 sms:mx-4 sms:rounded-xl bg-slate-200">
      <div className="bg-red-700 text-white sms:rounded-t-xl text-center mb-2 py-1">
        stats
      </div>
      {stats.map((stat, index) => {
        const statValue = (stat.base_stat / 255) * 100;
        statTotal += stat.base_stat;
        return (
          <div key={index} className="">
            <div className="flex justify-between py-1">
              <div className="ml-4">{statNameShort[stat.stat.name]}</div>
              <div className="mr-4">{stat.base_stat}</div>
            </div>
            <div className="bg-gray-400 h-2.5 rounded-full mx-4">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${statValue}%` }}
              ></div>
            </div>
          </div>
        );
      })}
      <div className="w-full pl-4 py-2 mb-2 font-bold">
        Stat Total: {statTotal}
      </div>
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
