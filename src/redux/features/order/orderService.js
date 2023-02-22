import axios from "axios";

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// const API_URL = `${BACKEND_URL}/api/Orders/`;


// Create New Order
const createOrder = async (formData) => {
  // console.log("before Creating order frmData: ", formData)
  const response = await axios.post(`/api/orders/`, formData);
  console.log("orders res: ", response.data)
  return response.data;
};

// Get all Orders
const getOrders = async () => {
  console.log("higging getOrder")

  const response = await axios.get(`/api/orders/`);
  console.log("All Orders", response.data);
  return response.data;
};

// Delete a Order
const deleteOrder = async (id) => {
  const response = await axios.delete(`/api/orders/` + id);
  return response.data;
};

// Get a Order
const getOrder = async (id) => {
  const response = await axios.get(`/api/orders/` + id);
  return response.data;
};

// Update Order
const updateOrder = async (id, formData) => {
  const response = await axios.patch(`/api/orders/${id}`, formData);
  return response.data;
};


const orderService = {
  createOrder,
  getOrders,
  getOrder,
  deleteOrder,
  updateOrder,
};

export default orderService;
