import React, { useState } from "react";
import CartContext, { defaultObject } from "./hooks/Cartcontext";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Category from "./Category";
import Login from "./Login";
import SignUp from "./Signup";
import Cart from "./Cart";
import Aboutpage from "./About";
import ContactPage from "./Contact";
import Product from "./ProductPage";
import CartTotal from "./Components/cart-add";
function App() {

  const [cartState,updateCartState] = useState([])

  return (
    <CartContext.Provider value={{ updateCart:updateCartState, cartState } }>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/AddCart" element={<Cart />} />
        <Route path="/cart-final" element={<CartTotal />} />
        <Route path="/AboutPage" element={<Aboutpage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/productpage" element={<Product />} />
      </Routes>
    </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
