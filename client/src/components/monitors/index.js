import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [monitors, setMonitors] = useState([]);

  useEffect(() => {
    Axios.get("/api/monitors")
      .then(result => setMonitors(result.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>All Monitors</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Model</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Aspect Ratio</th>
              <th>Resolution</th>
              <th>Refresh Rate</th>
              <th>Screen Size</th>
              <th>Panel Type</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {monitors.map(monitor => (
              <tr key={monitor._id}>
                <td>
                  <Link to={`/monitors/${monitor._id}`}>{monitor.model}</Link>
                </td>
                <td>{monitor.brand}</td>
                <td>{monitor.price}</td>
                <td>{monitor.aspect_ratio}</td>
                <td>{monitor.resolution}</td>
                <td>{monitor.refresh_rate}</td>
                <td>{monitor.screen_size}</td>
                <td>{monitor.panel_type}</td>
                <td>
                  <Link to={`/monitors/${monitor._id}/edit`}>edit </Link>|
                  <Link to={`/monitors/${monitor._id}/destroy`}> delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
