import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styles/PurchasePage/PurchasePage.css"

const PurchasePageContent = () => {
  const { cart, totalPrice} =
    useContext(CartContext);
  const price = totalPrice();

  return (
    <div>
      <h1>Your Purchase:</h1>
      <div id="main_purchase_box">
        {cart.map((cartProduct) => (
          <div key={cartProduct.id} id="cart_box">
            <p id="product_title">{cartProduct.title}</p>
            <p id="unitary_price_p">
              ${cartProduct.price * cartProduct.quantity}
            </p>
          </div>
        ))}
      </div>
      <h1>Total: ${price}</h1>
    </div>
  );
};

export default PurchasePageContent;
