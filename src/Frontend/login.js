import React, { useState } from "react";
import './style.css';
import { Link } from "react-router-dom";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const handleSignupClick = () => {
        window.location.href = "/sign_up.js"; // Redirect to sign_up.js or an appropriate URL
    };

    const navigate = useNavigate();


    const handleDashboardClick = () => {
        navigate("/dashboard"); // Redirect to login.js or an appropriate URL
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          const response = await api.post(`http://localhost:8080/api/auth/login`, {
            email,password});
          
          // Assuming the API returns a token upon successful login
          if (response.status === 200) {
            const token = response.data.token;
            localStorage.setItem("token", token); // Store token for authentication
            alert("Login successful!");
            navigate("/dashboard");
          }
        } catch (err) {
          if (err.response) {
            // Handle error responses from API
            setError(err.response.data.message || "Login failed!");
            console.error(error); //error code 400 bad request
          } else {
            // Handle network or unexpected errors
            setError("An unexpected error occurred. Please try again."); 
            console.error(error);  //error code 500 internal server error to be configured later
          }
        }
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
                <nav>
                    <ul className="nav">
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About DigiPayX</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
                    </ul>
                </nav>

            </div>
            <section>
                <div className="login-page d-flex align-items-center justify-content-center vh-100">
                    <div className="login-container d-flex">
                        {/* Left Section */}
                        <div className="login-info p-4" style={{ textAlign: "left" }}>
                            <h1>Welcome to DigiPayX HRMS Management System</h1>
                            <p>
                                Streamline HRMS with DigiPayX – on-time, accurate payments, and
                                less admin hassle.
                            </p>
                            <img
                                src="/image/signup_page.png" // Replace with your image path
                                alt="Login Illustration"
                                className="img-fluid"
                            />
                        </div>

                        {/* Right Section */}
                        <div className="login-form p-4">
                            <h2>Login</h2><br />
                            <form>
                                <div className="form-group mb-3" style={{ textAlign: "left" }}>
                                    <label htmlFor="emailid" >Email id</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailid"
                                        placeholder="Enter your Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-3" style={{ textAlign: "left" }}>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <button type="submit" onClick={handleLogin} className="btn btn-primary" style={{ float: "left" }}>
                                        Log In
                                    </button>
                                    <a href="/email_verification" className="text-decoration-none" style={{ float: "right" }}>
                                        Forget Password
                                    </a>
                                </div><br /><br />
                                <p className="mt-3">
                                    Create an account then{" "}
                                    <a href="#" onClick={handleSignupClick} className="text-primary text-decoration-none">
                                        Sign Up
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>

                </div>

            </section>
            <footer className="footer text-white py-4" >
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

export default Login;