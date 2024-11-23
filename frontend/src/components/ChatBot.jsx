import React, { useState } from "react";
import "./Chatbot.css"; // Add your styles here

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]); // Store chat messages
  const [inputMessage, setInputMessage] = useState(""); // Track user input

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Handle sending a message
  const handleSendMessage = (event) => {
    event.preventDefault(); // Prevent form submission

    if (inputMessage.trim()) {
      // Add user message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, sender: "user" },
      ]);

      // Clear the input field
      setInputMessage("");

      // Simulate bot response (This can be replaced with an actual API call)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "How can I assist you?", sender: "bot" },
        ]);
      }, 1000); // Simulate bot delay
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <div className="chatbot-button" onClick={toggleChat}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712081.png" // Replace with your logo URL
          alt="Chatbot Logo"
          className="chatbot-logo"
        />
        <span className="chatbot-name">Chitwan</span>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h5 className="chatbot-title">ChatBot</h5>
            <button className="close-chat" onClick={toggleChat}>
              ✕
            </button>
          </div>
          <div className="chatbot-body">
            {/* Display messages */}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.sender}`}
                style={message.sender === "bot" ? botMessageStyle : userMessageStyle}
              >
                <p>{message.text}</p>
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            <form onSubmit={handleSendMessage}>
              <input
                type="text"
                className="message-input"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button type="submit" className="send-btn">
                Arw
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

const botMessageStyle = {
  backgroundColor: "#f1f1f1",
  padding: "10px",
  borderRadius: "8px",
  marginBottom: "10px",
};

const userMessageStyle = {
  backgroundColor: "#007bff",
  padding: "10px",
  borderRadius: "8px",
  color: "white",
  marginBottom: "10px",
};

export default Chatbot;
