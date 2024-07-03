import React from "react";

function TypePill({ type }) {
  return (
    <span
      className={`${type} rounded-md text-sm shadow-md w-[100%] text-center capitalize outline-black outline-2`}
    >
      {type}
    </span>
  );
}

export default TypePill;
