import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemListContainerContent from "./ItemListContainerContent";
import { collection, getDocs } from "firebase/firestore";
// import { my_products } from "../../assets/data/myproducts";
import db from "../../db/db";
import "../../styles/Item_list/Item_list.css";

const ItemListContainer = () => {
  const [products, set_products] = useState([]);

  const { category } = useParams();

  const getProducts = () => {
    const productsRef = collection(db, "products");
    getDocs(productsRef).then((answer) => {
      const data = answer.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      set_products(data);
    });
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  // useEffect(() => {
  //   if (category) {
  //     const filtered_products = my_products.filter(
  //       (product) => product.category === category
  //     );
  //     set_products(filtered_products);
  //   } else {
  //     set_products(my_products);
  //   }
  // }, [category]);

  return <ItemListContainerContent products={products} />;
};

export default ItemListContainer;
