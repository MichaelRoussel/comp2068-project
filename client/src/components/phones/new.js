import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import NotificationContext from "../notification_context";


function New() {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/phones", {
      phone: {
        model: inputs.model,
        brand: inputs.brand,
        price: inputs.price,
        specifications: inputs.specifications
      }
    })
      .then(resp => setRedirect(true))
      .catch(err => console.error(err));
  }

  function handleInputChange(event) {
    event.persist();
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;

    setInputs(inputs => {
      inputs[name] = value;
      return inputs;
    });
  }

  if (redirect) return <Redirect to="/phones" />;

  return (
    <div className="container">
      <header>
        <h1>New Phone Entry</h1>
      </header>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Model</label>
            <input
              className="form-control"
              name="model"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Brand</label>
            <input
              className="form-control"
              name="brand"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              name="price"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Specifications</label>
            <textarea
              className="form-control"
              name="specifications"
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
