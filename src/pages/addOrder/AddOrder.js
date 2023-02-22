import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import OrderForm from "../../components/order/orderForm/OrderForm";

import { createOrder, selectIsLoading } from "../../redux/features/order/orderSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  category: "",
  quantity: "",
  price: "",
};

const AddOrder = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(initialState);
  const navigate = useNavigate();
  // const [description, setDescription] = useState("");

  const isLoading = useSelector(selectIsLoading);

  const { name, category, price, quantity } = product;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  // console.log("product :  " , product);

  const generateKSKU = (category) => {
    const letter = category.slice(0, 3).toUpperCase();
    const number = Date.now();
    const sku = letter + "-" + number;
    return sku;
  };

  const saveOrder = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("sku", generateKSKU(category));
    formData.append("quantity", Number(quantity));
    formData.append("price", price);
    
  //  console.log("frm AddOrder Save: ", ...formData);

    await dispatch(createOrder(product));

    navigate("/orders");
  };


  return (
    <div>
      {isLoading && <Loader />}
      <h3 className="--mt">Add New Order</h3>
      <OrderForm
        product={product}
        handleInputChange={handleInputChange}
        saveOrder={saveOrder}
      />
    </div>
  );
};

export default AddOrder;
