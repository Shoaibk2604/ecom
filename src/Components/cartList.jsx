import React, { Component , useContext} from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Data from '../Data/product'
import CartContext from "../hooks/Cartcontext";
const Responsive = () => {
  const cart = useContext(CartContext);
  const addToCart = (post) =>{ 

    const exist = cart.cartState.filter((data) => data.id == post.id)

    if(exist.length === 0) 
    {
      cart.updateCart([...cart.cartState,{...post}]);
    toast.success('Added to cart', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      }); }

    else{
    toast.error('Product already in the Cart', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });  }
  }

  
    var settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
    ]
};
    return (
      <div className="main-contain">
        <h4>Trending</h4>
        <Slider {...settings}>
          {Data.map((post,index) =>{
            return(
            <div className="card" key={index}>
          <Link to={`/productpage?product=${post.id}`}>
            <img src={post.img} alt="" />
            <h6>{post.productName}</h6></Link>
            <p>₹{post.proPrice} <span>₹{post.proRetail}</span> <span className="off">{post.offer} off</span></p>
            <button className='btn btn-group' onClick={()=>{addToCart(post)}}>Add to cart</button>
          </div>)
          })}
          
          
        </Slider>
      </div>
    );
}

export default Responsive