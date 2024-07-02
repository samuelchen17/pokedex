import React from "react";
import TypePill from "../../../design/TypePill";
import SuscepComponent from "./SuscepComponent";

function Susceptibility({ susceptibility }) {
  return (
    <div>
      <div className="outline bg-slate-200 my-2 pb-2 sms:mx-4 sms:rounded-xl px-2 py-2">
        <SuscepComponent susceptibilityType={susceptibility.weaknesses}>
          Weak to
        </SuscepComponent>
        <SuscepComponent susceptibilityType={susceptibility.resistances}>
          Resistant to
        </SuscepComponent>
        <SuscepComponent susceptibilityType={susceptibility.immunity}>
          Immune to
        </SuscepComponent>
      </div>
    </div>
  );
}

export default Susceptibility;
