import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../../redux/features/auth/authSlice";
import { getProduct } from "../../../redux/features/product/productSlice";
import Card from "../../card/Card";
import { SpinnerImg } from "../../loader/Loader";
import "./OrderDetail.scss";
import axios from "axios";

const OrderDetail = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const isLoggedIn = useSelector(selectIsLoggedIn);


  useEffect(() => {
    if (isLoggedIn === true) {
      axios.get(`/api/orders/`)
      .then(res => {
          // match the id with the product id
          const product = res.data.find(product => product._id === id)
          setProduct(product)
      })
      .catch(err => console.log(err))
    }
  }, [isLoggedIn]);

  return (
    <div className="product-detail">
      <h3 className="--mt">Order Detail</h3>
      <Card cardClass="card">
        {/* {isLoading && <SpinnerImg />} */}
        {product && (
          <div className="detail">
            <hr />
            <h4>
              <span className="">Name: </span> &nbsp; {product.name}
            </h4>
            <p>
              <b>&rarr; SKU : </b> {product.sku}
            </p>
            <p>
              <b>&rarr; Category : </b> {product.category}
            </p>
            <p>
              <b>&rarr; Price : </b> {"$"}
              {product.price}
            </p>
            <p>
              <b>&rarr; Quantity in stock : </b> {product.quantity}
            </p>
            <p>
              <b>&rarr; Total Value in stock : </b> {"$"}
              {product.price * product.quantity}
            </p>

          </div>
        )}
      </Card>
    </div>
  );
};

export default OrderDetail;
