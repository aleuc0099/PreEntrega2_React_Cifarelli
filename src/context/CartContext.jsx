/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    const condition = isInCart(product.id);
    if (condition) {
      const modifiedProducts = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + product.quantity,
          };
        } else {
          return cartProduct;
        }
      });
      setCart(modifiedProducts);
    } else {
      setCart([...cart, product]);
    }
  };

  const isInCart = (productId) => {
    const condition = cart.some((product) => product.id === productId);
    return condition;
  };

  const totalQuantity = () => {
    let quantity;
    if (cart.length > 0) {
      quantity = cart.reduce((total, product) => total + product.quantity, 0);
    }
    return quantity;
  };

  const totalPrice = () => {
    const price = cart.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
    return price;
  };

  const emptyCart = () => {
    setCart([]);
  };

  const eraseProductById = (productId) => {
    const filteredProducts = cart.filter(
      (cartProduct) => cartProduct.id !== productId
    );
    setCart(filteredProducts);
  };

  console.log(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        totalQuantity,
        totalPrice,
        emptyCart,
        eraseProductById,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
