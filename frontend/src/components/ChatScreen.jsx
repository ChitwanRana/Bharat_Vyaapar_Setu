import React from "react";

export const ChatScreen = () => {
  return (
    <>
      <div
        className="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
        style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
      >
        <i className="fas fa-angle-left"></i>
        <p className="mb-0 fw-bold">Live chat</p>
        <i className="fas fa-times"></i>
      </div>
      <div className="card-body">
        {/* Incoming Message */}
        <div className="d-flex flex-row justify-content-start mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
          <div
            className="p-3 ms-3"
            style={{
              borderRadius: "15px",
              backgroundColor: "rgba(57, 192, 237, 0.2)",
            }}
          >
            <p className="small mb-0">
              Hello and thank you for visiting MDBootstrap. Please click the
              video below.
            </p>
          </div>
        </div>

        {/* Outgoing Message */}
        <div className="d-flex flex-row justify-content-end mb-4">
          <div
            className="p-3 me-3 border bg-body-tertiary"
            style={{ borderRadius: "15px" }}
          >
            <p className="small mb-0">Thank you, I really like your product.</p>
          </div>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
            alt="avatar 2"
            style={{ width: "45px", height: "100%" }}
          />
        </div>

        {/* Video Message */}
        <div className="d-flex flex-row justify-content-start mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
          <div className="ms-3" style={{ borderRadius: "15px" }}>
            <div className="bg-image">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp"
                style={{ borderRadius: "15px" }}
                alt="video"
              />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Placeholder Message */}
        <div className="d-flex flex-row justify-content-start mb-4">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
            alt="avatar 1"
            style={{ width: "45px", height: "100%" }}
          />
          <div
            className="p-3 ms-3"
            style={{
              borderRadius: "15px",
              backgroundColor: "rgba(57, 192, 237, 0.2)",
            }}
          >
            <p className="small mb-0">...</p>
          </div>
        </div>

        {/* Message Input */}
        <div data-mdb-input-init className="form-outline">
          <textarea
            className="form-control bg-body-tertiary"
            id="textAreaExample"
            rows="4"
          ></textarea>
          <label className="form-label" htmlFor="textAreaExample">
            Type your message
          </label>
        </div>
      </div>
    </>
  );
};
