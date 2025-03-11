import React, { useState } from "react";
import './style.css';
import Profile from "./Profile";  // Import Profile Component
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Overview = () => {
    const [showProfile, setShowProfile] = useState(false); // Manage Profile visibility

    const handleProfileClick = () => {
        setShowProfile(true);  // Show Profile Component
    };

    return (
        <div className="container-fluid" style={{ padding: "20px" }}>
            <section>
                <div className="row">
                    <div className="col-md-3 profile-card text-center">
                        <img src="image/04.jpg" alt="Profile Picture" className="rounded-circle mb-3" />
                        <h5>Sangita Sutar</h5>
                        <p className="text-muted">CEO</p>

                        <div className="card-body">
                            <div className="mt-3" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                                <p>Check In <strong>9:30 AM</strong></p>
                                <p>Check Out <strong>7:30 PM</strong></p>
                                <p>Total Hrs <strong>10 Hrs</strong></p>
                            </div>
                            <button className="btn btn-check-in">Check In</button>
                        </div>

                        <div className="card-body">
                            <h6 className="section-title">Reportees</h6>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Jessi - Senior Developer
                                    <span className="badge badge-status badge-check-in">Check-in</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    John - Developer
                                    <span className="badge badge-status badge-check-out">Yet to Check-in</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Tom - Developer
                                    <span className="badge badge-status badge-check-out">Yet to Check-in</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-md-9">
                        <nav className="custom-nav flex-row mb-3">
                            <a className="custom-link active" href="#activities">Activities</a>
                            <a className="custom-link" href="#" onClick={handleProfileClick}>Profile</a> 
                            <a className="custom-link" href="#approvals">Approvals</a>
                            <a className="custom-link" href="#leave">Leave</a>
                            <a className="custom-link" href="#attendance">Attendance</a>
                            <a className="custom-link" href="#timeLogs">Time Logs</a>
                            <a className="custom-link" href="#hrProcess">HR Process</a>
                            <a className="custom-link" href="#careerHistory">Career History</a>
                        </nav>

                        {/* Work Schedule */}
                        {!showProfile ? (
                            <div id="activities">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="section-title" style={{ textAlign: "left", color: "#0649AD" }}>Work Schedule</h5>
                                        <p style={{ textAlign: "left" }}>Shift Time: 9:30 AM - 5:30 PM</p>
                                        <div className="d-flex justify-content-between">
                                            <span>Sunday - 22-Dec</span>
                                            <span>Monday - 23-Dec</span>
                                            <span>Tuesday - 24-Dec</span>
                                            <span>Wednesday - 25-Dec</span>
                                            <span>Thursday - 26-Dec</span>
                                            <span>Friday - 27-Dec</span>
                                            <span>Saturday - 28-Dec</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <span className="text-warning">Weekend</span>
                                            <span className="text-success">Present</span>
                                            <span className="text-danger">Absent</span>
                                            <span className="text-primary">Holiday</span>
                                            <span className="text-success">Present</span>
                                            <span className="text-success">Present</span>
                                            <span className="text-warning">Weekend</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <h6 className="section-title" style={{ textAlign: "left", color: "#0649AD" }}>Announcement</h6>
                                                <p>Welcome to DigiPax! We take care of HR processes while you focus on your employees.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <h6 className="section-title" style={{ color: "#0649AD" }}>Jobs</h6>
                                                <p>No active jobs found for the current week.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Profile />  // Render Profile Component when clicked
                        )}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Overview;
