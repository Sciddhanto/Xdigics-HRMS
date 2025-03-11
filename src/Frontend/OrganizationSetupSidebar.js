import React from "react";
import './style.css';

const OrganizationSetupSidebar = ({ setActiveComponent }) => {
  return (
    <div className="organization-sidebar text-start">
      
      <ul className="sidebar-list">
        <li><button onClick={() => setActiveComponent("organization-details")}>Organization Details</button></li>
        <li><button onClick={() => setActiveComponent("organization-policy")}>Organization Policy</button></li>
        <li><button onClick={() => setActiveComponent("organization-structure")}>Organization Structure</button></li>
        <li><button onClick={() => setActiveComponent("locations")}>Locations</button></li>
        <li><button onClick={() => setActiveComponent("departments")}>Departments</button></li>
        <li><button onClick={() => setActiveComponent("designations")}>Designations</button></li>
        <li><button onClick={() => setActiveComponent("domains-rebranding")}>Domains & Rebranding</button></li>
        <li><button onClick={() => setActiveComponent("from-addresses")}>From Addresses</button></li>
      </ul>
    </div>
  );
};

export default OrganizationSetupSidebar;
