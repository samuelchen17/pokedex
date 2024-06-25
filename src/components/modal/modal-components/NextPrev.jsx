import React from "react";

function NextPrev({ handleOnClick }) {
  return (
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
  );
}

export default NextPrev;
