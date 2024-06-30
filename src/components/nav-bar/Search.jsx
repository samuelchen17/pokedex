import React from "react";

function Search({ searchParam, setSearchParam }) {
  const handleChange = (event) => {
    setSearchParam(event.target.value);
  };
  return (
    <div className="flex flex-row">
      <input
        className=""
        type="text"
        placeholder="Search for Pokemon"
        value={searchParam}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
