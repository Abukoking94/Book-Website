import React, { useState } from "react";
import BookCard from "../components/BookCard";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mt-[50px] px-4">
      <div className="flex flex-col items-start justify-center w-full max-w-6xl pl-[50px]">
        {/* Animated h1 - Pop/Fade In */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[52px] md:text-[77px] text-white font-bold leading-tight"
        >
          AZ Library Platform
        </motion.h1>

        {/* Animated h2 - Slide In from Left */}
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-[28px] md:text-[40px] text-white font-light"
        >
          Explore Our Collection
        </motion.h2>

        <div className=" mt-[70px] flex flex-col sm:flex-row gap-[20px] sm:gap-[30px]">
          <Link to="/contact">
            <button className="hover:bg-[#615b93] hover:cursor-pointer w-[184px] h-[45px] rounded-full bg-[rgba(122,113,201,0.85)] text-white transition-colors duration-300">
              Contact Us
            </button>
          </Link>
          <button className="hover:bg-[#615b93] hover:cursor-pointer w-[184px] h-[45px] rounded-full bg-[rgba(122,113,201,0.85)] text-white transition-colors duration-300">
            More...
          </button>
        </div>
      </div>

      <div className="mt-[150px] flex justify-center items-center w-full">
        <button
          onClick={() => setShowSearch(true)}
          className="hover:bg-[#615b93] hover:cursor-pointer w-[90%] max-w-[639px] h-[51px] rounded-full bg-[rgba(122,113,201,0.85)] text-white mb-[70px] transition-colors duration-300"
        >
          Get Started
        </button>
      </div>

      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full flex justify-center"
          >
            <BookCard />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
