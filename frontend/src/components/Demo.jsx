import React, { useState } from "react";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart); // Toggle cart visibility
  };

  return (
    <div>
      {/* SVG for toggling cart */}
      <div
        onClick={toggleCart}
        style={{ cursor: "pointer", display: "inline-block" }}
      >
        {showCart ? (
          <svg
            fill="#000000"
            width="30px"
            height="30px"
            version="1.1"
            viewBox="144 144 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="ms-2"
          >
            <path d="M256 144v224H144v48h224V144H256zm-16 240H160v-32h80v32zm-80-48v-32h80v32H160zm176 0V144h144v48H400v240H368v-48h-32z" />
          </svg>
        ) : (
          <svg
            fill="#000000"
            width="30px"
            height="30px"
            version="1.1"
            viewBox="144 144 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="ms-2"
          >
            <path d="M256 192v48h48v-48H256zm0 112v-48h48v48H256zm0 48v48h48v-48H256z" />
          </svg>
        )}
      </div>

      {/* Shopping cart container */}
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
                          price <i className="fas fa-angle-down mt-1"></i>
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
                          <p className="lead fw-normal mb-2">Basic T-shirt</p>
                          <p>
                            <span className="text-muted">Size: </span>M{" "}
                            <span className="text-muted">Color: </span>Grey
                          </p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            className="btn btn-link px-2"
                            onClick={() => console.log("Decrease quantity")}
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
                            onClick={() => console.log("Increase quantity")}
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
  );
};

export default ShoppingCart;
