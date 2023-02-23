import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// const API_URL = `${BACKEND_URL}/api/products/`;

// Create New Product
const createProduct = async (formData) => {
  const response = await axios.post(`${BACKEND_URL}/api/products/`, formData);
  console.log("create Product Data: ", response.data)
  return response.data;
};

// Get all products
const getProducts = async () => {
  const response = await axios.get(`${BACKEND_URL}/api/products/`);
  console.log("All Products", response.data);
  return response.data;
};

// Delete a Product
const deleteProduct = async (id) => {
  const response = await axios.delete(`${BACKEND_URL}/api/products/` + id);
  return response.data;
};
// Get a Product
const getProduct = async (id) => {
  const response = await axios.get(`${BACKEND_URL}/api/products/` + id);
  return response.data;
};
// Update Product
const updateProduct = async (id, formData) => {
  const response = await axios.patch(`${BACKEND_URL}/api/products/${id}`, formData);
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
