import React from "react";
import { motion } from "framer-motion";

const SearchBar = ({ searchInput, setSearchInput, handleSearch }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="home-page mb-8 flex justify-center overflow-hidden"
    >
      <motion.form
        onSubmit={handleSearch}
        className="relative w-full max-w-md flex"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <input
          placeholder="Search for books..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="searchInput p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
        />
        <button className="searchBtn bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-md transition-colors duration-300 flex items-center justify-center">
          <i className="bx bx-search-alt-2 text-lg"></i>
        </button>
      </motion.form>
    </motion.div>
  );
};

export default SearchBar;
