import React, { useState } from "react";
import BookCard from "../components/BookCard";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="main">
      <div className="hero-one">
        <h1>AZ Library Platform</h1>
        <h2>Explore Our Collection</h2>
        <div>
          <button>Contact Us</button>
          <button>More...</button>
        </div>
      </div>
      <div className="get-started">
        <button onClick={() => setShowSearch(true)}> Get Started</button>
      </div>

      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {showSearch && <BookCard />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
