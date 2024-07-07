/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ItemListContainerContent = ({ products }) => {
  return (
    <div className="product_box">
      {products.map((product) => {
        return (
          <Link
            to={"/detail/" + product.id}
            key={product.id}
            className="item_card"
            id={product.title}
          >
            <div id="img_box">
              <img id="product_img" src={product.image} alt={product.title} />
            </div>
            <div id="product_txt">
              <h4 id="product_name">{product.title}</h4>
              <p id="product_category">{product.category}</p>
              <div id="product_info">
                <div id="price_box">
                  <p id="product_price">${product.price}</p>
                </div>
                <p id="product_rating">
                  <strong>rating: </strong>
                  {product.rating.rate}
                </p>
                <p id="product_stock">
                  <strong>stock: </strong>
                  {product.rating.count}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ItemListContainerContent;
