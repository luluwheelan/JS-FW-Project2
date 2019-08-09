import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Edit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Axios.get(`/api/beers/${props.match.params.id}`)

      .then(result => {
        setInputs(result.data);
        
      })
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/beers/update", {
      id: props.match.params.id,
      beer: inputs
    })
      .then(resp => setRedirect(true))
      .catch(err => {
        console.error(err);
      });
  }

  function handleInputChange(event) {
    event.persist();

    const { name, value } = event.target;

    setInputs(inputs => {
      return {
        ...inputs,
        [name]: value //here must use ..., if just return inputs: value will not work well
      };
    });
  }

  if (redirect) {
    return <Redirect to="/beers/mybeer" />;
  }

  return (
    <div className="container">
      <header>
        <h1>Edit Your Beer</h1>
      </header>
      <div>
        <form action="/beers" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              name="name"
              required="requires"
              onChange={handleInputChange}
              defaultValue={inputs.name}
            />
          </div>
          <div className="form-group">
            <label>Type</label>
            <select
              className="form-control"
              name="type"
              required="requires"
              onChange={handleInputChange}
              Value={inputs.type}
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
              defaultValue={inputs.style}
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
              defaultValue={inputs.origin}
            />
          </div>
          <div className="form-group">
            <label>Brewery</label>
            <input
              className="form-control"
              name="brewery"
              required="requires"
              onChange={handleInputChange}
              defaultValue={inputs.brewery}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              name="description"
              required="requires"
              onChange={handleInputChange}
              defaultValue={inputs.description}
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

export default Edit;
