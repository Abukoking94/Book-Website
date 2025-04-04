import React, { useState } from "react";
import BookCard from "../components/BookCard";

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

      {showSearch && <BookCard />}
    </div>
  );
}

export default Home;
