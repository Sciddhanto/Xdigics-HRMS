import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig"; // Ensure this matches your API setup

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("email"); // Retrieve stored email
    if (!email) {
      alert("Email not found. Please sign up again.");
      return;
    }

    try {
        const response = await api.post(
            "http://localhost:8080/api/auth/verify-otp",  // URL of your backend endpoint
            null,  // No body content, only query parameters
            {
              params: {  // Sending query parameters
                email: email,
                otp: otp,
                withCredentials: false,
              },
            }
          );
      console.log(response);

      if (response.status === 200) {
        alert("OTP Verified Successfully!");
        navigate("/login.js"); // Redirect to dashboard
      }
    } catch (err) {
        console.error("OTP Verification Error:", err.response?.data);
      setError(err.response?.data?.message || "OTP verification failed!");
      
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h2 className="text-center">Verify OTP</h2>
        <p className="text-muted text-center">Enter the OTP sent to your email</p>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleOtpSubmit}>
          <div className="mb-3">
            <label htmlFor="otp" className="form-label">OTP</label>
            <input
              type="text"
              id="otp"
              className="form-control"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Verify OTP</button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerify;
