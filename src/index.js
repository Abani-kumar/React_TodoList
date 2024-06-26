import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./redux/store/store";
import { Toaster } from "react-hot-toast";

const store = configureStore({
  reducer: rootreducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    <Toaster/>
  </Provider>
);

reportWebVitals();
