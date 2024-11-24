import React, { useState } from "react";

const TopBar = () => {
  const [zoomLevel, setZoomLevel] = useState(100); // Zoom level state

  const handleZoomIn = () => {
    if (zoomLevel < 150) { // Set max zoom limit
      setZoomLevel(zoomLevel + 10);
      document.body.style.zoom = `${zoomLevel + 10}%`;
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 50) { // Set min zoom limit
      setZoomLevel(zoomLevel - 10);
      document.body.style.zoom = `${zoomLevel - 10}%`;
    }
  };

  return (
    <div
      className="d-flex justify-content-between align-items-center px-4 py-1"
      style={{
        width: "100%",
        backgroundColor: "black",
        color: "white",
        fontSize: "14px",
      }}
    >
      {/* Left Side */}
      <div className="d-flex align-items-center">
        {/* Language Dropdown */}
        <div className="dropdown me-4">
          <span
            style={{ cursor: "pointer" }}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <strong>English ▼</strong>
          </span>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" onClick={() => alert("English Selected")}>
                English
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => alert("Hindi Selected")}>
                Hindi
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => alert("Spanish Selected")}>
                Spanish
              </button>
            </li>
          </ul>
        </div>

        {/* Radio Button for Dark Mode */}
        <div className="me-4">
          <label>
            <input
              type="radio"
              className="me-2"
              onChange={() => alert("Dark Mode Activated")}
            />
            <strong>Dark Mode</strong>
          </label>
        </div>

        {/* Font Size Adjusters */}
        <div className="me-4">
          <span
            onClick={handleZoomOut}
            style={{ cursor: "pointer", marginRight: "10px" }}
          >
            <strong>A-</strong>
          </span>
          <span
            onClick={handleZoomIn}
            style={{ cursor: "pointer", marginLeft: "10px" }}
          >
            <strong>A+</strong>
          </span>
        </div>

        {/* Skip to Main Content */}
        <a href="/" className="me-4 text-decoration-none text-white">
          <strong>Skip to Main Content</strong>
        </a>
      </div>

      {/* Right Side */}
      <div className="d-flex align-items-center">
        <strong>
          Need Help <span style={{ color: "#ff8221" }}>?</span>
        </strong>
      </div>
    </div>
  );
};

export default TopBar;
