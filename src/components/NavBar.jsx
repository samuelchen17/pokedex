import React from "react";

function NavBar() {
  const clipTriangleStyle = {
    clipPath: "polygon(0 0, 100% 0, 100% 100%)",
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row h-16 my-2">
        <div className="h-[60px] w-[60px]">
          <div className="flex justify-center items-center h-full w-full bg-white rounded-full outline">
            <div className="h-[85%] w-[85%] bg-blue-400 rounded-full outline overflow-hidden">
              <div className="h-[95%] w-[95%] left-[7%] top-[7%] bg-blue-700 rounded-full relative">
                <div className="h-[50%] w-[50%] left-[5%] top-[5%] bg-blue-400 rounded-full relative">
                  <div className="left-[15%] top-[15%] h-[40%] w-[40%] bg-blue-200 rounded-full relative"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sms:flex flex-row hidden mx-1">
          <div className="h-[14px] w-[14px]">
            <div className="h-[85%] w-[85%] bg-red-400 rounded-full outline overflow-hidden">
              <div className="h-[95%] w-[95%] left-[7%] top-[7%] bg-red-700 rounded-full relative">
                <div className="h-[50%] w-[50%] left-[5%] top-[5%] bg-red-400 rounded-full relative">
                  <div className="left-[15%] top-[15%] h-[40%] w-[40%] bg-blue-200 rounded-full relative"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[14px] w-[14px]">
            <div className="h-[85%] w-[85%] bg-yellow-400 rounded-full outline overflow-hidden">
              <div className="h-[95%] w-[95%] left-[7%] top-[7%] bg-yellow-700 rounded-full relative">
                <div className="h-[50%] w-[50%] left-[5%] top-[5%] bg-yellow-400 rounded-full relative">
                  <div className="left-[15%] top-[15%] h-[40%] w-[40%] bg-blue-200 rounded-full relative"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[14px] w-[14px]">
            <div className="h-[85%] w-[85%] bg-green-400 rounded-full outline overflow-hidden">
              <div className="h-[95%] w-[95%] left-[7%] top-[7%] bg-green-700 rounded-full relative">
                <div className="h-[50%] w-[50%] left-[5%] top-[5%] bg-green-400 rounded-full relative">
                  <div className="left-[15%] top-[15%] h-[40%] w-[40%] bg-blue-200 rounded-full relative"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-4xl">Pokedex</h1>
      <div className="flex flex-row">
        <div className="h-[50px] w-[50px] bg-red-600"></div>
        <div className="h-[50px] w-[50px] bg-red-600">hello</div>
        <input
          className="outline-emerald-500 border border-red-500"
          type="text"
          placeholder="Search for Pokemon"
        />
      </div>
    </div>
  );
}

export default NavBar;
