import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainerContent from "./ItemDetailContainerContent";
import { my_products } from "../../assets/data/myproducts";

const ItemDetailContainer = () => {
  const [products, set_products] = useState([]);

  const { id } = useParams();
  console.log(id);
  console.log(products);

  useEffect(() => {
    const filtered_products =my_products.filter((product) => product.id == id);
        console.log(filtered_products);
        set_products(filtered_products);
  }, [id]);
  return <ItemDetailContainerContent products={products} />;
};

export default ItemDetailContainer;
