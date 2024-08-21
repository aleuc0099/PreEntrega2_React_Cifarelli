const cheeseburger = "../assets/images/cheeseburger.jpg";
const oklahoma = "../assets/images/OKONIONBURGERS.jpg";
const pancho = "../assets/images/superpancho.jpg";
const burrito = "../assets/images/burrito.jpg";
const salsa = "../assets/images/salsa.jpg";
const meatball = "../assets/images/meatball.jpg";
const ravioli = "../assets/images/ravioli.jpg";
const pizza = "../assets/images/pizza.jpg";
const spring = "../assets/images/spring.png";
const rice = "../assets/images/rice.jpg";
const china = "../assets/images/china.jpg";
const chancho = "../assets/images/chancho.jpg";
const soup = "../assets/images/soup.jpg";
const locro = "../assets/images/locro.jpg";
const empanada = "../assets/images/empanada.jpg";
const empanadas = "../assets/images/empanadas.jpg";
const asado = "../assets/images/asado.jpg";
import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const my_products = [
  {
    id: 1,
    title: "Cheeseburger",
    price: 10000,
    description: "Classic Cheeseburger",
    category: "american",
    image: cheeseburger,
    rating: {
      rate: 4.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Oklahoma Onion Burger",
    price: 10500,
    description:
      "Oklahoma Style smashburger with onion and cheese.\n Onion NOT optional",
    category: "american",
    image: oklahoma,
    rating: {
      rate: 4.1,
      count: 120,
    },
  },
  {
    id: 3,
    title: "Super Hot-Dog",
    price: 1100,
    description:
      "Greatest hot-dog in town.\n With mayo, ketchup and small fries",
    category: "american",
    image: pancho,
    rating: {
      rate: 4.7,
      count: 120,
    },
  },
  {
    id: 4,
    title: "Best Burrito",
    price: 11000,
    description:
      "Texas Style Mega Burrito, complete with beans, vegetables, meat and sauce",
    category: "american",
    image: burrito,
    rating: {
      rate: 4,
      count: 120,
    },
  },
  {
    id: 5,
    title: "Red Sauce Noodles",
    price: 8000,
    description: "Red Tomatoe Sauce Noodles. With grated cheese",
    category: "italian",
    image: salsa,
    rating: {
      rate: 4.6,
      count: 120,
    },
  },
  {
    id: 6,
    title: "Meatball Pasta",
    price: 10000,
    description:
      "Satisfaction guaranteed. Best Meatballs full of sauce and rich pasta",
    category: "italian",
    image: meatball,
    rating: {
      rate: 5,
      count: 70,
    },
  },
  {
    id: 7,
    title: "Ravioli with chicken sauce",
    price: 10500,
    description: "Especial Nonna's Ravioli with chicken sauce",
    category: "italian",
    image: ravioli,
    rating: {
      rate: 4.5,
      count: 100,
    },
  },
  {
    id: 8,
    title: "Pizza Napoletana",
    price: 9000,
    description:
      "Full-size traditional Pizza Napoletana. Sauce, cheese, tomatoes and garlic. Just Perfection",
    category: "italian",
    image: pizza,
    rating: {
      rate: 4.6,
      count: 80,
    },
  },
  {
    id: 9,
    title: "Spring Rolls x4",
    price: 4500,
    description: "Chinese Spring Rolls. Best in town. Pork and Vegetables",
    category: "chinese",
    image: spring,
    rating: {
      rate: 3.8,
      count: 120,
    },
  },
  {
    id: 10,
    title: "Chicken Chow Fan",
    price: 10000,
    description: "Full of flavour from old China!You know what it is",
    category: "chinese",
    image: rice,
    rating: {
      rate: 4.7,
      count: 120,
    },
  },
  {
    id: 11,
    title: "Thick Sauce Chow Mein",
    price: 10900,
    description:
      "The best chinese noodles with our signature thick sauce. Made for dreams come true",
    category: "chinese",
    image: china,
    rating: {
      rate: 4.8,
      count: 100,
    },
  },
  {
    id: 12,
    title: "Pork Belly and Rice",
    price: 11400,
    description:
      "Roasted and caramelized Pork Belly on top of plain white rice",
    category: "chinese",
    image: chancho,
    rating: {
      rate: 4.8,
      count: 50,
    },
  },
  {
    id: 13,
    title: "Uncle's Crazy Spicy Soup",
    price: 9900,
    description:
      "It's Uncle's Crazy Spicy Soup! Just to clarify, it's not Crazy AND Spacy, it's Crazy Spicy...",
    category: "chinese",
    image: soup,
    rating: {
      rate: 4.1,
      count: 80,
    },
  },
  {
    id: 14,
    title: "Abuela's Locro & Rostro",
    price: 9000,
    description:
      "Locro Argentino, old as time itself. With white beans and spicy sauce",
    category: "argentine",
    image: locro,
    rating: {
      rate: 5,
      count: 120,
    },
  },
  {
    id: 15,
    title: "Ground Meat Empanada x1",
    price: 1200,
    description:
      "One BIG argentine-style empanada, filled with meat and vegetables",
    category: "argentine",
    image: empanada,
    rating: {
      rate: 4.9,
      count: 400,
    },
  },
  {
    id: 16,
    title: "Ground Meat Empanada x6",
    price: 6500,
    description:
      "Six BIG argentine-style empanadas, filled with meat and vegetables",
    category: "argentine",
    image: empanadas,
    rating: {
      rate: 4.5,
      count: 60,
    },
  },
  {
    id: 17,
    title: "Asado Completo",
    price: 20000,
    description:
      "Full Argentine-Style BBQ, including diverse cow and pork meats, with argentine chorizo and blood sausage",
    category: "argentine",
    image: asado,
    rating: {
      rate: 5,
      count: 50,
    },
  },
];

const seedProducts = () => {
  // eslint-disable-next-line no-unused-vars
  my_products.map(({ id, ...rest }) => {
    const productsRef = collection(db, "products");
    addDoc(productsRef, rest);
  });
  return
};

seedProducts();
