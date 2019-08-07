import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function New() {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/beers", {
      beer: {
        name: inputs.name,
        type: inputs.type,
        style: inputs.style,
        origin: inputs.origin,
        brewery: inputs.brewery,
        description: inputs.description
      }
    })
      .then(resp => setRedirect(true))
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    event.persist();

    const { name, value } = event.target;

    setInputs(inputs => {
      inputs[name] = value;
      return inputs;
    });
    console.log(inputs);
  }

  if (redirect) return <Redirect to="/beers/myBeer" />;
  return (
    <div className="container">
      <header>
        <h1>New Beer</h1>
      </header>
      <div>
        <form action="/api/beers" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              name="name"
              required="requires"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Type</label>
            <select
              className="form-control"
              name="type"
              required="requires"
              onChange={handleInputChange}
            >
              <option value="LAGER">Lager</option>
              <option value="ALE">Ale</option>
              <option value="HYBRID">Hybrid</option>
              <option value="MALT">Malt</option>
              <option value="STOUT">Strout</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Style</label>
            <select
              className="form-control"
              name="style"
              required="requires"
              onChange={handleInputChange}
            >
              <option value="AMBER">Amber</option>
              <option value="BLONDE">Blonde</option>
              <option value="BROWN">Brown</option>
              <option value="CREAM">Cream</option>
              <option value="DARK">Dark</option>
              <option value="PALE">Pale</option>
              <option value="STRONG">Strong</option>
              <option value="WHEAT">Wheat</option>
              <option value="RED">Red</option>
              <option value="INDIA PALE ALE">India Pale Ale</option>
              <option value="LIME">Lime</option>
              <option value="PILSNER">Pilsner</option>
              <option value="GOLDEN">Golden</option>
              <option value="FRUIT">Fruit</option>
              <option value="HONEY">Honey</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Origin</label>
            <input
              className="form-control"
              name="origin"
              required="requires"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Brewery</label>
            <input
              className="form-control"
              name="brewery"
              required="requires"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              name="description"
              required="requires"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default New;
