import "./quantityPicker.css";
import { useState } from "react";

const QuantityPicker = (props) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    let next = quantity + 1;
    console.log(props.stock);
    if (next < props.stock) {
      setQuantity(next);
      props.onChange(next);
    }
  };
  const decrease = () => {
    let next = quantity - 1;
    if (next > 0) {
      setQuantity(next);
      props.onChange(next);
    }
  };
  return (
    <div className="qt-picker">
      <button onClick={decrease}>-</button>
      <label>{quantity}</label>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default QuantityPicker;
