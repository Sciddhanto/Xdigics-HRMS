import React, { useState } from "react";
import "./style.css";

const Profile = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [aboutText, setAboutText] = useState("");

  const handleSubmit = () => {
    setShowPopup(false);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="profile-container">
        <h3 className="profile-header">Profile Details</h3>
        <br />
        <table className="profile-table" style={{ borderSpacing: "0 15px" }}>
          <tbody>
            <tr>
              <td className="profile-label-department">Department:</td>
              <td className="profile-value-department">Management</td>
              <td style={{ width: "110px", padding: "15px", float: "left" }}></td>
              <td className="profile-label-location">Seating Location:</td>
              <td className="profile-value-location">FL_EXEC_1</td>
              <td style={{ width: "130px", padding: "15px" }}></td>
              <td className="profile-label-extension">Extension:</td>
              <td className="profile-value-extension">1</td>
            </tr>
            <tr>
              <td className="profile-label-shift">Shift:</td>
              <td className="profile-value-shift">General</td>
              <td style={{ width: "110px", padding: "15px" }}></td>
              <td className="profile-label-email">Email Id:</td>
              <td className="profile-value-email">ssutar241997@gmail.com</td>
              <td style={{ width: "110px", padding: "15px" }}></td>
            </tr>
            <tr>
              <td className="profile-label-timezone">Time Zone:</td>
              <td className="profile-value-timezone">(GMT+05:30)</td>
              <td style={{ width: "110px", padding: "15px" }}></td>
              <td className="profile-label-phone">Work Phone:</td>
              <td className="profile-value-phone">9678546754</td>
              <td className="profile-spacer"></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="profile-wrapper">
        <div className="profile-section profile-about-container">
          <h3
            className="profile-about"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            About
            <span
              onClick={() => setShowPopup(true)}
              style={{ marginLeft: "10px", cursor: "pointer" }}
            >
              ✏️
            </span>
          </h3>
        </div>

        <div className="profile-section profile-tags-container">
          <h3 className="profile-tags">Tags</h3>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <img src="image/icon.png" alt="Icon" className="popup-icon" />
              <h3>About Me</h3>
              <button className="popup-close" onClick={handleCancel}>✖</button>
            </div>
            <textarea
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              className="popup-textarea"
              placeholder="Write something..."
            />
            <div className="popup-buttons">
              <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
              <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
