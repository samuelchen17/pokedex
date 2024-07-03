import React from "react";

function Search({ searchParam, setSearchParam }) {
  const handleChange = (event) => {
    setSearchParam(event.target.value);
  };
  return (
    <div className="mb-4 mt-6 mx-2">
      <input
        className="md:w-[100%] w-full rounded-xl h-10 pl-2 outline outline-red-700"
        type="text"
        placeholder="Search for Pokemon by name or ID"
        value={searchParam}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
