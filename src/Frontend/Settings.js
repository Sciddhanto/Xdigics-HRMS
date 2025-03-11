import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Settings = ({ handleManageAccounts }) => {
    const services = [
        { name: "Onboarding", icon: "image/onboarding.png" },
        { name: "Employee Information", icon: "image/Employee Information.png" },
        { name: "Leave Tracker", icon: "image/Leave Tracker.png" },
        { name: "Attendance", icon: "image/attendance.png" },
        { name: "Shifts", icon: "image/shifts.png" },
        { name: "Time Tracker", icon: "image/time-tracker.png" },
        { name: "Performance", icon: "image/performance.png" },
        { name: "Files", icon: "image/files.png" },
        { name: "Employee Engagement", icon: "image/Employee Engagement.png" },
        { name: "Cases", icon: "image/cases.png" },
        { name: "HR Letter", icon: "image/HR letter.png" },
        { name: "Travel", icon: "image/travel.png" },
        { name: "Tasks", icon: "image/tasks.png" },
        { name: "Compensation", icon: "image/Compensation.png" },
        { name: "General", icon: "image/general.png" },
        { name: "Marketplace", icon: "image/marketplace.png" },
        { name: "Developer Space", icon: "image/Developer Space.png" },
        { name: "Manage Accounts", icon: "image/Manage Accounts.png", action: handleManageAccounts }
    ];

    return (
        <div className="settings-container">
            {/* Profile Card */}
            <div className="settings-profile-card container-fluid shadow" style={{backgroundColor:'white'}}>
                <img src="image/profile.png" alt="Sangita Sutar" className="settings-profile-pic" />
                <div className="settings-profile-info">
                    <h3>Sangita Sutar</h3>
                    <p>Admin, Freelancer</p>
                </div>
            </div>

            {/* Add Services Button */}
            <button className="add-services">
                <span className="plus-icon">+</span> Add Services
            </button>

            {/* Services Section */}
            <h2>Services</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div 
                    key={index} 
                    className="service-item"
                    onClick={service.action ? service.action : undefined}
                    >
                        <img src={service.icon} alt={service.name} />
                        <p>{service.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Settings;
