import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="navbackground text-white d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        {/* Left Section with Logo and Copyright */}
        <div className="col-md-4 mx-4 d-flex align-items-center ">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1"
          >
            <img
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              alt="Logo"
              style={{ width: "60px", height: "100%" }}
            />
            {/* Logo can go here if needed */}
          </a>
          <span className="mb-3 mb-md-0 text-white">
            &copy; 2024 Company, Inc
          </span>
        </div>

        {/* Social Media Links */}
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-white"
              href="#"
              aria-label="Twitter"
              title="Follow us on Twitter"
            >
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#twitter" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-white"
              href="#"
              aria-label="Instagram"
              title="Follow us on Instagram"
            >
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#instagram" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-white"
              href="#"
              aria-label="Facebook"
              title="Like us on Facebook"
            >
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#facebook" />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
