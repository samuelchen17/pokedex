import React from "react";
import TypePill from "../../../design/TypePill";
import SuscepComponent from "./SuscepComponent";

function Susceptibility({ susceptibility }) {
  return (
    <div>
      <div className="outline bg-slate-500 my-2 pb-2 sms:mx-4 sms:rounded-xl">
        <SuscepComponent susceptibilityType={susceptibility.weaknesses}>
          Weaknesses
        </SuscepComponent>
        <SuscepComponent susceptibilityType={susceptibility.resistances}>
          Resistances
        </SuscepComponent>
        <SuscepComponent susceptibilityType={susceptibility.immunity}>
          Immunity to
        </SuscepComponent>
      </div>
    </div>
  );
}

export default Susceptibility;