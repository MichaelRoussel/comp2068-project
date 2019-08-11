import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    Axios.get("/api/phones")
      .then(result => setPhones(result.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>All Phones</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Model</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {phones.map(phone => (
              <tr key={phone._id}>
                <td>
                  <Link to={`/phones/${phone._id}`}>{phone.model}</Link>
                </td>
                <td>{phone.brand}</td>
                <td>{phone.price}</td>
                <td>
                  <Link to={`/phones/${phone._id}/edit`}>edit </Link>|
                  <Link to={`/phones/${phone._id}/destroy`}> delete</Link>
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
