import React from "react";

function Search({ searchParam, setSearchParam }) {
  const handleChange = (event) => {
    setSearchParam(event.target.value);
  };
  return (
    <div className="my-2 mx-2">
      <input
        className="md:w-[50%] w-full rounded-xl h-10 pl-2 outline outline-red-700"
        type="text"
        placeholder="Search for Pokemon by name or ID"
        value={searchParam}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
