import React from "react";

function Home() {
  return (
    <div className="main">
      <div className="home-page">
        <form action="">
          <div className="searchBar">
            <input
              placeholder="Search Bar"
              type="text"
              className="searchInput"
            />
            <button className="searchBtn">
              <i className="bx bx-search-alt-2 "></i>
            </button>
          </div>
        </form>
      </div>

      <div className="hero-one">
        <h1>AZ Library Platform</h1>
        <h2>Explore Our Collection</h2>
        <div>
          <button>Contact Us</button>
          <button>More...</button>
        </div>
      </div>

      <div className="get-started">
        <button> Get Started</button>
      </div>
    </div>
  );
}

export default Home;
