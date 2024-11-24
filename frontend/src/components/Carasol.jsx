import React from "react";

const CarouselComponent = () => {

  return (
    <div
      id="myCarousel"
      className="carousel slide mb-6"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="/Group 175125.png"
            className="d-block w-100"
            alt="Promotional banner for the event"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="container">
            <div
              className="carousel-caption text-start"
              style={{
                position: "absolute",
                top: "40%",
                left: "0",
                marginLeft: "130px",
                transform: "translateY(-50%)",
                textAlign: "left",
                maxWidth: "800px",
              }}
            >
              <h1 style={{ color: "#130f26" }}>Compare Rates.</h1>
              <h1 style={{ color: "#130f26" }}>Negotiate Smarter.</h1>
              <p style={{ color: "#130f26" }} className="opacity-75">
                Instantly fetch and compare shipping rates across Fedex, UPS,
                DHL and more. Let our AI-Powered chatbot negotiate the best
                deals for your shipments.
              </p>
              <p>
                <a
                  className="btn btn-lg text-white navbackground"
                  href="/"
                  style={{
                    borderRadius: "50px", // Applies uniform radius for both sides
                    padding: "10px 30px", // Adjust padding for size
                    backgroundColor: "#007bff", // Button background color
                    color: "white", // Text color
                    display: "inline-block", // Ensures proper button spacing
                  }}
                >
                  Start Saving Now
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src="/Group 175127.png"
            className="d-block w-100"
            alt="Background Banner"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="container">
            <div
              className="carousel-caption text-start"
              style={{
                position: "absolute",
                top: "40%",
                left: "0",
                marginLeft: "130px",
                transform: "translateY(-50%)",
                textAlign: "left",
                maxWidth: "800px",
              }}
            >
              <h1 style={{ color: "#130f26" }}>Simplify Compliance.</h1>
              <h1 style={{ color: "#130f26" }}>Sign Digitally.</h1>
              <p style={{ color: "#130f26" }} className="opacity-75">
                Verify export documents with Al, track versions, and securely
                sign with integrated digital signature tools like DocuSign.
              </p>
              <p>
                <a
                  className="btn btn-lg text-white navbackground"
                  href="/"
                  style={{
                    borderRadius: "50px", // Applies uniform radius for both sides
                    padding: "10px 30px", // Adjust padding for size
                    backgroundColor: "#007bff", // Button background color
                    color: "white", // Text color
                    display: "inline-block", // Ensures proper button spacing
                  }}
                >
                  Streamline Your Documents
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="/Group 175129.png"
            className="d-block w-100"
            alt="Background Banner"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="container">
            <div
              className="carousel-caption text-start"
              style={{
                position: "absolute",
                top: "40%",
                left: "0",
                marginLeft: "130px",
                transform: "translateY(-50%)",
                textAlign: "left",
                maxWidth: "800px",
              }}
            >
              <h1 style={{ color: "#130f26" }}>Make Data-Driven</h1>
              <h1 style={{ color: "#130f26" }}>Shipping Choices</h1>
              <p style={{ color: "#130f26" }} className="opacity-75">
                Analyze shipping trends, costs, and performance with predictive
                analytics and dynamic KPI dashboards.
              </p>
              <p>
                <a
                  className="btn btn-lg text-white navbackground"
                  href="/"
                  style={{
                    borderRadius: "50px", // Applies uniform radius for both sides
                    padding: "10px 30px", // Adjust padding for size
                    backgroundColor: "#007bff", // Button background color
                    color: "white", // Text color
                    display: "inline-block", // Ensures proper button spacing
                  }}
                >
                  Discover Insights
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <img
            src="/Group 175126.png"
            className="d-block w-100"
            alt="Background Banner"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="container">
            <div
              className="carousel-caption text-start"
              style={{
                position: "absolute",
                top: "40%",
                left: "0",
                marginLeft: "130px",
                transform: "translateY(-50%)",
                textAlign: "left",
                maxWidth: "800px",
              }}
            >
              <h1 style={{ color: "#130f26" }}>Track Every Shipment</h1>
              <h1 style={{ color: "#130f26" }}>in Real Time</h1>
              <p style={{ color: "#130f26" }} className="opacity-75">
                Visualize shipment statuses on an interactive map and stay
                informed with automated alerts on delays, customs, and
                deliveries.
              </p>
              <p>
                <a
                  className="btn btn-lg text-white navbackground"
                  href="/"
                  style={{
                    borderRadius: "50px", // Applies uniform radius for both sides
                    padding: "10px 30px", // Adjust padding for size
                    backgroundColor: "#007bff", // Button background color
                    color: "white", // Text color
                    display: "inline-block", // Ensures proper button spacing
                  }}
                >
                  Track Your Shipments
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="carousel-item">
          <img
            src="/Group 175128.png"
            className="d-block w-100"
            alt="Background Banner"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="container">
            <div
              className="carousel-caption text-start"
              style={{
                position: "absolute",
                top: "40%",
                left: "0",
                marginLeft: "130px",
                transform: "translateY(-50%)",
                textAlign: "left",
                maxWidth: "800px",
              }}
            >
              <h1 style={{ color: "white" }}>Connect Your Team</h1>
              <h1 style={{ color: "white" }}>and Partners</h1>
              <p style={{ color: "white" }}>
                Schedule shipments, coordinate with carriers, and communicate in
                real time with Slack and shared calendar integrations.
              </p>
              <p>
                <a
                  className="btn btn-lg text-white navbackground"
                  href="/"
                  style={{
                    borderRadius: "50px", // Applies uniform radius for both sides
                    padding: "10px 30px", // Adjust padding for size
                    backgroundColor: "White", // Button background color
                    color: "black", // Text color
                    display: "inline-block", // Ensures proper button spacing
                  }}
                >
                  Enhance Collaboration
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
