import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    Axios.get(`/api/beers/${props.match.params.id}`)
      .then(result => {
        console.log(result);
        setBeer(result.data);
      })
      .catch(err => console.error(err));
  }, [props]); //[props] for useEffect to use this param

  return (
    <div className="container">
      <header>
        <h1>{beer && beer.name}</h1>
      </header>

      <h5>{beer && beer.tester}</h5>
      <h5>{beer && beer.origin}</h5>
      <h5>{beer && beer.brewery}</h5>
      <p>{beer && beer.description}</p>
    </div>
  );
}

export default Show;
