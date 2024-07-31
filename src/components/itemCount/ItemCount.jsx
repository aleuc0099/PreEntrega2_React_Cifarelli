/* eslint-disable react/prop-types */
import { useState } from "react";
import ItemCountContent from "./ItemCountContent";

const ItemCount = ({ addToCart }) => {
  const [counter, setCounter] = useState(1);

  return (
    <ItemCountContent
      counter={counter}
      setCounter={setCounter}
      addToCart={addToCart}
    />
  );
};

export default ItemCount;
