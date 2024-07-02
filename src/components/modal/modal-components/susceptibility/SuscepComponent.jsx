import React from "react";
import TypePill from "../../../design/TypePill";

function SuscepComponent({ susceptibilityType, children }) {
  return (
    <div className="">
      <div>{children}</div>
      <div className="grid grid-cols-3 gap-2">
        {Object.entries(susceptibilityType).map(([key, value]) => {
          console.log(`${key}: ${value}`);
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
