import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import './style.css';

const HomePage = () => {

    const [activeContent, setActiveContent] = useState('automation');

    const handleShowContent = (contentId) => {
        setActiveContent(contentId);
    };

    const navigate = useNavigate();

    const handleLoginClick = () => {
        window.location.href = "/login.js"; // Redirect to login.js or an appropriate URL
      };


    return (


        // <div className="home-page">
        //     <nav className="navbar">
        //         <div className="logo-container">
        //             <img src="image/digiPayx_logo.png" alt="Logo" className="logo" />
        //         </div>
        //         <ul className="navbar-list">
        //             <li className="navbar-item"><a href="#home">Home</a></li>
        //             <li className="navbar-item"><a href="#about">About DigiPayX</a></li>
        //             <li className="navbar-item"><a href="#features">Features</a></li>
        //             <li className="navbar-item"><a href="#pricing">Pricing</a></li>
        //             <li className="navbar-item"><a href="#contact">Contact Us</a></li>
        //             <li className="navbar-item"><button className="btn">Login</button></li>
        //         </ul>

        //     </nav>

        //     <div class="container">
        //         <div class="row">

        //             <div class="col-lg-7 mb-auto ">
        //                 <div class="ps-0 ps-xl-5 ">
        //                     <div class="d-flex mb-3">
        //                     </div>
        //                     <h3 class="text mt-5 float-start">Effortlessly Manage Your Payroll with DigiPayX Software</h3>
        //                     <h7 class="text">Concentrate on expanding your business while DigiPayX takes care of HR, payroll, compliance, and more with seamless automation and expert support.</h7>


        //                     <p class="mt-4" >Transform Your Payroll Process – Fast, Simple, and Secure!
        //                     </p>

        //                     <form class="mt-5">

        //                         <button type="button" class="free-ft">
        //                             Start 14 days free trial
        //                         </button>
        //                     </form>
        //                 </div>
        //             </div>

        //             <div class="col-md-4 mb-4 mb-lg-0 m-auto ">
        //                 <div class=" rounded-sm bg-primary1 text-center d-grid border-top">
        //                     <div class="pt-3">


        //                     </div>

        //                     <br />



        //                 </div>
        //             </div>
        //         </div>
        //     </div>



        // </div >

        <div className="container-fluid">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
                <div className="logo-container">
                    <img src="image/digiPayx_logo.png" alt="Logo" className="logo" />
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
                <button className="btn text-white" style={{ marginRight: "40px", width: "90px" }} onClick={handleLoginClick}>Login</button>
            </div>

            <section>

                {/* Main Content Section */}
                <div className="row align-items-center mt-5">
                    {/* Left Content */}
                    <div className="col-md-7">
                        <div class="circle-section">
                            <div class="circle-content" style={{ marginLeft: "20px", marginTop: "-20px" }}>
                                <h2 style={{ textAlign: "left", color: "black" }}>Effortlessly Manage Your HRMS with DigiPayX Software</h2>
                                <p style={{ textAlign: "left", color: "black" }}>
                                    Concentrate on expanding your business while DigiPayX takes care of HR,
                                    HRMS, compliance, and more with seamless automation and expert support.
                                </p>
                                <h5 style={{ textAlign: "left", color: "#FC4908", fontWeight: "bold" }}>
                                    Transform Your HRMS Process – Fast, Simple, and Secure!
                                </h5>
                                <button class="btn btn-primary" style={{ float: "left", width: "200px" }}>Start 14 days free trial</button>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Section */}
                    <div className="col-md-5 position-relative">
                        <div className="card p-4 shadow-lg" style={{ backgroundColor: "#004AAD", color: "white", width: "395px", height: "445px" }}>
                            <h3 className="mb-4 text-white"><b>Get Started</b></h3>
                            <form>


                                <div class="form-row">
                                    <input type="text" class="form-control" placeholder="First Name" style={{ width: "159px", height: "33px" }} />
                                    <input type="text" class="form-control" placeholder="Last Name" style={{ width: "159px", height: "33px" }} />
                                </div>
                                <br />

                                <div class="form-row">
                                    <input type="email" className="form-control" placeholder="Work Email" style={{ width: "159px", height: "33px" }} />
                                    <input type="text" className="form-control" placeholder="Phone No." style={{ width: "159px", height: "33px" }} />
                                </div>
                                <br />


                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Company Name" style={{ width: "345px", height: "33px" }} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Company Size" style={{ width: "345px", height: "33px" }} />
                                </div>
                                <p className="text-white" style={{ fontSize: "12px", textAlign: "left" }}>
                                    We respect your data. By submitting this form, you agree that we will contact you in relation to our products and services, in accordance with our privacy policy.</p>
                                <button type="submit" className="btn btn-danger">Book a Demo</button>
                            </form>

                            {/* HRMS Illustration */}
                            <img
                                src="image/hrms-vector.png"
                                alt="Hrms Illustration"
                                className="illustration-wrapper"
                            />

                        </div>

                    </div>


                </div>

            </section>

            <section>
                <div className="row align-items-center mt-5">
                    <h2 style={{ color: "#0649AD" }}>Take Control of Your HRMS with <b style={{ color: "#2B2929" }} >DigiPayX</b></h2>
                    <div className="col-md-6">
                        <div class="square-container">
                            <div class="square"></div>
                            <img src="image/about_company.png"
                                alt="About DigiPayX"
                                class="top-image" />

                        </div><br /><br />


                    </div>
                    <div className="col-md-6">
                        <h4 class="text-para" style={{ color: "#FC4908" }}><b>Streamlined HRMS Workflow</b></h4>
                        <p class="text-para">DigiPayX simplifies HRMS with automated salary calculations, tax compliance, and secure data management. Enjoy seamless benefits administration, digital pay slips, and efficient processes, ensuring accuracy, transparency, and peace of mind for your business.</p><br />

                        <h4 class="text-para" style={{ color: "#FC4908" }}><b>Begin Your DigiPay Experience</b></h4>
                        <p class="text-para">Getting started with DigiPayX is simple—just create an account, input employee details, and set HRMS preferences. The platform automates time tracking, benefits, tax settings, and ensures compliance, offering real-time data access and seamless HRMS management.</p>


                    </div>
                </div>

            </section><br /><br />
            <section>

                <div class="cta-container">
                    <img src="image/form-demo.png"
                        alt="CTA DigiPayX"
                        class="cta-image" />
                    <h4>Get Ready to Start Free access to DigiPayX Software</h4>
                    <button class="cta-button">Start Your Free Trial</button>
                </div>
            </section><br /><br />

            <section class="feaures_digipay">
                <h2 style={{ color: "#0649AD" }}>Discover the Value of <b style={{ color: "#2B2929" }} >DigiPayX</b></h2><br />

                <div class="card-container">

                    <div class="card">
                        <img src="image/istockphoto.png" alt="Card Image" class="card-img" />
                        <h3><b>Time Saver</b></h3>
                        <p>Time Saver in digiPayX automates HRMS, time tracking, and tax filing, reducing manual tasks and ensuring faster, accurate processing.</p>
                    </div>

                    <div class="card">
                        <img src="image/risk-management.png" alt="Card Image" class="card-img" />
                        <h3><b>Accuracy Improvement</b></h3>
                        <p>Accuracy Improvement in digiPayX enhances HRMS precision by automating calculations, reducing human errors, and ensuring correct tax and benefit processing.</p>
                    </div>

                    <div class="card">
                        <img src="image/cost-efficiency.jpg" alt="Card Image" class="card-img" />
                        <h3><b>Cost Efficiency</b></h3>
                        <p>Cost Efficiency in digiPayX reduces operational expenses by automating processes, minimizing errors, and streamlining HRMS management, leading to savings.</p>
                    </div>

                    <div class="card">
                        <img src="image/self-mangement.png" alt="Card Image" class="card-img" />
                        <h3><b>Employee Self-Management</b></h3>
                        <p>Employee Self-Management in digiPayX allows employees to view pay details, update information, request leave, and manage benefits independently.</p>
                    </div>

                    <div class="card">
                        <img src="image/online-tax.jpg" alt="Card Image" class="card-img" />
                        <h3><b>Tax Conformance</b></h3>
                        <p>Tax Conformance in digiPayX ensures accurate tax calculations, timely filings, and adherence to local tax laws, minimizing legal risks.</p>
                    </div>

                    <div class="card">
                        <img src="image/paying.png" alt="Card Image" class="card-img" />
                        <h3><b>Payslip Generation</b></h3>
                        <p>Payslip Generation in digiPayX automatically creates detailed salary statements, providing employees with clear breakdowns of earnings, deductions, and net pay.</p>
                    </div>
                </div>

            </section>

            <section>
                <div className="row align-items-center mt-5">
                    <h2 style={{ color: "#0649AD" }}>Scalable & Compliant HRMS Solution </h2>

                    <div className="col-md-6">

                        <p class="text-para-sc">Easily manage HRMS at every stage of your business growth with DigiPayX.</p><br />

                        <ul class="text-para-sc">
                            <li>Boost efficiency with automation</li>
                            <li>Stay fully compliant with tax laws</li>
                            <li>Cut down on HRMS-related costs</li>
                        </ul><br />
                        <p class="text-para-sc">DigiPay adapts to your needs, providing a secure, compliant, and streamlined HRMS solution.</p>


                    </div>
                    <div className="col-md-6">
                        <div class="square-container">
                            <div class="square"></div>
                            <img src="image/scalable_payroll.png"
                                alt="About DigiPayX"
                                class="top-image" />

                        </div><br /><br />


                    </div>
                </div>

            </section><br /><br />
            <section>


                <div className="advantages-container">

                    <h2 style={{ color: "#0649AD" }}>Key Advantages of Choosing <b style={{ color: "#2B2929" }} >DigiPayX</b></h2>


                    <hr class="hr-line" />

                    <div class="vertical-row">
                        <div class="column">
                            <div className="line" style={{ marginLeft: "125px" }}></div>
                        </div>
                        <div class="column">
                            <div className="line" style={{ marginLeft: "200px" }}></div>

                        </div>
                        <div class="column">
                            <div className="line" style={{ marginLeft: "220px" }}></div>
                        </div>
                        <div class="column">
                            <div className="line" style={{ marginLeft: "200px" }}></div>
                        </div>
                        <div class="column">
                            <div className="line" style={{ marginLeft: "200px" }}></div>
                        </div>
                        <div class="column">
                            <div className="line" style={{ marginLeft: "220px" }}></div>
                        </div>
                    </div>






                    <div className="advantages-grid">

                        <div className="advantage">
                            <h2 className="advantage-title automation">Automation</h2>
                            <p style={{ textAlign: "left", color: "black" }}>Streamlines payroll tasks, ensuring quicker and more accurate processing with minimal manual effort.</p>
                        </div>

                        <div className="advantage">
                            <h2 className="advantage-title compliance">Compliance Assurance</h2>
                            <p style={{ textAlign: "left", color: "black" }}>Automatically updates to ensure adherence to local tax laws and regulations.</p>
                        </div>

                        <div className="advantage">
                            <h2 className="advantage-title cost">Cost Efficiency</h2>
                            <p style={{ textAlign: "left", color: "black" }}>Reduces operational expenses by automating tasks and minimizing errors, leading to savings.</p>
                        </div>

                        <div className="advantage">
                            <h2 className="advantage-title self-service">Employee Self-Service</h2>
                            <p style={{ textAlign: "left", color: "black" }}>Allows employees to access and manage their payroll, personal data, and benefits independently.</p>
                        </div>

                        <div className="advantage">
                            <h2 className="advantage-title security">Data Security</h2>
                            <p style={{ textAlign: "left", color: "black" }}>Ensures sensitive payroll information is protected with advanced encryption and secure access.</p>
                        </div>

                        <div className="advantage">
                            <h2 className="advantage-title scalability">Scalability</h2>
                            <p style={{ textAlign: "left", color: "black" }}>Adapts to businesses of all sizes, supporting growth from small companies to large enterprises.</p>
                        </div>
                    </div>

                </div>



            </section>
            <section>

                <div class="cta-container2">

                    <div class="cta-square"></div>
                    <div class="cta-square1"></div>
                    <h4>Get Ready to Start Free access to DigiPayX Software</h4>
                    <button class="cta-button">Start Your Free Trial</button>
                </div>
            </section><br /><br />

            <section>
                <h2 style={{ color: "#0649AD" }}>
                    Benifits of <b style={{ color: "#2B2929" }}>DigiPayX's</b> Payroll Software
                </h2><br /><br />
                <div className="menu-container">
                    <div className="menu-buttons">
                        <button
                            className={`menu-button ${activeContent === 'automation' ? 'active' : ''}`}
                            onClick={() => handleShowContent('automation')}
                        >
                            Employee Management
                        </button>
                        <button
                            className={`menu-button ${activeContent === 'compliance' ? 'active' : ''}`}
                            onClick={() => handleShowContent('compliance')}
                        >
                            Attendance Management
                        </button>
                        <button
                            className={`menu-button ${activeContent === 'costEfficiency' ? 'active' : ''}`}
                            onClick={() => handleShowContent('costEfficiency')}
                        >
                            Leave Management
                        </button>
                        <button
                            className={`menu-button ${activeContent === 'employeeSelfService' ? 'active' : ''}`}
                            onClick={() => handleShowContent('employeeSelfService')}
                        >
                            Financial Management
                        </button>
                        <button
                            className={`menu-button ${activeContent === 'dataSecurity' ? 'active' : ''}`}
                            onClick={() => handleShowContent('dataSecurity')}
                        >
                            Document Management
                        </button>
                    </div>

                    <div className="content-display">
                        {activeContent === 'automation' && (
                            <div className="content-item active">
                                <h2 className="content-title">Employee Management</h2>
                                <img src="image/employee-management.png"
                                    alt="Employee Management"
                                />
                                <ul className="content-text">
                                    <li>
                                        Centralized Employee Data: Stores all employee information in one
                                        place, ensuring easy access and management for HR teams.
                                    </li>
                                    <li>
                                        Performance Tracking: Monitors employee performance, providing
                                        valuable insights to improve productivity and identify areas for
                                        development.
                                    </li>
                                    <li>
                                        Leave and Attendance Management: Automates leave requests,
                                        approvals, and attendance tracking, ensuring accurate records and
                                        streamlined processes.
                                    </li>
                                    <li>
                                        Employee Engagement: Facilitates better communication and feedback
                                        channels, helping boost employee satisfaction and retention.
                                    </li>
                                </ul>
                            </div>
                        )}
                        {activeContent === 'compliance' && (
                            <div className="content-item active">
                                <h2 className="content-title">Attendance Management</h2>
                                <img src="image/Attendance-management.webp"
                                    alt="Employee Management"
                                />
                                <ul className="content-text">
                                    <li>Automated Time Tracking: Accurately records employee work hours, minimizing errors and ensuring timely attendance data collection.</li>
                                    <li>Leave Management: Streamlines leave requests, approvals, and balances, providing employees with a transparent system for managing time off.</li>
                                    <li>Real-Time Monitoring: Enables managers to track employee attendance in real-time, identifying absenteeism or lateness quickly for corrective action.</li>
                                    <li>Integration with Payroll: Seamlessly integrates attendance data with payroll systems, ensuring accurate compensation for work hours and overtime.</li>
                                </ul>
                            </div>
                        )}
                        {activeContent === 'costEfficiency' && (
                            <div className="content-item active">
                                <h2 className="content-title">Leave Management</h2>
                                <img src="image/Leave-Management.png"
                                    alt="Employee Management" style={{ width: "520px", height: "306px" }}
                                />
                                <ul className="content-text">
                                    <li>Leave Request Submission: Employees can easily submit leave requests through the platform, specifying type (vacation, sick, etc.) and dates.</li>
                                    <li>Approval Workflow: Managers can review, approve, or reject leave requests in real-time, streamlining the approval process and reducing delays.</li>
                                    <li>Leave Balance Tracking: Automatically tracks and updates available leave balances, ensuring employees and managers are always aware of remaining days off.</li>
                                    <li>Integration with Payroll: Leave data is seamlessly integrated with payroll systems, ensuring accurate pay calculations for employees on leave.</li>
                                </ul>
                            </div>
                        )}
                        {activeContent === 'employeeSelfService' && (
                            <div className="content-item active">
                                <h2 className="content-title">Financial Management</h2>
                                <ul className="content-text">
                                    <li>Streamline payroll and financial processes efficiently.</li>
                                </ul>
                            </div>
                        )}
                        {activeContent === 'dataSecurity' && (
                            <div className="content-item active">
                                <h2 className="content-title">Document Management</h2>
                                <ul className="content-text">
                                    <li>Securely manage and store documents digitally.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section><br /><br />
            <section>
                <h2 style={{ color: "#0649AD" }}>Comprehensive Payroll Solution for Businesses of Any Size</h2><br />

                <div class="card-container">

                    <div class="card" style={{ border: "none" }}>
                        <img src="image/small-business.jpg" alt="Card Image" class="card-img" />
                        <h3><b>Small Business</b></h3>
                        <p>The payroll solution for small businesses offers simplicity and affordability. It automates payroll processing, tax calculations, and compliance, reducing manual tasks and errors. Employees can easily access pay details through a self-service portal, and business owners benefit from time and cost savings with an intuitive, easy-to-use system.</p>
                    </div>

                    <div class="card" style={{ border: "none" }}>
                        <img src="image/medium_company.png" alt="Card Image" class="card-img" />
                        <h3><b>Medium Business</b></h3>
                        <p>For medium-sized businesses, the payroll solution scales with growth, handling complex payroll needs while maintaining accuracy and compliance. It provides advanced features like leave management, performance tracking, and seamless integration with other HR systems, ensuring smooth payroll operations as your workforce expands.</p>
                    </div>

                    <div class="card" style={{ border: "none" }}>
                        <img src="image/large_company.jpg" alt="Card Image" class="card-img" />
                        <h3><b>Large Business</b></h3>
                        <p>Large businesses benefit from a robust, enterprise-level payroll solution that can handle high volumes of employees and complex payroll structures. With features like real-time reporting, multi-jurisdiction tax compliance, and employee self-management tools, the solution ensures accurate payroll processing, reduces administrative burdens, and maintains full compliance across multiple departments or locations.</p>
                    </div>
                </div>

            </section><br /><br />
            <section>
                <h2 style={{ color: "#0649AD" }}>Core Capabilities</h2>

                <div className="row align-items-center mt-5">


                    <div className="col-md-6">


                        <h2 className="content-title">Administrator</h2>

                        <ul class="text-para-sc">
                            <li>User Management: Admins can easily create, update, and manage employee profiles, assign roles, and control user access for secure payroll processing.</li>
                            <li>Automated Payroll Processing: Automates salary calculations, deductions, bonuses, and taxes, ensuring accurate, on-time payments for employees.</li>
                            <li>Compliance and Tax Management: Ensures full compliance with local, state, and federal regulations by automating tax filing and generating required reports.</li>
                            <li>Real-Time Reporting and Analytics: Provides instant access to payroll, tax, and attendance reports, enabling data-driven decisions and efficient operations.</li>
                            <li>Leave and Attendance Monitoring: Manages and tracks employee leave requests, approvals, and attendance, integrating seamlessly with payroll for accurate compensation.</li>
                        </ul><br />


                    </div>
                    <div className="col-md-6">
                        <div class="square-container">
                            <div class="square"></div>
                            <img src="image/Admin.png"
                                alt="About DigiPayX"
                                class="top-image" />

                        </div>


                    </div>
                </div>
                <div className="row align-items-center mt-5">

                    <div className="col-md-6">
                        <div class="square-container">
                            <div class="square"></div>
                            <img src="image/employee.png"
                                alt="About DigiPayX"
                                class="top-image" />

                        </div>

                    </div>


                    <div className="col-md-6">

                        <h2 className="content-title">Employee</h2>

                        <ul class="text-para-sc">
                            <li>Self-Service Portal: Employees can view and download payslips, update personal details, and manage their benefits through a secure, user-friendly portal.</li>
                            <li>Leave and Attendance Management: Easily submit and track leave requests, including vacation, sick leave, and other types of time off.</li>
                            <li>Payroll Transparency: Access detailed breakdowns of earnings, deductions, bonuses, and taxes, ensuring full transparency in salary processing.</li>
                            <li>Direct Deposit Setup: Employees can securely set up and manage direct deposit information for faster and safer payments.</li>
                            <li>Tax Information Access: View and download tax forms (e.g., W-2) for personal tax filing, ensuring quick and easy access to important documents.</li>
                        </ul><br />

                    </div>

                </div>

            </section><br /><br />
            <section>
                <div className="contact-us-section">
                    <div className="container py-5">
                        <h2 style={{ color: "#0649AD" }}>Contact Us</h2>

                        <div className="row align-items-center">
                            {/* Contact Info Card */}
                            <div className="col-md-2">
                                <div className="contact-info-card p-4 shadow">
                                    <h4 className="mb-4 text-danger">Contact Info</h4>
                                    <p>
                                        <i className="bi bi-telephone-fill me-2"></i>+91-8951869552/53/56
                                    </p><br />
                                    <h5 className="mt-3"><b>Office Address</b></h5>
                                    <p>
                                        <i className="bi bi-geo-alt-fill me-2"></i>
                                        Ground Floor, Beech, E-1 Manyata Embassy Business Park, Outer
                                        Ring Road, Nagawara, Bangalore-560045, Karnataka, India
                                    </p>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="col-md-10">
                                <div className="contact-form-card p-4 shadow" style={{ backgroundImage: "url(image/get_in_touch.png)" }} >

                                    <div class="contactUs-form">
                                        <h4 className="mb-4 text-white">Contact Us</h4>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="First Name"
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Last Name"
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Country"
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Company Name"
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Phone No."
                                                    />
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <textarea
                                                        className="form-control"
                                                        rows="4"
                                                        placeholder="Message"
                                                    ></textarea>
                                                </div>
                                                <div className="col-12 text-end">
                                                    <button type="submit" className="btn btn-primary" style={{ width: "105px" }}>
                                                        Send
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


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


export default HomePage;







