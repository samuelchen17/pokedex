import React from "react";

function PokeModalNavBar({ handleOnClick, onClose }) {
  return (
    <div className="bg-blue-500 fixed left-0 right-0 overflow-hidden">
      <div className="flex justify-end" onClick={onClose}>
        cross
      </div>
      <div className="flex flex-row justify-between text-white h-[40px] text-center">
        <div
          className="flex items-center justify-center cursor-pointer shadow-lg w-[45%] bg-slate-500 sms:rounded-xl rounded-r-xl"
          onClick={() => handleOnClick(-1)}
        >
          Prev
        </div>
        <div
          className="flex items-center justify-center cursor-pointer shadow-lg w-[45%] bg-slate-500 sms:rounded-xl rounded-l-xl"
          onClick={() => handleOnClick(1)}
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default PokeModalNavBar;
