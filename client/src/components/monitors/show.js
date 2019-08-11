import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [monitor, setMonitor] = useState([]);

  useEffect(() => {
    Axios.get(`/api/monitors/${props.match.params.id}`)
      .then(result => setMonitor(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{monitor.model}</h1>
      </header>
      <div>
        <h4>{monitor.brand}</h4>
        <h4>{monitor.price}</h4>
        <h4>{monitor.aspect_ratio}</h4>
        <h4>{monitor.resolution}</h4>
        <h4>{monitor.refresh_rate}</h4>
        <h4>{monitor.screen_size}</h4>
        <h4>{monitor.panel_type}</h4>
        <br />
        <div>{monitor.additional_info}</div>
      </div>
    </div>
  );
}

export default Show;
