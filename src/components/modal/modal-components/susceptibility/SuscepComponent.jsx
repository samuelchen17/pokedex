import React from "react";
import TypePill from "../../../design/TypePill";

function SuscepComponent({ susceptibilityType, children }) {
  return (
    <div className="">
      <div className="bg-red-700 text-white text-center py-1">{children}</div>
      <div className="grid grid-cols-3 gap-4 my-4 mx-2">
        {Object.entries(susceptibilityType).map(([key, value]) => {
          return (
            <div className="flex justify-center" key={key}>
              <TypePill type={key} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SuscepComponent;
