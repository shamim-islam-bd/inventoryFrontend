// import { createSlice } from "@reduxjs/toolkit";
// import filterSlice from "../product/filterSlice";

// const initialState = {
//   filteredOrders: [],
// };

// const filterSliceOrder = createSlice({
//   name: "filterOrder",
//   initialState,
//   reducers: {
//     FILTER_ORDERS(state, action) {
//       const { orders, search } = action.payload;
//       const tempOrders = orders.filter(
//         (order) =>
//           order.name.toLowerCase().includes(search.toLowerCase()) ||
//           order.category.toLowerCase().includes(search.toLowerCase())
//       );

//       state.filteredOrders = tempOrders;
//     },
//   },
// });

// // export const { FILTER_ORDERS } = filterSlice.actions;

// export const selectFilteredOrders = (state) => state.filter.filteredOrders;
// // console.log(selectFilteredOrders)

// export default filterSliceOrder.reducer;
