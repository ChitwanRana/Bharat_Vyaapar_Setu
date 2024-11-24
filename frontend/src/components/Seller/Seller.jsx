import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import CarouselComponent from "../Carasol";

const Seller = () => {
  // State to track whether the form is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expanded state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <CarouselComponent />

      <div className="container mt-5">
        {/* Small box to click and expand */}
        <div
          className="card shadow-sm"
          style={{ cursor: "pointer", width: "300px", margin: "auto" }}
          onClick={toggleExpand}
        >
          <div className="card-header text-center">
            <h5>{isExpanded ? "Close Form" : "Generate Item for Sale"}</h5>
          </div>
          {isExpanded && (
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Item Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter item name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="quantity" className="form-label">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    className="form-control"
                    placeholder="Enter quantity"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category:
                  </label>
                  <input
                    type="text"
                    id="category"
                    className="form-control"
                    placeholder="Enter category"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price:
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="form-control"
                    placeholder="Enter price"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description:
                  </label>
                  <textarea
                    id="description"
                    className="form-control"
                    placeholder="Enter item description"
                  />
                </div>

                <button type="button" className="btn btn-primary">
                  Generate Item
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Seller;
