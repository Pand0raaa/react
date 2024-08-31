import React from 'react';
import Scp_Files from "./SCP_Files";
import './Scp_Home.css'; // Import the CSS file

function Scp_Home() {
    return (
        <div className="container">
            <div className="row equal-height">
                <div className="col file-item">
                    <Scp_Files name="SCP_002" description="The Living Room" ScpLink="/Scp_002" />
                </div>

                <div className="col file-item">
                    <Scp_Files name="SCP_003" description="Biological Motherboard" ScpLink="/Scp_003" />
                </div>

                <div className="col file-item">
                    <Scp_Files name="SCP_004" description="Wooden Door" ScpLink="/Scp_004" />
                </div>

                <div className="col file-item">
                    <Scp_Files name="SCP_005" description="Rusty Key" ScpLink="/Scp_005" />
                </div>

                <div className="col file-item">
                    <Scp_Files name="SCP_006" description="Fountain of Youth" ScpLink="/Scp_006" />
                </div>
            </div>
        </div>
    );
}

export default Scp_Home;
