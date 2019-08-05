import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-cta">
      <h1>
        We are tasting beers from all of the world
        <br />
        <Link className="main-btn btn btn-dark" to="/beers">
          Show All the Beers
        </Link>
      </h1>
    </div>
  );
}

export default Home;
