import React ,{ useContext } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CartContext from "../hooks/Cartcontext";

const ProductMain = (props) => {
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
      toast.error('Product is already in the Cart', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });  }
    }
  
    return (<div className="main-product d-flex justify-content-center align-items-center flex-row">
        <div className="row box-des">
        <div className="left-side col-6 justify-content-center d-flex">
            <img src={props.productDetails.img} alt=""/>
        </div>
        <div className="right-contain col-md-6 ">
            <div className="product-d">
            <h4>{props.productDetails.productName}</h4><hr />
            <h6>Description</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, tempora?</p>
            </div><hr />
            <div className='pro-card'>
            <p>₹{props.productDetails.proPrice} <span>₹{props.productDetails.proRetail}</span> <span className="off">{props.productDetails.offer} off</span></p>
            </div>
            <div className='d-flex justify-content-between '>
                <button className='btn pro-btn'>Buy Now</button>
            <button  className='btn pro-btn' onClick={()=>{addToCart(props.productDetails)}}>Add to Cart</button></div>
        </div>
        </div>
    </div>)
}
export default ProductMain;