import cheeseburger from "../images/cheeseburger.jpeg";
import oklahoma from "../images/OKONIONBURGERS.jpg";
import pancho from "../images/superpancho.jpg";
import burrito from "../images/burrito.jpeg";
import salsa from "../images/salsa.jpg";
import meatball from "../images/meatball.jpeg";
import ravioli from "../images/ravioli.jpg";
import pizza from "../images/pizza.jpeg";
import spring from "../images/spring.png";
import rice from "../images/rice.jpg";
import china from "../images/china.jpg";
import chancho from "../images/chancho.jpeg";
import soup from "../images/soup.jpeg";
import locro from "../images/locro.jpg";
import empanada from "../images/empanada.jpg";
import empanadas from "../images/empanadas.jpg";
import asado from "../images/asado.jpg";

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

const obtain_product = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(my_products);
    }, 2000);
  });
};

export { obtain_product };
export { my_products };
