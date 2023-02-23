import React from "react";
import Card from "../../card/Card";
import "./OrderForm.scss";

const productForm = ({
  product,
  handleInputChange,
  saveOrder,
}) =>
{

//  console.log("Save order: ", product)

  return (
    <div className="add-order">
      <Card cardClass={"card"}>
        <form onSubmit={saveOrder}>
          <label>product Name:</label>
          <input
            type="text"
            placeholder="product name"
            name="name"
            value={product?.name}
            onChange={handleInputChange}
          />

          <label>product Category:</label>
          <input
            type="text"
            placeholder="product Category"
            name="category"
            value={product?.category}
            onChange={handleInputChange}
          />

          <label>product Price:</label>
          <input
            type="text"
            placeholder="product Price"
            name="price"
            value={product?.price}
            onChange={handleInputChange}
          />

          <label>product Quantity:</label>
          <input
            type="text"
            placeholder="product Quantity"
            name="quantity"
            value={product?.quantity}
            onChange={handleInputChange}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Add Order
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};


export default productForm;
