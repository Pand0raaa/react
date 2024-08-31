import React from "react";
import scp006Data from "./JSON/SCP006.json";
import image from "./images/SCP006.jpg";

function Scp_006() {
  const scp006 = scp006Data[0];
  return (
    <div className="container">
      <div className="card-body">
        <img 
          src={image} 
          className="scp006" 
          alt="scp006"
          style={{
            display: 'block',
            margin: '0 auto',
            width: '100%' // Set image width to 100% of its container
          }} 
        />

        <div>
          <h2>SCP-006 - Object Class: {scp006.ObjectClass}</h2>

          <h3>Special Containment Procedures:</h3>
          <ul>
            {scp006.SpecialContainmentProcedures.map((procedure, index) => (
              <li key={index}>{procedure}</li>
            ))}
          </ul>

          <h3>Description:</h3>
          <ul>
            {scp006.Description.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Scp_006;
