import React from "react";

const cardStyle = {
  marginTop: '100px',
  padding: '20px',
  backgroundColor: 'cyan',
  width: '50%',
  float: 'left'
}

const divStyle = {
  marginTop: '100px',
  marginLeft: '40px'
}

function Contact() {
  return (
    <div style={divStyle}>
      <h1>Contact Page</h1><br />
        <div className='container' style={cardStyle}>
          <h2>Michael Roussel</h2>
          <h2>Email: <a href="mailto:michael.roussel@mygeorgian.ca?Subject=Hello%20again">michael.roussel@mygeorgian.ca</a></h2>
          <h2>Mobile: 705-641-2101</h2>
        </div>
    </div>
    
  );
}

export default Contact;
