import React from "react";

function RegionBtn({ handleOnClick }) {
  return (
    <div className="bg-kanto-back outline outline-kanto-border p-1 rounded-md w-[60px] text-wh">
      <div className="bg-kanto-front rounded-md text-center">
        <button onClick={handleOnClick} value="0, 151">
          kanto
        </button>
      </div>
    </div>
  );
}

export default RegionBtn;
