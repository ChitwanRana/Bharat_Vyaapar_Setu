import React from "react";

const NotiFlow = () => {
  const containerStyle = {
    backgroundColor: "#6c757d", // Gray background (Bootstrap secondary color)
    color: "white",
    padding: "5px",
    overflow: "hidden",
    width: "100%",
    height: "30px",
    position: "relative",
    whiteSpace: "nowrap",
  };

  const textStyle = {
    display: "inline-block",
    position: "absolute",
    animation: "flow 10s linear infinite",
    whiteSpace: "nowrap",
    // We will set the text width to ensure it spans enough space to make the animation work properly
    minWidth: "100vw", // Ensure the text takes at least the full viewport width
  };

  // Define keyframes for the animation
  const keyframes = `
    @keyframes flow {
      from {
        transform: translateX(100%); /* Start completely off-screen to the right */
      }
      to {
        transform: translateX(-100%); /* End completely off-screen to the left */
      }
    }
  `;

  // Dynamically add the keyframes into the document's style sheet
  React.useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, [keyframes]);

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        🚀 Welcome to our service! Need Help? Contact us anytime.
      </div>
    </div>
  );
};

export default NotiFlow;
