import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [phone, setPhone] = useState([]);

  useEffect(() => {
    Axios.get(`/api/phones/${props.match.params.id}`)
      .then(result => setPhone(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{phone.model}</h1>
      </header>
      <div>
        <h4>{phone.brand}</h4>
        <h4>{phone.price}</h4>
      </div>
      <div>{phone.specifications}</div>
    </div>
  );
}

export default Show;
