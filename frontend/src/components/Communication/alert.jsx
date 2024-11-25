import React, { useState } from "react";
import { toast } from "react-toastify";
import styles from "./alert.module.css";

const Alert = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [message, setMessage] = useState(""); // State for message
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!countryCode || !phoneNumber || !message) {
      setError("Please enter country code, phone number, and a message.");
      return;
    }

    if (!/^\+?\d+$/.test(countryCode)) {
      setError("Invalid country code format. It should start with '+' followed by numbers.");
      return;
    }

    if (!/^\d+$/.test(phoneNumber)) {
      setError("Phone number should contain only numbers.");
      return;
    }

    setError(""); // Clear previous errors

    const payload = {
      message: message, // Send the custom message
      phoneNumber: `${countryCode}${phoneNumber}`,
    };

    try {
      const response = await fetch(
        "https://bharat-vyaapar-setu-e522.onrender.com/api/send-alert",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (!data.success) {
        toast.error(data.error);  // Display error message from backend
      }
      if (response.ok) {
        toast.success(data.message || "Alert sent successfully!");
        setPhoneNumber("");
        setCountryCode("");
        setMessage(""); // Clear message field after sending
      } else {
        const error = await response.json();
        console.log(error);
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className="header">Send Alert</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="countryCode" className={styles.label}>
            Country Code:
          </label>
          <input
            id="countryCode"
            type="text"
            placeholder="+91"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className={styles.input}
            required
          />

          <label htmlFor="phoneNumber" className={styles.label}>
            Phone Number:
          </label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="9876543210"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={styles.input}
            required
          />

          <label htmlFor="message" className={styles.label}>
            Message:
          </label>
          <textarea
            id="message"
            placeholder="Enter your custom message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.input}
            rows="4" // Adjust number of rows for the textarea
            required
          ></textarea>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Alert;
