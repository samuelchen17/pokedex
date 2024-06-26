import React from "react";

function Pearl({ colour }) {
  return (
    <div className="h-[14px] w-[14px] my-1 mx-[3px]">
      <div
        className={`h-[85%] w-[85%] bg-${colour.outer} rounded-full outline overflow-hidden`}
      >
        <div
          className={`h-[95%] w-[95%] left-[7%] top-[7%] bg-${colour.inner} rounded-full relative`}
        >
          <div
            className={`h-[50%] w-[50%] left-[5%] top-[5%] bg-${colour.outer} rounded-full relative`}
          >
            <div
              className={`left-[15%] top-[15%] h-[40%] w-[40%] bg-${colour.core} rounded-full relative`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pearl;
