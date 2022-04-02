import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/product-details/ProductDetails";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/products/*"  element={<ProductDetails />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
