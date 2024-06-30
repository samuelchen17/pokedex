import React from "react";
import Pearls from "../../design/Pearls";

function PokeModalNavBar({ handleOnClick, onClose }) {
  return (
    <div className="flex justify-between">
      <Pearls />
      <div className="flex flex-col w-full items-end justify-between py-3">
        <div className="flex justify-end cursor-pointer" onClick={onClose}>
          [x]
        </div>
        <div className="flex justify-end sms:w-[60%] w-full">
          <div className="flex flex-row justify-between h-full text-center w-[100%]">
            <div
              className="flex outline items-center justify-center cursor-pointer shadow-lg w-[45%] bg-slate-500 rounded-xl"
              onClick={() => handleOnClick(-1)}
            >
              <p className="text-white">Prev</p>
            </div>
            <div
              className="flex outline items-center justify-center cursor-pointer shadow-lg w-[45%] bg-slate-500 sms:rounded-xl rounded-l-xl"
              onClick={() => handleOnClick(1)}
            >
              <p className="text-white">Next</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeModalNavBar;
