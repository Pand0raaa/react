import React from "react";
import scp003Data from "./JSON/SCP003.json";
import image from "./images/SCP003.jpg";

function Scp_003() {
    const scp003 = scp003Data[0];
    return (
        <div className="container">
            <div className="card-body">
                <img 
                    src={image} 
                    className="scp003" 
                    alt="scp003"
                    style={{
                        display: 'block',
                        margin: '0 auto',
                        width: '100%' 
                    }} 
                />
                <div>
                    <h2>SCP-003 - Object Class: {scp003.ObjectClass}</h2>
                    <h3>Special Containment Procedures:</h3>
                    <ul>
                        {scp003.SpecialContainmentProcedures.map((procedure, index) => (
                            <li key={index}>{procedure}</li>
                        ))}
                    </ul>
                    <h3>Description:</h3>
                    <ul>
                        {scp003.Description.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>
                    <h3>Addendums:</h3>
                    {scp003.Addendums.map((addendum, index) => (
                        <div key={index}>
                            <h4>{addendum.number}</h4>
                            <ul>
                                {addendum.description.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Scp_003;
