import CartTotal from "./Components/cart-add";
import Header from "./Components/header";
import { ToastContainer } from "react-toastify";
function Cart (){
    return(<div>
        <Header/>
        
        <CartTotal/>
    </div>)
}
export default Cart;