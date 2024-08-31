import React from "react";
import scp002Data from "./JSON/SCP002.json";
import image from "./images/800px-SCP002.jpg";

function Scp_002() {
    const scp002 = scp002Data[0];
    return (
        <div className="container">
            <div className="card-body">
                <img 
                    src={image} 
                    className="scp002" 
                    alt="scp002" 
                    style={{
                        display: 'block',
                        margin: '0 auto',
                        width: '100%'
                    }} 
                />
                <div>
                    <h1>{scp002.Item}</h1>
                    <h2>Object Class: {scp002.ObjectClass}</h2>

                    <h3>Special Containment Procedures:</h3>
                    <ul>
                        {scp002["SpecialContainmentProcedures:"].map((procedure, index) => (
                            <li key={index}>{procedure}</li>
                        ))}
                    </ul>

                    <h3>Description:</h3>
                    <ul>
                        {scp002["Description:"].map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>

                    <h3>Reference:</h3>
                    <p>{scp002.Reference}</p>

                    {scp002.Report && (
                        <div>
                            <h3>{scp002.Report.title}</h3>
                            <ul>
                                {scp002.Report.data.map((report, index) => (
                                    <li key={index}>{report}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Scp_002;
