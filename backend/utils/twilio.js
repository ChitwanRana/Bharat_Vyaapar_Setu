require('dotenv').config();
const twilio = require('twilio');

// Initialize the Twilio client
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Twilio SMS sending function
const sendAlert = (message, phoneNumber) => {
  return client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    })
    .then((message) => {
      console.log(`Alert sent: ${message.sid}`);
      return message;
    })
    .catch((err) => {
      console.error('Error sending alert:', err);
      throw err;
    });
};

module.exports = sendAlert;
