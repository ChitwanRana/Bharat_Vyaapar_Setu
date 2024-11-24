import { useState, useEffect } from "react";
import TopBar from "./TopBar";
import "./ShoppingCart.css";

const Navbar = ({ accountType, isLoggedIn, handleLogout }) => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart); // Toggle cart visibility
  };

  return (
    <>
      <TopBar />
      <header className="navbackground py-3 border-bottom">
        <div
          className="container d-flex flex-wrap justify-content-between align-items-center py-3"
          style={{ gap: "10px" }}
        >
          {/* Logo */}
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 text-white text-decoration-none"
            style={{ marginRight: "20px" }} // Space after the logo
          >
            <img
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              alt="Logo"
              style={{ width: "115px", height: "100%" }}
            />
          </a>

          {/* Search Bar */}
          <div
            className="d-flex justify-content-center flex-grow-1"
            style={{ marginLeft: "50px" }}
          >
            <form className="col-12 col-lg-8 mb-3 mb-lg-0" role="search">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                style={{ height: "45px", fontSize: "16px" }}
              />
            </form>
          </div>
          {accountType === "buyer" && (
            <div className="d-flex align-items-center">
              <a
                href="#"
                className="nav-link text-white fs-5 px-2"
                aria-current="page"
              >
                Orders
              </a>
              <svg
                onClick={toggleCart}
                fill="#ffffff" // Changed to white
                width="30px"
                height="30px"
                version="1.1"
                viewBox="144 144 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="ms-2"
                style={{ cursor: "pointer" }}
              >
                <path d="m620.17 328.12c-5.2188-6.4648-13.09-10.215-21.402-10.199h-330.34l-24.805-97.668c-1.5078-5.9414-4.9492-11.211-9.7891-14.973-4.8359-3.7617-10.789-5.8047-16.918-5.8008h-31.438c-6.5195 0-11.805 5.2852-11.805 11.809 0 6.5195 5.2852 11.809 11.805 11.809h31.438c1.8008 0 3.3711 1.2188 3.8164 2.9688l27.008 106.34c0.039063 0.15625 0.078125 0.32422 0.12109 0.48047l38.453 151.37h0.003906c2.5781 10.184 8.4805 19.215 16.773 25.664 8.2891 6.4492 18.496 9.9453 29 9.9414h219.7c10.82-0.039063 21.301-3.7773 29.707-10.59 8.4062-6.8164 14.23-16.297 16.504-26.875l27.73-131.23c1.7344-8.1289-0.30859-16.605-5.5586-23.051zm-45.281 149.39 0.003906 0.003906c-1.1367 5.2891-4.0508 10.031-8.2539 13.438s-9.4414 5.2734-14.852 5.293h-219.7c-5.25 0.003906-10.355-1.7461-14.5-4.9727-4.1445-3.2227-7.0977-7.7383-8.3906-12.828l-34.773-136.91h324.34c1.1875 0 2.3125 0.53516 3.0586 1.457 0.74609 0.91797 1.0391 2.1289 0.79297 3.2891zm-50.082 60.016 0.003906 0.003906c-11.25 0-21.645 6-27.27 15.746-5.625 9.7422-5.625 21.742 0 31.484 5.625 9.7461 16.02 15.746 27.27 15.746 11.211-0.054688 21.551-6.0703 27.141-15.789 5.5898-9.7188 5.5898-21.68 0-31.398-5.5898-9.7188-15.93-15.73-27.141-15.789zm0 39.359 0.003906 0.003906c-4.3477 0-7.8711-3.5234-7.8711-7.8711 0-4.3477 3.5234-7.8711 7.8711-7.8711s7.875 3.5234 7.875 7.8711c0 4.3477-3.5273 7.8711-7.875 7.8711zm-174.97-39.359 0.003906 0.003906c-11.25 0-21.645 6-27.27 15.746-5.625 9.7422-5.625 21.742 0 31.484 5.625 9.7461 16.02 15.746 27.27 15.746 11.215-0.054688 21.551-6.0703 27.141-15.789 5.5898-9.7188 5.5898-21.68 0-31.398-5.5898-9.7188-15.926-15.73-27.141-15.789zm0 39.359 0.003906 0.003906c-4.3477 0-7.8711-3.5234-7.8711-7.8711 0-4.3477 3.5234-7.8711 7.8711-7.8711s7.875 3.5234 7.875 7.8711c0 4.3477-3.5273 7.8711-7.875 7.8711z" />
              </svg>

              {showCart && (
                <div className="shopping-cart-modal">
                  <section className="h-100">
                    <div className="container h-100 py-5">
                      <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="fw-normal mb-0">Shopping Cart</h3>
                            <div>
                              <p className="mb-0">
                                <span className="text-muted">Sort by:</span>{" "}
                                <a href="#!" className="text-body">
                                  price{" "}
                                  <i className="fas fa-angle-down mt-1"></i>
                                </a>
                              </p>
                            </div>
                          </div>

                          {/* Add individual product cards here */}
                          <div className="card rounded-3 mb-4">
                            <div className="card-body p-4">
                              <div className="row d-flex justify-content-between align-items-center">
                                <div className="col-md-2 col-lg-2 col-xl-2">
                                  <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                    className="img-fluid rounded-3"
                                    alt="Cotton T-shirt"
                                  />
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-3">
                                  <p className="lead fw-normal mb-2">
                                    Basic T-shirt
                                  </p>
                                  <p>
                                    <span className="text-muted">Size: </span>M{" "}
                                    <span className="text-muted">Color: </span>
                                    Grey
                                  </p>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                  <button
                                    className="btn btn-link px-2"
                                    onClick={() =>
                                      console.log("Decrease quantity")
                                    }
                                  >
                                    <i className="fas fa-minus"></i>
                                  </button>

                                  <input
                                    id="form1"
                                    min="0"
                                    name="quantity"
                                    value="2"
                                    type="number"
                                    className="form-control form-control-sm"
                                  />

                                  <button
                                    className="btn btn-link px-2"
                                    onClick={() =>
                                      console.log("Increase quantity")
                                    }
                                  >
                                    <i className="fas fa-plus"></i>
                                  </button>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                  <h5 className="mb-0">$499.00</h5>
                                </div>
                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                  <a href="#!" className="text-danger">
                                    <i className="fas fa-trash fa-lg"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Total Section */}
                          <div className="card">
                            <div className="card-body">
                              <button
                                type="button"
                                className="btn btn-warning btn-block btn-lg"
                              >
                                Proceed to Pay
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </div>
          )}
          <ul className="nav">
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <a href="/signin" className="nav-link text-white px-2">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/signup" className="nav-link text-white px-2">
                    Sign up
                  </a>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="nav-link px-2"
                  style={{
                    background: "#ffffff", // White background
                    border: "1px solid #130f26", // Border with #130f26 color
                    borderRadius: "8px", // Rounded corners
                    color: "#130f26", // Text color
                    cursor: "pointer",
                    padding: "8px 15px", // Add padding for better button spacing
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </header>
      <nav className="navbackground border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item d-flex align-items-center position-relative">
              {/* Hamburger icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                fill="#ffffff"
                height="15"
                viewBox="0 0 100 80"
                className="me-2"
                style={{ cursor: "pointer" }}
                data-bs-toggle="dropdown"
              >
                <rect width="100" height="10" rx="8" />
                <rect y="30" width="100" height="10" rx="8" />
                <rect y="60" width="100" height="10" rx="8" />
              </svg>

              {/* Categories text */}
              <a
                href="#"
                className="nav-link text-white px-2 active"
                aria-current="page"
                data-bs-toggle="dropdown" // Bootstrap's dropdown toggle functionality
              >
                Categories
              </a>

              {/* Dropdown Menu */}
              <ul className="dropdown-menu navbackground">
                <li>
                  <a
                    href="#"
                    className="dropdown-item"
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    Option 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dropdown-item"
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    Option 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dropdown-item"
                    style={{
                      color: "#ffffff",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "black")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}
                  >
                    Option 3
                  </a>
                </li>
              </ul>
            </li>

            {/* Conditional rendering based on the 'page' prop */}
            {accountType === "home" ? (
              <>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-white px-2 active"
                    aria-current="page"
                  >
                    How to ?
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white px-2">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white px-2">
                    About
                  </a>
                </li>
              </>
            ) : accountType === "seller" ? (
              <>
                <li className="nav-item">
                  <a
                    href="/seller"
                    className="nav-link text-white px-2 active"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-white px-2 active"
                    aria-current="page"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white px-2">
                    Business Oppertunities
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white px-2">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white px-2">
                    About
                  </a>
                </li>
              </>
            ) : accountType === "buyer" ? (
              <>
                <li className="nav-item">
                  <a
                    href="/buyer"
                    className="nav-link text-white px-2 active"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-white px-2 active"
                    aria-current="page"
                  >
                    Document Compliance
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white px-2">
                    Communication
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white px-2">
                    Real Time Insight
                  </a>
                </li>
              </>
            ) : null}
          </ul>
          <ul className="nav d-flex align-items-center">
            {/* "New" Link */}
            <li className="nav-item me-3">
              <a href="/signin" className="nav-link text-white px-2">
                New
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link text-white px-2 d-flex align-items-center"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()} // Prevent page navigation on click
              >
                {/* Bell SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  className="me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.018-14a4.986 4.986 0 0 0-4.466 2.723C3.21 4.407 3 5.254 3 5.6v3.5c0 .387-.144.735-.405 1.002l-.791.878a.5.5 0 0 0 .377.82H13.82a.5.5 0 0 0 .378-.82l-.79-.878A1.528 1.528 0 0 1 13 9.1V5.6c0-.346-.211-1.193-.552-1.878A4.986 4.986 0 0 0 8.018 2zM8 1a6 6 0 0 1 5.341 3.266c.394.777.659 1.727.659 2.334v3.5c0 .645.243 1.28.684 1.739l.004.003.791.879a1.5 1.5 0 0 1-1.13 2.48H2.347a1.5 1.5 0 0 1-1.13-2.48l.791-.879A2.528 2.528 0 0 0 3 9.1V5.6c0-.607.265-1.557.659-2.334A6 6 0 0 1 8 1z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
