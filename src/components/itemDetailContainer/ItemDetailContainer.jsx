import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainerContent from "./ItemDetailContainerContent";
// import { my_products } from "../../assets/data/myproducts";
import { CartContext } from "../../context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";

const ItemDetailContainer = () => {
  const [products, set_products] = useState([]);

  const { id } = useParams();

  const { addProduct } = useContext(CartContext);

  const addToCart = (counter) => {
    const [myProduct] = products;
    const cartProduct = {
      ...myProduct,
      quantity: counter,
    };
    addProduct(cartProduct);
  };

  const getProduct = () => {
    const docRef = doc(db, "products", id);
    getDoc(docRef).then((answer) => {
      const data = { id: answer.id, ...answer.data() };
      set_products((prevProducts)=> [...prevProducts, data]);
      console.log(data);
      console.log(products);
    });
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   const filtered_products = my_products.filter((product) => product.id == id);
  //   set_products(filtered_products);
  // }, [id]);

  return (
    <ItemDetailContainerContent products={products} addToCart={addToCart} />
  );
};

export default ItemDetailContainer;
