import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";


axios.defaults.baseURL = `${process.env.BACKEND_URL}`;
// cors policy 
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);