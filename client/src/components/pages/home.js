import React from "react";

function Home() {
  return (
    <header className="home-cta">
      <h1>
        We are tasting beers from all of the world
        <br />
        <button className="main-btn btn btn-dark" to="/beers">
          Show All the Beers
        </button>
      </h1>
    </header>
  );
}

export default Home;
