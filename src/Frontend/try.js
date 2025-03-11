import React, { useState } from "react";
import './style.css';

function Try() {
    const [showSecondSidebar, setShowSecondSidebar] = useState(false);
    const [showThirdSidebar, setShowThirdSidebar] = useState(false);
    const [showOnboardinghSidebar, setOnboardinghSidebar] = useState(false);
    const [showTeamSidebar, setshowTeamSidebar] = useState(false);
    const [showOrganizationSidebar, setshowOrganizationSidebar] = useState(false);

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
    }

    const handleEmployeeClick = () => {
        setShowSecondSidebar(false);
        setShowThirdSidebar(false); 
        setOnboardinghSidebar(false);

    }

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

    }

    const handleOverviewSidebar = () => {
        setShowThirdSidebar(false);
    };

    return (
        <div className="dashboard-container" style={{ display: "flex" }}>
            {/* First Sidebar */}
            <div className="sidebar" style={{ width: "250px", background: "#f4f4f4", padding: "20px" }}>

                <a href="#" onClick={handleFirstSidebarClick}>Home</a><br/>
                <a href="#" onClick={handleOnboardingClick}>Onoarding</a><br/>
                <a href="#" onClick={handleEmployeeClick}>Employee</a>
            </div>

            {/* Second Sidebar */}
            {showSecondSidebar && (
                <div className="sidebar" style={{ width: "250px", background: "#e0e0e0", padding: "20px" }}>
                    
                    <a href="#" onClick={handleSecondSidebarClick}>My Space</a><br/>
                    <a href="#" onClick={handleTeamSidebar}>Team</a><br/>
                    <a href="#" onClick={handleOrganizationSidebar}>Organization</a>
                </div>
            )}

            {showOnboardinghSidebar && (
                <div className="sidebar" style={{ width: "250px", background: "#e0e0e0", padding: "20px" }}>
                    
                    {/* <a href="#" onClick={handleSecondSidebarClick}>Candidate</a> */}
                    
                </div>
            )}



            {/* Third Sidebar */}
            {showThirdSidebar && (
                <div className="sidebar" style={{ width: "250px", background: "#d0d0d0", padding: "20px" }}>
                    
                    <a href="#" onClick={handleOverviewSidebar}>Overview</a><br/>
                    <a href="#" onClick={handleOverviewSidebar}>Dashboard</a><br/>
                    <a href="#" onClick={handleOverviewSidebar}>Calender</a>
                </div>
            )}<br/>
            {showTeamSidebar && (
                <div className="sidebar" style={{ width: "250px", background: "#d0d0d0", padding: "20px" }}>
                    
                    <a href="#" onClick={handleOverviewSidebar}>TeamSpeace</a><br/>
                    <a href="#" onClick={handleOverviewSidebar}>Reportees</a><br/>
                    <a href="#" onClick={handleOverviewSidebar}>Department</a>
                    <a href="#" onClick={handleOverviewSidebar}>Team List</a>
                    <a href="#" onClick={handleOverviewSidebar}>HR Process</a>
                </div>
            )}
            {showOrganizationSidebar && (
                <div className="sidebar" style={{ width: "250px", background: "#d0d0d0", padding: "20px" }}>
                    
                    <a href="#" onClick={handleOverviewSidebar}>Overview</a><br/>
                    <a href="#" onClick={handleOverviewSidebar}>Annoucement</a><br/>
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
    );
}

export default Try;
