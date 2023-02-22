import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authSlice";
import orderReducer from "../redux/features/order/orderSlice";
import filterReducer from "../redux/features/product/filterSlice";
import productReducer from "../redux/features/product/productSlice";
// import filterSliceOrder from "./features/order/filterSliceOrder";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    order: orderReducer,
    filter: filterReducer,
    // filter: filterSliceOrder,
  },
});
