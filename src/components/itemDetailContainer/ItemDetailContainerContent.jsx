/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../../styles/Item_detail/Item_detail.css";
import ItemCount from "../itemCount/ItemCount";

const ItemDetailContainerContent = ({ products, addToCart }) => {
  return (
    <div id="main_detail_box">
      {products.map((product) => {
        return (
          <div key={product.id} id="product_box">
            <img id="product_img" src={product.image} alt={product.title} />
            <div id="product_text">
              <h2 id="detail_title">{product.title}</h2>
              <Link
                to={"/categories/" + product.category}
                id="product_category"
              >
                Category: {product.category}
              </Link>
              <p id="product_description">{product.description}.</p>
              <p id="product_price">${product.price}</p>
              <div id="rating_box">
                <p id="rating">rating: {product.rating.rate}</p>
              </div>
            </div>
            <ItemCount addToCart={addToCart} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetailContainerContent;
