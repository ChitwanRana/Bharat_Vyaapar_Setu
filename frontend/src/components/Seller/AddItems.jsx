import React, { useState } from 'react';

const Seller = () => {
  // State to hold input values for the item
  const [itemDetails, setItemDetails] = useState({
    name: '',
    quantity: 0,
    category: '',
    price: 0,
    description: '',
  });

  // Handler to update state when the user types in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handler to simulate generating the item for sale
  const handleGenerateItem = () => {
    console.log('Item for sale:', itemDetails);
    // You can implement your logic to save this item to a database or use it further
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Generate Item for Sale</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Item Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={itemDetails.name}
            onChange={handleInputChange}
            placeholder="Enter item name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="form-control"
            value={itemDetails.quantity}
            onChange={handleInputChange}
            placeholder="Enter quantity"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            className="form-control"
            value={itemDetails.category}
            onChange={handleInputChange}
            placeholder="Enter category"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            className="form-control"
            value={itemDetails.price}
            onChange={handleInputChange}
            placeholder="Enter price"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={itemDetails.description}
            onChange={handleInputChange}
            placeholder="Enter item description"
          />
        </div>

        <div className="d-flex justify-content-center">
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={handleGenerateItem}>
            Generate Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default Seller;