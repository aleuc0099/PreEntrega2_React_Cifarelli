import { useContext } from "react";
import CartDetailContent from "./CartDetailContent";
import { CartContext } from "../../context/CartContext";

const CartDetail = () => {
  const { cart, eraseProducById } = useContext(CartContext);
  return (
    <CartDetailContent
      cart={cart}
      eraseProducById={eraseProducById}
    />
  );
};

export default CartDetail;
