import React from "react";

const CartContext = React.createContext([]);
const defaultObject = {
  id: "",
  img: "",
  productName: "",
  proPrice: "",
  proRetail: "",
  offer: "",
};

export { defaultObject };
export default CartContext;
