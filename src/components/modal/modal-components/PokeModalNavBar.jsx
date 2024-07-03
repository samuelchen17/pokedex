import React from "react";
import Pearls from "../../design/Pearls";

function PokeModalNavBar({ handleOnClick, onClose }) {
  return (
    <div className="flex justify-between">
      <Pearls />
      <div className="flex flex-col w-full items-end justify-between py-3">
        <div
          className="flex justify-end cursor-pointer mr-2 text-xl pb-4"
          onClick={onClose}
        >
          [x]
        </div>
        <div className="flex justify-end sms:w-[60%] w-full">
          <div className="flex flex-row justify-between h-full text-center w-[100%]">
            <div
              className="flex outline items-center justify-center cursor-pointer shadow-lg w-[45%] bg-slate-500 hover:bg-slate-600 rounded-xl"
              onClick={() => handleOnClick(-1)}
            >
              <p className="text-white hidden md:flex">Prev</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-white md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </div>
            <div
              className="flex outline items-center justify-center cursor-pointer shadow-lg w-[45%] bg-slate-500 hover:bg-slate-600 sms:rounded-xl rounded-l-xl"
              onClick={() => handleOnClick(1)}
            >
              <p className="text-white md:flex hidden">Next</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-white md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeModalNavBar;
