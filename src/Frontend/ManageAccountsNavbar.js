import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ManageAccountsNavbar = () => {
  const navigate = useNavigate();
  return (
    <nav style={{ backgroundColor: "#05224A", color: "white", padding: "10px", display: "flex", alignItems: "center" }}>
      {/* Clickable Manage Accounts */}
      <Link to="/manage-accounts" style={{ textDecoration: "none", color: "white", marginRight: "20px", textAlign: "center" }}>
        <span style={{ fontWeight: "bold", display: "block", marginRight: "20px" }}>Manage Accounts</span>
      </Link>

      {/* Navigation Links */}
      <div style={{ gap: "30px" }}>
        <Link to="/users" style={navLinkStyle}>Users</Link>
        <Link to="/organization-structure" style={navLinkStyle}>Organization Setup</Link>
        <Link to="/user-access-control" style={navLinkStyle}>User Access Control</Link>
        <Link to="/manage-service" style={navLinkStyle}>Manage Service</Link>
        <Link to="/automation" style={navLinkStyle}>Automation</Link>
        <Link to="/approvals" style={navLinkStyle}>Approvals</Link>
        <Link to="/subscription" style={navLinkStyle}>Subscription</Link>
      </div>
    </nav>
  );
};

// Inline styles for navigation links
const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  marginRight: "15px",
};

export default ManageAccountsNavbar;
