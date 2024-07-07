import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemListContainerContent from "./ItemListContainerContent";
import { my_products } from "../../assets/data/myproducts";
import "../../styles/Item_list/Item_list.css"

const ItemListContainer = () => {
  const [products, set_products] = useState([]);

  const { category } = useParams();
  console.log(category);
  console.log(products);

  useEffect(() => {
        if (category) {
          const filtered_products = my_products.filter(
            (product) => product.category === category
          );
          set_products(filtered_products);
        } else {
          set_products(my_products);
        }
  }, [category]);

  return <ItemListContainerContent products={products} />;
};

export default ItemListContainer;
