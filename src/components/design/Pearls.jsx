import React from "react";
import Pearl from "./Pearl";

const colours = [
  { outer: "red-400", inner: "red-700", core: "white" },
  { outer: "yellow-400", inner: "yellow-700", core: "white" },
  { outer: "green-400", inner: "green-700", core: "white" },
];

function Pearls() {
  return (
    <div className="flex flex-row my-3 mx-3">
      <div className="h-[60px] w-[60px]">
        <div className="flex justify-center items-center h-full w-full bg-white rounded-full outline">
          <div className="h-[87%] w-[87%] bg-blue-400 rounded-full outline overflow-hidden">
            <div className="h-[95%] w-[95%] left-[7%] top-[7%] bg-blue-600 rounded-full relative">
              <div className="h-[50%] w-[50%] left-[5%] top-[5%] bg-blue-400 rounded-full relative">
                <div className="left-[15%] top-[15%] h-[40%] w-[40%] bg-blue-100 rounded-full relative"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-2">
        {colours.map((colour, index) => (
          <Pearl colour={colour} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Pearls;
