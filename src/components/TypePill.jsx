import React from "react";

function TypePill({ type }) {
  return (
    <span
      className={`${type} rounded-md text-sm shadow-md w-[45%] text-center capitalize`}
    >
      {type}
    </span>
  );
}

export default TypePill;
