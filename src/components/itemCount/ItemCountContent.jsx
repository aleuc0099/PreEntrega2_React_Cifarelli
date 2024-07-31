/* eslint-disable react/prop-types */
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
        <button className="plus_minus_btn" onClick={substCounter}>-</button>
        <p id="counter_p">{counter}</p>
        <button className="plus_minus_btn" onClick={addCounter}>+</button>
        <button id="add_to_cart" onClick={() => addToCart(counter)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCountContent;
