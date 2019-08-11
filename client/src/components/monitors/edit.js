import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Edit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Axios.get(`/api/monitors/${props.match.params.id}`)
      .then(result => setInputs(result.data))
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/monitors/update", {
      id: props.match.params.id,
      monitor: inputs
    })
      .then(resp => setRedirect(true))
      .catch(err => console.error(err));
  }

  function handleInputChange(event) {
    event.persist();

    const { name, value } = event.target;

    setInputs(inputs => {
      return {
        ...inputs,
        [name]: value
      };
    });
  }

  if (redirect) return <Redirect to="/monitors" />;

  return (
    <div className="container">
      <header>
        <h1>Edit Monitor Entry</h1>
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
              defaultValue={inputs.model}
            />
          </div>

          <div className="form-group">
            <label>Brand</label>
            <textarea
              className="form-control"
              name="brand"
              onChange={handleInputChange}
              value={inputs.brand}
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <textarea
              className="form-control"
              name="price"
              onChange={handleInputChange}
              value={inputs.price}
            />
          </div>

          <div className="form-group">
            <label>Aspect Ratio</label>
            <select
              className="form-control"
              name="aspect_ratio"
              required="required"
              onChange={handleInputChange}
              defaultValue={inputs.aspect_ratio}
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
              defaultValue={inputs.resolution}
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
              defaultValue={inputs.refresh_rate}
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
              defaultValue={inputs.screen_size}
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
              defaultValue={inputs.panel_type}
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
              value={inputs.additional_info}
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
