import React from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Header from "./Components/header";
import ProductMain from "./Components/product-page";

import products from "./Data/product";

function Product() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const productID = params.get("product");
  const product = products[productID - 1];
  return (
    <React.Fragment>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ProductMain productDetails={product} />
    </React.Fragment>
  );
}
export default Product;
