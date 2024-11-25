Bharat Vyapaar Setu: https://bharatvyaparsetu.netlify.app/

Bharat Vyapaar Setu is a platform designed to empower Indian SMBs to seamlessly navigate global trade complexities by
streamlining export processes, optimizing logistics, automating compliance documentation, and enabling real-time communication. 
This repository contains the source code, instructions, and open-source disclosures required for the project.

Features
Automated Rate Comparison & Negotiation: Leverages AI to fetch real-time shipping rates and negotiate the best prices.

Shipment Tracking & Alerts: Real-time tracking and alerts for shipment delays and customs clearances.

Document Compliance & Management: AI-powered tools for OCR-based document verification and secure digital contract management.

Query Resolution & Communication: Multi-channel communication (WhatsApp, email, in-app messaging) with an integrated ticketing system.

Analytics & Insights: Predictive analytics and KPI dashboards for operational optimization.

Security & Payments: AWS Cognito authentication and UPI/Stripe payment integration for secure transactions.


Tech Stack:

Backend
Node.js: Backend runtime environment.
Express.js: REST API development.
AWS Services: Cognito for authentication and S3 for storage.

Frontend
React.js: Frontend framework for building the user interface.
Material-UI: Enhancing UI/UX with pre-built components.

APIs and Libraries
Google Maps API: Shipment tracking and mapping.
Twilio: Notifications and alerts.
Amazon SP-API: Fetching and comparing shipping rates.
TensorFlow: Predictive analytics for operational insights.

Prerequisites:
Install Node.js (version 16.0 or later).
Install npm or yarn for package management.
Have a valid API key for Google Maps and Twilio.
AWS account for Cognito and S3 integration.

Installation
Clone the repository:
git clone https://github.com/divyanshuu8/Bharat_Vyaapar_Setu.git  
cd Bharat_Vyaapar_Setu  

Install dependencies for the backend:
cd backend  
npm install  

Install dependencies for the frontend:
cd ../frontend  
npm install  
Set up environment variables. Create .env files in both the backend and frontend directories:

Backend .env:
PORT=5000  
MONGO_URI=your_mongodb_uri  
AWS_ACCESS_KEY=your_aws_access_key  
AWS_SECRET_KEY=your_aws_secret_key  
GOOGLE_API_KEY=your_google_maps_api_key  
TWILIO_SID=your_twilio_sid  
TWILIO_AUTH_TOKEN=your_twilio_auth_token  

Frontend .env:
REACT_APP_API_URL=http://localhost:5000  
REACT_APP_GOOGLE_API_KEY=your_google_maps_api_key 

Running the Application
Start the backend server:
cd backend  
npm run start  

Start the frontend application:
cd ../frontend  
npm run start  

Open your browser and navigate to http://localhost:3000.

Testing
Use Postman or Swagger (if integrated) to test APIs.

Run the test suite:
npm run test  
