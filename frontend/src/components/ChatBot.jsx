import React, { useState } from "react";
import "./Chatbot.css"; // Add your styles here

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Chatbot Button */}
      <div className="chatbot-button navbackground" onClick={toggleChat}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712081.png" // Replace with your logo URL
          alt="Chatbot Logo"
          className="chatbot-logo"
        />
        <span className="chatbot-name">Setu</span>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="chatbot-window">
          <iframe
            width="350"
            height="430"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/7fcc0a00-7b64-453a-bb80-dcd1ee306aab"
            title="Chatbot iFrame"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Chatbot;
