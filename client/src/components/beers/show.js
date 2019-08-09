import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    Axios.get(`/api/beers/${props.match.params.id}`)
      .then(result => {
        setBeer(result.data);
        console.log("From beer show ", result.data);
      })
      .catch(err => console.error(err));
  }, [props]);
  return (
    <div className="container mt-5">
      <header>
        <h1>{beer.name}</h1>
      </header>

      <p>{`${beer.tester && beer.tester.firstName} ${beer.tester && beer.tester.lastName}`}</p>
      <p>{beer.origin}</p>
      <p>{beer.brewery}</p>
      <p>{beer.description}</p>
    </div>
  );
}

export default Show;
