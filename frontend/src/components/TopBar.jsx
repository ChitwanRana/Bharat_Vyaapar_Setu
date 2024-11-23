import React from "react";

const TopBar = () => {
  return (
    <div
      className="black-background text-white p-1 d-flex justify-content-end"
      style={{ width: "100%", backgroundColor: "black" }}
    >
      <strong>
        Need Help <span style={{ color: "#ff8221" }}>?</span>
      </strong>
    </div>
  );
};

export default TopBar;
