import "../App.css";
// import { useContext } from 'react';

import Header from "../Components/header";
import Slider from "../Components/slider";
import Responsive from "../Components/cartList";
import Offer from "../Components/offers";
import Banner from "../Components/banner";
import CategoryList from "../Components/category";
import Footer from "../Components/footer";
// import CartContext from '../hooks/Cartcontext';
import { ToastContainer } from "react-toastify";

function Home() {
  return (
    <div className="Index">
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
      <Slider />
      <Responsive />
      <Offer />
      <Banner />
      <CategoryList />
      <Responsive />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
