import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function MyBeer() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    Axios.get("/api/beers/myBeer")
      .then(result => {
        setBeers(result.data);
        console.log("return result my beer " + result.data);
      })
      .catch(err => console.error(err));
  }, []); //[] for prevent keep going

  return (
    <div className="container">
      <header>
        <h1>Beer We Tested</h1>
      </header>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Style</th>
              <th>Origin</th>
              <th>Brewery</th>
              <th>Tester</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {beers.map(beer => (
              <tr key={beer._id}>
                <td>
                  <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                </td>
                <td>{beer.type}</td>
                <td>{beer.style}</td>
                <td>{beer.origin}</td>
                <td>{beer.brewery}</td>
                <td>
                  {beer.tester && beer.tester.firstName}{" "}
                  {beer.tester && beer.tester.lastName}
                </td>
                <td>
                  <Link to={`/beers/${beer._id}/edit`}>edit</Link>|
                  <Link to={`/beers/${beer._id}/destroy`}>delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBeer;
