/* eslint-disable react/prop-types */
const ItemCountContent = ({counter, setCounter, addToCart}) => {
  const addCounter = () => {
    setCounter(counter + 1);
  };

  const substCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <button onClick={substCounter}>-</button>
      <p id="counter_p">{counter}</p>
      <button onClick={addCounter}>+</button>
      <button onClick={()=> addToCart(counter)}>Add to Cart</button>
    </div>
  );
};

export default ItemCountContent;
