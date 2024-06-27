import React from "react";

function RegionBtn({ handleOnClick, region }) {
  return (
    <div
      className={`${region.back} outline ${region.border} p-1 rounded-md w-[60px] text-wh my-2 mx-2`}
    >
      <div className={`${region.front} rounded-md text-center`}>
        <button onClick={handleOnClick} value={region.value}>
          {region.name}
        </button>
      </div>
    </div>
  );
}

export default RegionBtn;
