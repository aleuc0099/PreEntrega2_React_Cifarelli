import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div id="cart_button_box">
      <Link to={"/"} id="cart_button">
      <i className="fa-solid fa-cart-shopping"></i>
      </Link>
    </div>
  );
};
export default CartWidget;
