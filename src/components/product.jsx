import "./product.css";
import QuantityPicker from "./quantityPicker.jsx";

const Product = () => {
    return (
    <div className="product">
        <img src="https://picsum.photos/536/354" alt="" />
        
        <h5>Product</h5>
        
        <QuantityPicker></QuantityPicker>
    </div>
    );
};

export default Product;