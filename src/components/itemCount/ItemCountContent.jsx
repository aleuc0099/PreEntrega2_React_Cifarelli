const ItemCountContent = (counter, substCounter, addCounter, addToCart) => {
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
