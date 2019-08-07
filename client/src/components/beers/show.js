import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    Axios.get(`/api/beers/${props.match.params.id}`)
      .then(result => {
        console.log(result.data);
        setBeer(result.data);
      })
      .catch(err => console.error(err));
  }, [props]);
  console.log("!!!!!!!!!" + beer);
  return (
    <div className="container">
      <header>
        <h1>{beer && beer.name}</h1>
      </header>

      <p>{beer && beer.tester}</p>
      <p>{beer && beer.origin}</p>
      <p>{beer && beer.brewery}</p>
      <p>{beer && beer.description}</p>
    </div>
  );
}

export default Show;
