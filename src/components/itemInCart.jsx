import "./itemInCart.css";



const ItemInCart = (props) => {
    return(
        <div className="prod-cart">
                <img src={"/images/" + props.data.image} alt="Product" />
            <h6>{props.data.title}</h6>

            <label>Quantity {props.data.quantity}</label>
            <label>Price ${props.data.price}</label>
            <label>Total ${props.data.price * props.data.quantity}</label>

            <button className="btn btn-primary">Remove</button>
        </div>
    )

}
export default ItemInCart;
