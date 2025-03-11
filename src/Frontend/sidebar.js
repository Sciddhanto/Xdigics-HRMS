import React, { useState } from "react";
import './style.css';
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";


const Sidebar = ({setActiveComponent}) => {

    const [showSecondSidebar, setShowSecondSidebar] = useState(false);
    const [showThirdSidebar, setShowThirdSidebar] = useState(false);
    const [showOnboardinghSidebar, setOnboardinghSidebar] = useState(false);
    const [showTeamSidebar, setshowTeamSidebar] = useState(false);
    const [showOrganizationSidebar, setshowOrganizationSidebar] = useState(false);

    const navigate = useNavigate()
    

    const handleFirstSidebarClick = () => {
        setShowSecondSidebar(true);
        setShowThirdSidebar(false);
        setOnboardinghSidebar(false);
        setshowTeamSidebar(false);
    };

    const handleOnboardingClick = () => {
        setOnboardinghSidebar(true);
        setShowThirdSidebar(false);
        setShowSecondSidebar(false);

    };

    const handleEmployeeClick = () => {
        setShowSecondSidebar(false);
        setShowThirdSidebar(false);
        setOnboardinghSidebar(false);

    };

    const handleSecondSidebarClick = () => {
        setShowThirdSidebar(true);
        setshowTeamSidebar(false);
        setshowOrganizationSidebar(false);

    };


    const handleTeamSidebar = () => {
        setshowTeamSidebar(true);
        setShowSecondSidebar(true);
        setShowThirdSidebar(false);
        setOnboardinghSidebar(false);
        setshowOrganizationSidebar(false);
    };

    const handleOrganizationSidebar = () => {
        setshowOrganizationSidebar(true);
        setshowTeamSidebar(false);
        setShowThirdSidebar(false);


    };

    const handleOverviewSidebar = () => {
        setShowThirdSidebar(false);
        setShowSecondSidebar(false);

    };

    const handleSecondSidebarOnboardingClick = () => {

    };

    const handleLeaveClick = () => {
        window.location.href = "/leave.js"; // Redirect to login.js or an appropriate URL
    };






    return (

        <div className="container-fluid">


            {/* Header Section */}
            {/* <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
                <div className="logo-container">
                    <Link to="/">
                        <img src="/image/digiPayx_logo.png" alt="Logo" className="logo" />
                    </Link>

                </div>
                <nav>
                    <ul className="nav">
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About DigiPayX</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
                    </ul>
                </nav>

                <button className="btn text-white" style={{ marginRight: "40px", width: "90px"}} onClick={handleLeaveClick}>Leave</button>

            </div> */}



            <section>
                <div class="dashboard-container">



                    <div className="sidebar">

                        <a href="#" onClick={handleFirstSidebarClick}><img src="image/home.png" style={{ width: "20px", height: "20px", marginRight: "10px" }} />Home</a>
                        <a href="#" onClick={handleOnboardingClick}><img src="image/cooperation.png" style={{ width: "25px", height: "25px", marginRight: "5px" }} />Onboarding</a>
                        <a href="#" onClick={handleEmployeeClick}><img src="image/teamwork.png" style={{ width: "25px", height: "25px", marginRight: "5px" }} />Employee</a>
                        <a href="#" ><img src="image/leave.png" style={{ width: "25px", height: "25px", marginRight: "5px" }} />Leave</a>
                        <a href="#"><img src="image/hrletter.png" style={{ width: "25px", height: "25px", marginRight: "5px" }} />HR Letter</a>
                        <a href="#"><img src="image/files.png" style={{ width: "25px", height: "25px", marginRight: "5px" }} />Files</a>
                        <a href="#"><img src="image/time-tracker.png" style={{ width: "25px", height: "25px", marginRight: "5px" }} />Time Tracker</a>
                        <a href="#"><img src="image/immigration.png" style={{ width: "25px", height: "25px", marginRight: "5px" }} />Attendance</a>
                        <a href="#"><img src="image/task.png" style={{ width: "25px", height: "25px", marginRight: "5px" }} />Tasks</a>
                        <a href="#"><img src="image/exit.png" style={{ width: "25px", height: "25px", marginRight: "5px" }} />Exit Details</a>
                        <a href="#" onClick={() => setActiveComponent("settings")}><img src="image/setting.png" style={{ width: "25px", height: "25px", marginRight: "5px" }} />Settings</a>                                                 


                </div>
                {/* Second Sidebar */}
                {showSecondSidebar && (
                    <div className="sidebar" style={{ background: "#1E3E6F" }}>

                        <a href="#" onClick={handleSecondSidebarClick}>My Space</a><br />
                        <a href="#" onClick={handleTeamSidebar}>Team</a><br />
                        <a href="#" onClick={handleOrganizationSidebar}>Organization</a>
                    </div>
                )}

                {showOnboardinghSidebar && (
                    <div className="sidebar" style={{ background: "#1E3E6F" }}>

                        <a href="#" onClick={handleSecondSidebarOnboardingClick}>Candidate</a>

                    </div>
                )}

                {/* Third Sidebar */}
                {showThirdSidebar && (
                    <div className="sidebar" style={{ background: "#96B6E8", }}>

                        <a href="#" onClick={handleOverviewSidebar}>Overview</a><br />
                        <a href="#" onClick={handleOverviewSidebar}>Dashboard</a><br />
                        <a href="#" onClick={handleOverviewSidebar}>Calender</a>
                    </div>
                )}<br />
                {showTeamSidebar && (
                    <div className="sidebar" style={{ background: "#96B6E8" }}>

                        <a href="#" onClick={handleOverviewSidebar}>TeamSpeace</a><br />
                        <a href="#" onClick={handleOverviewSidebar}>Reportees</a><br />
                        <a href="#" onClick={handleOverviewSidebar}>Department</a>
                        <a href="#" onClick={handleOverviewSidebar}>Team List</a>
                        <a href="#" onClick={handleOverviewSidebar}>HR Process</a>
                    </div>
                )}
                {showOrganizationSidebar && (
                    <div className="sidebar" style={{ background: "#96B6E8" }}>

                        <a href="#" onClick={handleOverviewSidebar}>Overview</a><br />
                        <a href="#" onClick={handleOverviewSidebar}>Annoucement</a><br />
                        <a href="#" onClick={handleOverviewSidebar}>Policies</a>
                        <a href="#" onClick={handleOverviewSidebar}>Employee Tree</a>
                        <a href="#" onClick={handleOverviewSidebar}>Department Tree</a>
                        <a href="#" onClick={handleOverviewSidebar}>Department Directory</a>
                        <a href="#" onClick={handleOverviewSidebar}>Birthday Folks</a>
                        <a href="#" onClick={handleOverviewSidebar}>New Hiring</a>
                        <a href="#" onClick={handleOverviewSidebar}>Calender</a>
                    </div>
                )}




        </div>




            </section >

            
            {setActiveComponent === "settings" && <Settings />}

            

        </div >
    );
};

export default Sidebar;
