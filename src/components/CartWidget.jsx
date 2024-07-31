import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  let quantity = totalQuantity();
  return (
    <Link to={"/cart"} id="cart_button_box">
      <button id="cart_button">
        <i className="fa-solid fa-cart-shopping"></i>
        {quantity > 0 ? <p id="quantity_p">{quantity}</p> : null}
      </button>
    </Link>
  );
};
export default CartWidget;
