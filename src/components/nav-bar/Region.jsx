import React from "react";
import RegionBtn from "../design/RegionBtn";

function Region({ showRegion, setShowRegion, handleOnClick }) {
  const regions = [
    {
      name: "kanto",
      value: "0, 151",
      back: "bg-kanto-back",
      border: "outline-kanto-border",
      front: "bg-kanto-front",
    },
    {
      name: "johto",
      value: "151, 100",
      back: "bg-johto-back",
      border: "outline-johto-border",
      front: "bg-johto-front",
    },
    {
      name: "hoenn",
      value: "251, 135",
      back: "bg-hoenn-back",
      border: "outline-hoenn-border",
      front: "bg-hoenn-front",
    },
    {
      name: "sinnoh",
      value: "386, 107",
      back: "bg-sinnoh-back",
      border: "outline-sinnoh-border",
      front: "bg-sinnoh-front",
    },
    {
      name: "unova",
      value: "493, 156",
      back: "bg-unova-back",
      border: "outline-unova-border",
      front: "bg-unova-front",
    },
    {
      name: "kalos",
      value: "649, 72",
      back: "bg-kalos-back",
      border: "outline-kalos-border",
      front: "bg-kalos-front",
    },
    {
      name: "all",
      value: "0, 721",
      back: "bg-slate-400",
      border: "outline-black",
      front: "bg-slate-200",
    },
  ];

  return (
    <div className="flex justify-end my-4 mx-2">
      <div
        className=" bg-white rounded-xl outline outline-red-700 py-2 px-2"
        onClick={() => {
          setShowRegion(false);
        }}
      >
        <div className="flex flex-wrap justify-center">
          {regions.map((region, index) => (
            <RegionBtn
              handleOnClick={handleOnClick}
              region={region}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Region;
