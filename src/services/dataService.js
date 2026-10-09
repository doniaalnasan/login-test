import orangeImage from "../assets/product/Orange.png";
import strawberryImage from "../assets/product/Strawberry.png";
import lemonImage from "../assets/product/Lemon.png";
import bananaImage from "../assets/product/Banana.png";
import cheseseImage from "../assets/product/cheese.png";
import breadImage from "../assets/product/braed1.png";
// import breadsImage from "../assets/product/braed2.png";
import yogurtImage from "../assets/product/yogurt.png";
import juiceImage from "../assets/product/drink.png";
// import breefImage from "../assets/product/breef.png";
// import lettuceImage from "../assets/product/lettuce.png";
import CarrotsImage from "../assets/product/Carrots.png";
// import tomatoImage from "../assets/product/tomato.png";
// import cucumbersImage from "../assets/product/Cucumbers.png";
// import snacksImage from "../assets/product/snacks.png";
import cakeImage from "../assets/product/cake.png";
import candyImage from "../assets/product/candy.png";
import potatoImage from "../assets/product/potato.png";




const categories = [
  { id: 1, name: "Bread", icon: "🍞" },
  { id: 2, name: "Cheese", icon: "🧀" },
  { id: 3, name: "Drinks", icon: "🥤" },
  { id: 4, name: "Yogurt", icon: "🥛" },
  { id: 5, name: "Fruits", icon: "🍓" },
  { id: 6, name: "Snacks", icon: "🍿" },
  { id: 7, name: "Cake", icon: "🍰" },
  { id: 8, name: "Candy", icon: "🍬" },
  { id: 9, name: "Vegetables", icon: "🥦" },
];

const products = [
  {
    id: 1,
    title: "Fresh Orange",
    category: "Fruits",
    image: orangeImage,
    price: 9.99,
    oldPrice: 12.99,
    unitPrice: 2.71,
    unit: "lb",
    stock: 12,
    sold: 30,
    trending: true,
    description: "Juicy, sweet oranges picked at peak ripeness. Rich in vitamin C and perfect for fresh juice or a healthy snack.",
  },
  {
    id: 2,
    title: "Strawberries",
    category: "Fruits",
    image: strawberryImage,
    price: 6.49,
    oldPrice: 7.99,
    unitPrice: 4.2,
    unit: "lb",
    stock: 20,
    sold: 54,
    trending: true,
    description: "Bright red strawberries with a naturally sweet flavor. Great for desserts, smoothies and breakfast bowls.",
  },
  {
    id: 3,
    title: "fresh lemon",
    category: "Fruits",
    image: lemonImage,
    price: 4.99,
    oldPrice: null,
    unitPrice: 1.89,
    unit: "lb",
    stock: 35,
    sold: 80,
    trending: true,
    description: "Crisp and refreshing red apples, ideal for snacking, baking or adding to salads.",
  },
  {
    id: 4,
    title: "Yellow Banana",
    category: "Fruits",
    image: bananaImage,
    price: 5.79,
    oldPrice: 6.99,
    unitPrice: 2.99,
    unit: "lb",
    stock: 15,
    sold: 41,
    trending: true,
    description: "Seedless red grapes with a sweet, crunchy bite. A perfect on-the-go snack.",
  },
  {
    id: 5,
    title: "Fresh Carrots",
    category: "Vegetables",
    image: CarrotsImage,
    price: 2.99,
    oldPrice: 3.49,
    unitPrice: 0.99,
    unit: "lb",
    stock: 40,
    sold: 22,
    trending: false,
    description: "Zesty green limes to brighten up drinks, marinades and dressings.",
  },
  {
    id: 6,
    title: "Whole Wheat Bread",
    category: "Bread",
    image: breadImage,
    price: 3.49,
    oldPrice: null,
    unitPrice: 3.49,
    unit: "pc",
    stock: 18,
    sold: 64,
    trending: true,
    description: "Freshly baked whole wheat bread, soft inside with a golden crust.",
  },
  {
    id: 7,
    title: "Cheddar Cheese",
    category: "Cheese",
    image: cheseseImage,
    price: 7.99,
    oldPrice: 9.49,
    unitPrice: 7.99,
    unit: "pc",
    stock: 10,
    sold: 37,
    trending: true,
    description: "Aged cheddar cheese with a rich, sharp taste. Perfect for sandwiches and cheese boards.",
  },
  {
    id: 8,
    title: "Greek Yogurt",
    category: "Yogurt",
    image: yogurtImage,
    price: 4.29,
    oldPrice: 4.99,
    unitPrice: 4.29,
    unit: "pc",
    stock: 25,
    sold: 49,
    trending: false,
    description: "Thick and creamy Greek yogurt, high in protein and great with fruit and honey.",
  },
  {
    id: 9,
    title: "Grape Juice",
    category: "Drinks",
    image: juiceImage,
    price: 5.49,
    oldPrice: null,
    unitPrice: 5.49,
    unit: "pc",
    stock: 30,
    sold: 58,
    trending: true,
    description: "100% fresh squeezed orange juice with no added sugar.",
  },
  {
    id: 10,
    title: "Potato Chips",
    category: "Snacks",
    image: potatoImage,
    price: 2.49,
    oldPrice: 2.99,
    unitPrice: 2.49,
    unit: "pc",
    stock: 50,
    sold: 90,
    trending: false,
    description: "Crunchy salted potato chips, the classic snack for any time.",
  },
  {
    id: 11,
    title: "Chocolate Cake",
    category: "Cake",
    image: cakeImage,
    price: 14.99,
    oldPrice: 18.99,
    unitPrice: 14.99,
    unit: "pc",
    stock: 6,
    sold: 19,
    trending: true,
    description: "Rich chocolate layer cake with smooth chocolate frosting.",
  },
  {
    id: 12,
    title: "Gummy Bears",
    category: "Candy",
    image: candyImage,
    price: 1.99,
    oldPrice: null,
    unitPrice: 1.99,
    unit: "pc",
    stock: 60,
    sold: 72,
    trending: false,
    description: "Colorful fruity gummy bears loved by kids and adults.",
  },
];

// محاكاة طلب من السيرفر
const fakeFetch = (data, ms = 300) =>
  new Promise((resolve) => setTimeout(() => resolve(data), ms));

export const getCategories = () => fakeFetch(categories);

export const getProducts = () => fakeFetch(products);

export const getProductById = (id) =>
  fakeFetch(products.find((p) => p.id === Number(id)) || null);
