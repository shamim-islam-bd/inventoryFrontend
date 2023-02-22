import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";
import ProductDetail from "./components/product/productDetail/ProductDetail";
import Sidebar from "./components/sidebar/Sidebar";
import AddOrder from "./pages/addOrder/AddOrder";
import Orders from "./pages/addOrder/Orders";
import AddProduct from "./pages/addProduct/AddProduct";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Contact from "./pages/contact/Contact";
import Dashboard from "./pages/dashboard/Dashboard";
import EditProduct from "./pages/editProduct/EditProduct";
import Home from "./pages/Home/Home";
import EditProfile from "./pages/profile/EditProfile";
import Profile from "./pages/profile/Profile";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import { getLoginStatus } from "./services/authService";
import EditOrder from "./pages/editOrder/EditOrder";
import OrderDetail from "./components/order/orderDetails/OrderDetail";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/resetpassword/:resetToken" element={<Reset />} />

        <Route
          path="/dashboard"
          element={
            <Sidebar>
              <Layout>
                <Dashboard />
              </Layout>
            </Sidebar>
          }
        />
       <Route
          path="/add-product"
          element={
            <Sidebar>
              <Layout>
                <AddProduct />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/add-Order"
          element={
            <Sidebar>
              <Layout>
                <AddOrder />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/edit-order/:id"
          element={
            <Sidebar>
              <Layout>
                <EditOrder />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/order-detail/:id"
          element={
            <Sidebar>
              <Layout>
                <OrderDetail />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/orders"
          element={
            <Sidebar>
              <Layout>
                <Orders />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/product-detail/:id"
          element={
            <Sidebar>
              <Layout>
                <ProductDetail />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/edit-product/:id"
          element={
            <Sidebar>
              <Layout>
                <EditProduct />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/profile"
          element={
            <Sidebar>
              <Layout>
                <Profile />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <Sidebar>
              <Layout>
                <EditProfile />
              </Layout>
            </Sidebar>
          }
        /> 
        <Route
          path="/contact-us"
          element={
            <Sidebar>
              <Layout>
                <Contact />
              </Layout>
            </Sidebar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
