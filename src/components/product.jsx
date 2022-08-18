import "./product.css";
import QuantityPicker from "./quantityPicker.jsx";
import { useState } from "react";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);

  const add2Cart = () => {
    console.log("product added");
  };
  const onQuantityChange = (quantity) => {
    console.log("quantity changed", quantity);
    setQuantity(quantity);
  };
  const getTotal = () => {
    let total = quantity * props.data.price;
    return total.toFixed(2);
  };
  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="" />

      <h5>{props.data.title}</h5>
      <label>Price:${props.data.price.toFixed(2)}</label>
      <h6>In stock:{props.data.stock - quantity}</h6>
      <label>Total:${getTotal()}</label>
      <QuantityPicker onChange={onQuantityChange} stock={props.data.stock}></QuantityPicker>
      <button onClick={add2Cart} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default Product;
