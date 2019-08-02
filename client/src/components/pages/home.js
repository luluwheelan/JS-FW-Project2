import React from "react";

function Home() {
  return (
    <div className="home-cta content">
      <h1>
        We are tasting beers from all of the world
        <br />
        <button className="main-btn btn btn-dark" to="/beers">
          Show All the Beers
        </button>
      </h1>
    </div>
  );
}

export default Home;
