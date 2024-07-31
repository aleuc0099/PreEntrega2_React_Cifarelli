/* eslint-disable react/prop-types */
import "../../styles/Item_count/Item_count.css";
const ItemCountContent = ({ counter, setCounter, addToCart }) => {
  const addCounter = () => {
    if (counter < 3) {
      setCounter(counter + 1);
    }
  };

  const substCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div id="itemCountMain">
      <div id="itemCountBox">
        <button onClick={substCounter}>-</button>
        <p id="counter_p">{counter}</p>
        <button onClick={addCounter}>+</button>
        <button onClick={() => addToCart(counter)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCountContent;
