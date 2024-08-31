import React from "react";
import scp004Data from "./JSON/SCP004.json";
import image from "./images/SCP004_door.jpg";

function Scp_004() {
  const scp004 = scp004Data[0];
  return (
    <div className="container">
      <div className="card-body">
        <img 
          src={image} 
          className="scp004" 
          alt="scp004"
          style={{
            display: 'block',
            margin: '0 auto',
            width: '80%'
          }} 
        />

        <div>
          <h2>SCP-004 - Object Class: {scp004.ObjectClass}</h2>
          <h3>Special Containment Procedures:</h3>
          <ul>
            {scp004.SpecialContainmentProcedures.map((procedure, index) => (
              <li key={index}>{procedure}</li>
            ))}
          </ul>
          <h3>Description:</h3>
          <ul>
            {scp004.Description.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
          <h3>Chronological History:</h3>
          <ul>
            {scp004.ChronologicalHistory.map((event, index) => (
              <li key={index}>
                {event.date} - {event.event}
              </li>
            ))}
          </ul>
          <h3>Space-Time Anomalies:</h3>
          <ul>
            {scp004.SpaceTimeAnomalies.map((anomaly, index) => (
              <li key={index}>{anomaly}</li>
            ))}
          </ul>
          <h3>Additional Notes:</h3>
          <ul>
            {scp004.AdditionalNotes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
          <h3>Appendices:</h3>
          {scp004.Appendices.map((appendix, index) => (
            <div key={index}>
              <h4>{appendix.title}</h4>
              <ul>
                {appendix.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Scp_004;
