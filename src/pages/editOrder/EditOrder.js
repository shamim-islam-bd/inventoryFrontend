import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import OrderForm from "../../components/order/orderForm/OrderForm";
import {
    selectIsLoading
} from "../../redux/features/product/productSlice";
import { toast } from "react-toastify";


const EditOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

 const [product, setProduct] = useState({});

 useEffect(() => {
    axios.get(`/api/orders/`)
        .then(res => {
            // match the id with the product id
            const product = res.data.find(product => product._id === id)
            setProduct(product)
        })
        .catch(err => console.log(err))
 }, [id]);


//  console.log("matched product", product)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };


  const saveOrder = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product?.name);

    formData.append("category", product?.category);
    formData.append("quantity", product?.quantity);
    formData.append("price", product?.price);

    console.log(...formData);

    await axios.patch(`/api/orders/${id}`, product)
            .then(res => {
                console.log("edit product", res.data)
               // save into the state
                setProduct(res.data)
                toast.success("Product updated successfully")
            })
            .catch(err => console.log(err))


    navigate("/orders");
  };
  
  return (
    <div>
      { 
        isLoading && <Loader />
      }
      <h3 className="--mt">Edit Order</h3>
      <OrderForm
        product={product}
        handleInputChange={handleInputChange}
        saveOrder={saveOrder}
      />
    </div>
  );
};

export default EditOrder;
