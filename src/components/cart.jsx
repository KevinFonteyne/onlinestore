import "./cart.css";

import { useContext } from "react";
import StoreContext from "../store/storeContext";
import ItemInCart from "./itemInCart.jsx";

const Cart = () => {
  const cart = useContext(StoreContext).cart;

  const getNumItems = () => {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      sum += prod.quantity;
    }

    return sum;
  }

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.quantity * prod.price;
    }
    return total;
  };
  return (
    <div className="cart">
      <h1>Ready to pay??</h1>

      <div className="parent">
        <div className="products">
      <h3>You have {getNumItems} items in your cart</h3>
          {cart.map((prod) => (
            <ItemInCart key={prod._id} data={prod}></ItemInCart>
          ))}
        </div>

        <div className="side-menu">
          <h3>Your total is: ${getTotal()}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
