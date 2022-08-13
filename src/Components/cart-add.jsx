import CartContext from "../hooks/Cartcontext";
import { useContext ,useState} from "react";
// import shirt from "../Assets/black.png";
import { toast ,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./header";
const CartTotal = () => {
  // const [price,priceUpdate] = useState('');
  const cart = useContext(CartContext);
  const deleteItem = (productid) => {
    const newCartList = cart.cartState.filter((data) => {
      return data.id !== productid;
      
    });
    cart.updateCart([...newCartList]);
    toast.success('Item removed', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });
  };

  const increment = (product) => {
    console.log(product);
    const updateCartList = cart.cartState.map((data,index) => {
      if (data.id === product.id ) {
        ++data.count
        data.total = data.proPrice * data.count
      }
      return data;
    });
    
    cart.updateCart([...updateCartList]);
  };
  
  const decrement = (product,index) => {
    const updateCartList = cart.cartState.map((data,index) => {
      if (data.id === product.id && product.count !== 1) {
        --data.count;
        data.total = data.proPrice * data.count
        
      }
      return data;
    });
    cart.updateCart([...updateCartList]);
  };

  return (
    <div>
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
      <div className="cartpage">
        <div className="head-cart">
          <h5>Shopping Cart</h5>
          <p>You Have {cart.cartState.length} Items In Shopping Cart</p>
        </div>
        <div className="bg-cart">
          <div className="scr-cart">
            {cart.cartState.map((Items, index) => {
              return (
                <div className="row " key={index}>
                  <div className="col-sm center-ca">
                    <div className="cart-img">
                      <img src={Items.img} alt="" />
                    </div>
                  </div>
                  <div className="col-sm center-ca">
                    <div>
                      <h5>{Items.productName}</h5>
                    </div>
                  </div>
                  <div className="col-sm center-ca">
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          decrement(Items,index);
                        }}
                      >
                        -
                      </button>
                      <span>{Items.count}</span>
                      <button
                        className="btn"
                        onClick={() => {
                          increment(Items,index);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-sm center-ca">
                    <div>
                      <h6 >{Items.total}₹</h6>
                    </div>
                  </div>
                  <div className="col-sm center-ca">
                    <div>
                      <button
                        className="btn dlt-btn"
                        onClick={() => {
                          deleteItem(Items.id);
                        }}
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartTotal;
{
  /* <h1>Please add Products in the Cart <FaShoppingCart/> </h1> */
}
