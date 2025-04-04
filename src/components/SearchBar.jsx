import React from "react";

const SearchBar = ({ searchInput, setSearchInput, handleSearch }) => {
  return (
    <div className="home-page mb-8 flex justify-center">
      <form onSubmit={handleSearch} className="relative w-full max-w-md flex">
        <input
          placeholder="Search Bar"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="searchInput p-2 border rounded-l-md"
        />
        <button className="searchBtn bg-blue-500 text-white p-2 rounded-r-md">
          <i className="bx bx-search-alt-2"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
