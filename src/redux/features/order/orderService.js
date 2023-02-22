import axios from "axios";

const BACKEND_URL = process.env.BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/Orders/`;


// Create New Order
const createOrder = async (formData) => {
  // console.log("before Creating order frmData: ", formData)
  const response = await axios.post(`${API_URL}`, formData);
  console.log("orders res: ", response.data)
  return response.data;
};

// Get all Orders
const getOrders = async () => {
  console.log("higging getOrder")

  const response = await axios.get(`${API_URL}`);
  console.log("All Orders", response.data);
  return response.data;
};

// Delete a Order
const deleteOrder = async (id) => {
  const response = await axios.delete(`${API_URL}` + id);
  return response.data;
};

// Get a Order
const getOrder = async (id) => {
  const response = await axios.get(`${API_URL}` + id);
  return response.data;
};

// Update Order
const updateOrder = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
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
