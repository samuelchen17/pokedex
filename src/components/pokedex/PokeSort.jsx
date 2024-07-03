import React from "react";

function PokeSort({ sort, setSort }) {
  const handleSort = (event) => {
    setSort(event.target.value);
  };

  return (
    <div className="mx-2">
      <label className="text-white mr-2 text-xl font-medium">Sort By:</label>
      <select
        value={sort}
        onChange={handleSort}
        className="px-2 py-1 mt-2 sm:mt-0 rounded"
      >
        <option value="lowNumFirst">Lowest Number (First)</option>
        <option value="highNumFirst">Highest Number (First)</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>
    </div>
  );
}

export default PokeSort;
