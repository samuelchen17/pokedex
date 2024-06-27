import React from "react";

function Region({ showRegion, setShowRegion }) {
  return (
    <div className="flex justify-end w-full h-full bg-green-700 fixed bg-opacity-50 top-0 left-0 right-0 bottom-0 z-50">
      <div
        className="fixed bg-white w-[80%] h-[600px] top-[50px] rounded-xl outline mr-[2%] "
        onClick={() => {
          setShowRegion(false);
        }}
      ></div>
    </div>
  );
}

export default Region;
