import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Search from "../../search/Search";
import "./OrderList.scss";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;



const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5);


  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/orders/`)
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };


  const delOrder = async (id) => {
    console.log(id);
    // await dispatch(deleteOrder(id));
    // await dispatch(getOrders());

    await axios
      .delete(`${BACKEND_URL}/api/orders/${id}`)
      .then((res) => {
        console.log(res.data);
        setOrders(orders.filter((order) => order._id !== id));

        toast.success("Order deleted successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete Order",
      message: "Are you sure you want to delete this Order.",
      buttons: [
        {
          label: "Delete",
          onClick: () => delOrder(id),
        },
        {
          label: "Cancel",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };


  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <div className="product-list">

      <div className="table">
        <div className="--flex-between --flex-dir-column">
          <span>
            <h3>Orders Items</h3>
          </span>
          <span>
            <Search
              // value={search}
              value="search"
              // onChange={(e) => setSearch(e.target.value)}
            />
          </span>
        </div>

        {/* {isLoading && <SpinnerImg />} */}

        <div className="table">
          { orders?.length === 0 ? (
            <p>-- No product found, please add a product...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Order P.Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Value</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {orders?.map((product, index) => {
                  const { _id, name, category, price, quantity } = product;
                  return (
                    <tr key={_id}>
                      <td>{index + 1}</td>
                      <td>{shortenText(name, 16)}</td>
                      <td>{category}</td>
                      <td>
                        {"$"}
                        {price}
                      </td>
                      <td>{quantity}</td>
                      <td>
                        {"$"}
                        {price * quantity}
                      </td>
                      <td className="icons">
                        <span>
                          <Link to={`/order-detail/${_id}`}>
                            <AiOutlineEye size={25} color={"purple"} />
                          </Link>
                        </span>
                        <span>
                          <Link to={`/edit-order/${_id}`}>
                            <FaEdit size={20} color={"green"} />
                          </Link>
                        </span>
                        <span>
                          <FaTrashAlt
                            size={20}
                            color={"red"}
                            onClick={() => confirmDelete(_id)}
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={
            (page) => setCurrentPage(page.selected + 1)
          }
          pageRangeDisplayed={3}
          pageCount={Math.ceil(orders.length / ordersPerPage)}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="activePage"
        />
      </div>
    </div>
  );
};

export default OrderList;