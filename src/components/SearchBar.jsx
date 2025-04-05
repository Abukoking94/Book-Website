import React from "react";
import { motion } from "framer-motion";

const SearchBar = ({ searchInput, setSearchInput, handleSearch }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-8 flex justify-center overflow-hidden"
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
          className="p-3 border bg-[rgba(255,255,255,0.5)] border-gray-300 rounded-l-full focus:outline-0 focus:ring-grey-100 focus:border-transparent w-full text-sm"
        />
        <button
          type="submit"
          className="bg-[rgba(255,255,255,0.5)] hover:bg-[#746da1] text-black px-4 py-2 rounded-r-full transition-colors duration-300 flex items-center justify-center  border-gray-300"
        >
          <i className="bx bx-search-alt-2 text-lg"></i>
        </button>
      </motion.form>
    </motion.div>
  );
};

export default SearchBar;
