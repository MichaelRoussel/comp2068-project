import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function New() {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/monitors/", {
      monitor: {
        model: inputs.model,
        brand: inputs.brand,
        price: inputs.price,
        aspect_ratio: inputs.aspect_ratio,
        resolution: inputs.resolution,
        refresh_rate: inputs.refresh_rate,
        screen_size: inputs.screen_size,
        panel_type: inputs.panel_type,
        additional_info: inputs.additional_info
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

  if (redirect) return <Redirect to="/monitors" />;

  return (
    <div className="container">
      <header>
        <h1>New Monitor Entry</h1>
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
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              name="price"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Aspect Ratio</label>
            <select
              className="form-control"
              name="aspect_ratio"
              required="required"
              onChange={handleInputChange}
            >
              <option value="16:9">16:9</option>
              <option value="21:9">21:9</option>
            </select>
          </div>
          <div className="form-group">
            <label>Resolution</label>
            <select
              className="form-control"
              name="resolution"
              required="required"
              onChange={handleInputChange}
            >
              <option value="1920x1080">1920x1080</option>
              <option value="2560x1080">2560x1080</option>
              <option value="2560x1440">2560x1440</option>
              <option value="3440x1440">3440x1440</option>
              <option value="3840x2160">3840x2160</option>
            </select>
          </div>
          <div className="form-group">
            <label>Refresh Rate</label>
            <select
              className="form-control"
              name="refresh_rate"
              required="required"
              onChange={handleInputChange}
            >
              <option value="60hz">60hz</option>
              <option value="75hz">75hz</option>
              <option value="120hz">120hz</option>
              <option value="144hz">144hz</option>
            </select>
          </div>
          <div className="form-group">
            <label>Screen Size</label>
            <select
              className="form-control"
              name="screen_size"
              required="required"
              onChange={handleInputChange}
            >
              <option value="17in">17in</option>
              <option value="19in">19in</option>
              <option value="21in">21in</option>
              <option value="23in">23in</option>
              <option value="24in">24in</option>
              <option value="27in">27in</option>
            </select>
          </div>
          <div className="form-group">
            <label>Panel Type</label>
            <select
              className="form-control"
              name="panel_type"
              required="required"
              onChange={handleInputChange}
            >
              <option value="IPS">IPS</option>
              <option value="VA">VA</option>
              <option value="TN">TN</option>
              <option value="OLED">OLED</option>
            </select>
          </div>
          <div className="form-group">
            <label>Additional Info</label>
            <textarea
              className="form-control"
              name="additional_info"
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
