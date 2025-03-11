import React, { useState } from "react";
import "./style.css";
import { FaBuilding } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";

const OrganizationStructure = () => {
  // Use an object to store multiple toggles
  const [toggles, setToggles] = useState({ orgStructure: false });

  // Toggle function for organization structure
  const handleToggle = () => {
    setToggles((prevToggles) => ({
      ...prevToggles,
      orgStructure: !prevToggles.orgStructure, // Toggle the org structure value
    }));
  };

  return (
    <div>
    <div className="container-fluid p-2 m-1 shadow text-start" style={{ backgroundColor: "#D3D3D3" }}>
      <div className="organization-title fw-semibold">Organization Structure</div>
      
      <section className="justify-content-start text-start m-4">
        <p>Configure your organization's hierarchy and maintain the data of multiple dependent companies in the same account.</p>
        
        {/* Organization Structure Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "10px" }}>
          <label className="toggle-switch">
            <input type="checkbox" checked={toggles.orgStructure} onChange={handleToggle} />
            <span className="slider"></span>
          </label>
          <p className="m-0"><b>Enable Organization Structure</b></p>
        </div>
      </section>

    </div>

    {/* New Sidebar when Organization Structure is enabled */}
    {toggles.orgStructure && (
      <div className="organization-sidebar text-start">
        <ul className="sidebar-list">
          <li><button>Company</button></li>
          <li><button>Business Unit</button></li>
          <li><button>Division</button></li>
          <li><button>Manage Structure</button></li>
        </ul>
      </div>
    )}

    {/* Conditionally Render Section */}
    {toggles.orgStructure && (
        <div className="container-fluid p-2 m-1 mt-2 shadow text-start" style={{ backgroundColor: "#D3D3D3" }}>
            <div className="organization-title fw-semibold">Organization Structure comprises</div>
        <section className="justify-content-start text-start m-4">
        <h6>Edit the component name to suit your organization's style.</h6>
            
        <div style={{ display: "block", alignItems: "center", gap: "10px", marginTop: "20px"}}>
            <div style={{display: "flex", gap: "5px"}}><span style={{ margin: "5px"}}><FaBuilding size={20} /></span><p><b>Legal Entity</b></p></div>
            <p>Independently operated companies under the same parent organization.</p>
      <input type="text" value="Company"/></div>
          
      <div style={{ display: "block", alignItems: "center", gap: "10px", marginTop: "25px"}}>
            <div style={{display: "flex" , gap: "5px"}}><span style={{ margin: "5px"}}><FaBriefcase size={20} /></span><p><b>Business Unit</b></p></div>
            <p>Operational units that exist within an organization.</p>
      <input type="text" value="Business Unit"/></div>

      <div style={{ display: "block", alignItems: "center", gap: "10px", marginTop: "25px"}}>
            <div style={{display: "flex",  gap: "5px"}}><span style={{ margin: "5px"}}><BiAtom size={20} /></span><p><b>Division</b></p></div>
            <p>Functional units within an organization. Existing departments in your account can also be tagged here.</p>
      <input type="text" value="Division"/></div>
        </section><hr />
        <div className="m-2 justify-content-center text-center">
        <button className="m-2 leavebtn">Save</button>
      </div></div>
      )}
      </div>
  );
};

export default OrganizationStructure;