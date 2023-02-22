import axios from "axios";

const BACKEND_URL = process.env.BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/products/`;

// Create New Product
const createProduct = async (formData) => {
  const response = await axios.post(`${API_URL}`, formData);
  console.log("create Product Data: ", response.data)
  return response.data;
};

// Get all products
const getProducts = async () => {
  const response = await axios.get(`${API_URL}`);
  console.log("All Products product service :", response.data);
  // if (!response.ok) {
  //   throw new Error(`HTTP error: ${response.status}`);
  // }
  return response.data;
};


// Delete a Product
const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}` + id);
  return response.data;
};
// Get a Product
const getProduct = async (id) => {
  const response = await axios.get(`${API_URL}` + id);
  return response.data;
};
// Update Product
const updateProduct = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};

export default productService;
