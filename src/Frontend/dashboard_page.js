import React, { useState } from "react";
import './style.css';
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import Sidebar from "./sidebar";
import Overview from "./overview";
import Settings from "./Settings.js";
import ManageAccountsNavbar from "./ManageAccountsNavbar.js";
import OrganizationStructure from "./OrganizationStructure.js";


const Dashboard = () => {

    const [activeComponent, setActiveComponent] = useState("overview"); // Track active component
    // const [showSecondSidebar, setShowSecondSidebar] = useState(false);
    // const [showThirdSidebar, setShowThirdSidebar] = useState(false);
    // const [showOnboardinghSidebar, setOnboardinghSidebar] = useState(false);
    // const [showTeamSidebar, setshowTeamSidebar] = useState(false);
    // const [showOrganizationSidebar, setshowOrganizationSidebar] = useState(false);


    // const handleFirstSidebarClick = () => {
    //     setShowSecondSidebar(true);
    //     setShowThirdSidebar(false);
    //     setOnboardinghSidebar(false);
    //     setshowTeamSidebar(false);
    // };

    // const handleOnboardingClick = () => {
    //     setOnboardinghSidebar(true);
    //     setShowThirdSidebar(false);
    //     setShowSecondSidebar(false);
    // };

    // const handleEmployeeClick = () => {
    //     setShowSecondSidebar(false);
    //     setShowThirdSidebar(false);
    //     setOnboardinghSidebar(false);

    // };

    // const handleSecondSidebarClick = () => {
    //     setShowThirdSidebar(true);
    //     setshowTeamSidebar(false);
    //     setshowOrganizationSidebar(false);
    // };


    // const handleTeamSidebar = () => {
    //     setshowTeamSidebar(true);
    //     setShowSecondSidebar(true);
    //     setShowThirdSidebar(false);
    //     setOnboardinghSidebar(false);
    //     setshowOrganizationSidebar(false);
    // };

    // const handleOrganizationSidebar = () => {
    //     setshowOrganizationSidebar(true);
    //     setshowTeamSidebar(false);
    //     setShowThirdSidebar(false);

    // };

    // const handleOverviewSidebar = () => {
    //     setShowThirdSidebar(false);
    //     setShowSecondSidebar(false);
    // };

    // const handleSecondSidebarOnboardingClick = () => {

    // };

    const handleLeaveClick = () => {
        window.location.href = "/leave.js"; // Redirect to login.js or an appropriate URL
    };

    const handleManageAccounts = () => {
        setActiveComponent("manageAccounts");
    };




    return (

        <div className="container-fluid">


            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
                <div className="logo-container">
                    <Link to="/">
                        <img src="/image/digiPayx_logo.png" alt="Logo" className="logo" />
                    </Link>

                </div>
                {/* <nav>
                    <ul className="nav">
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About DigiPayX</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
                    </ul>
                </nav> */}

                <button className="btn text-white" style={{ marginRight: "40px", width: "90px" }} onClick={handleLeaveClick}>Leave</button>

            </div>





            <div className="row">
                <div className="col-md-2">
                    <Sidebar setActiveComponent={setActiveComponent}/>
                </div>
                <div className="col-md-10">
                {activeComponent === "overview" && <Overview />}
                {activeComponent === "settings" && <Settings handleManageAccounts={handleManageAccounts} />}
                {activeComponent === "manageAccounts" && <ManageAccountsNavbar />}
                </div>
                
            </div>



            {/* <section>
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



                    </div>
                    
                    {showSecondSidebar && (
                        <div className="sidebar" style={{background: "#1E3E6F"}}>

                            <a href="#" onClick={handleSecondSidebarClick}>My Space</a><br />
                            <a href="#" onClick={handleTeamSidebar}>Team</a><br />
                            <a href="#" onClick={handleOrganizationSidebar}>Organization</a>
                        </div>
                    )}

                    {showOnboardinghSidebar && (
                        <div className="sidebar" style={{background: "#1E3E6F"}}>

                            <a href="#" onClick={handleSecondSidebarOnboardingClick}>Candidate</a>

                        </div>
                    )}

                    
                    {showThirdSidebar && (
                        <div className="sidebar" style={{background: "#96B6E8",}}>

                            <a href="#" onClick={handleOverviewSidebar}>Overview</a><br />
                            <a href="#" onClick={handleOverviewSidebar}>Dashboard</a><br />
                            <a href="#" onClick={handleOverviewSidebar}>Calender</a>
                        </div>
                    )}<br />
                    {showTeamSidebar && (
                        <div className="sidebar" style={{background: "#96B6E8"}}>

                            <a href="#" onClick={handleOverviewSidebar}>TeamSpeace</a><br />
                            <a href="#" onClick={handleOverviewSidebar}>Reportees</a><br />
                            <a href="#" onClick={handleOverviewSidebar}>Department</a>
                            <a href="#" onClick={handleOverviewSidebar}>Team List</a>
                            <a href="#" onClick={handleOverviewSidebar}>HR Process</a>
                        </div>
                    )}
                    {showOrganizationSidebar && (
                        <div className="sidebar" style={{background: "#96B6E8"}}>

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




            </section>

             */}

            <footer className="footer text-white py-4">
                <div className="footer-container">
                    <div className="row" style={{ marginLeft: "20px", marginRight: "20px" }}>
                        {/* Logo and Description */}
                        <div className="col-md-3">

                            <img src="image/digiPayx_logo.png" alt="Logo" className="logo" style={{ float: "left" }} />
                            <br /><br />
                            <div>
                                <p style={{ textAlign: "left", color: "white" }}>
                                    Streamline HRMS with DigiPayX – on-time, accurate payments and less admin hassle.
                                </p>
                                <div className="social-icons" style={{ float: "left" }}>
                                    <a href="#" className="me-2"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="me-2"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="me-2"><i className="bi bi-x"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>


                        </div><br />

                        {/* Links */}
                        <div className="col-md-3">
                            <h5 style={{ textAlign: "left" }}>Company</h5>
                            <ul className="list-unstyled" style={{ textAlign: "left", fontSize: "14px", lineHeight: "26pt" }}>
                                <li><a href="#" className="text-white">About DigiPayX</a></li>
                                <li><a href="#" className="text-white">Core Capabilities</a></li>
                                <li><a href="#" className="text-white">Pricing</a></li>
                                <li><a href="#" className="text-white">Contact Us</a></li>
                            </ul>
                        </div><br />

                        {/* Newsletter Signup */}
                        <div className="col-md-3">
                            <h5 style={{ textAlign: "left" }}>Newsletter Sign up</h5>
                            <p style={{ textAlign: "left", color: "white" }}>Be the first to know about new features and product updates.</p>
                            <form>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address" style={{ height: "27px", width: "193px" }}
                                    />
                                    <button className="btn btn-orange" type="submit" style={{ height: "27px", padding: "0px" }}>Subscribe</button>
                                </div>
                            </form>
                        </div><br />

                        {/* Office Address */}
                        <div className="col-md-3" style={{ textAlign: "left", color: "white" }}>
                            <h5>Office Address</h5>
                            <p style={{ color: "white" }}>
                                Ground Floor, Beech, E-1 Manyata Embassy Business Park, Outer Ring
                                Road, Nagawara, Bangalore-560045, Karnataka, India
                            </p>
                            <p style={{ color: "white" }}>
                                <i className="bi bi-telephone-fill me-2"></i>(+91) 8951869552/53
                                <br />
                                <i className="bi bi-telephone-fill me-2"></i>080-25043283
                            </p>
                        </div>
                    </div>
                    <hr />

                    <div className="text-center mt-4">
                        <p className="mb-0 text-white">
                            2024 &copy; All rights reserved by{' '}
                            <a href="#" style={{ color: "#18BAFF" }}>
                                Xdigics Technologies Pvt. Ltd.
                            </a>
                        </p>
                    </div>
                </div>
            </footer>


        </div>
    );
};

export default Dashboard;
