/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../../styles/Cart_detail/Cart_detail.css";

const CartDetailContent = () => {
  const { cart, totalPrice, eraseProductById, emptyCart } = useContext(CartContext);
  if (cart.lenght < 1) {
    return (
      <div>
        <h1>The Cart is Empty!</h1>
        <Link to={"/"}>Shop Now!</Link>
      </div>
    );
  }
  const price = totalPrice();
  return (
    <div id="main_cart_box">
      <div id="cart_header_box">
        <h1 id="cart_header_txt">Cart</h1>
      </div>
      {cart.map((cartProduct) => (
        <div key={cartProduct.id} id="cart_box">
          <p id="product_title">{cartProduct.title}</p>
          <img
            id="product_image"
            src={cartProduct.image}
            alt={cartProduct.title}
          />
          <p id="unitary_price_p">
            Price ${cartProduct.price * cartProduct.quantity}
          </p>
          <button
            id="eraser_btn"
            onClick={() => eraseProductById(cartProduct.id)}
          >
            Erase Product
          </button>
        </div>
      ))}
      <div id="empty_cart_btn_box">
        <button onClick={() => emptyCart()} id="empty_cart_btn">
          Empty Cart
        </button>
      </div>
      <p id="total_price_p">Total Price: ${price}</p>
    </div>
  );
};

export default CartDetailContent;
