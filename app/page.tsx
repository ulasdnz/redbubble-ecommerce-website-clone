// import axios from "axios";

// type Product = {
//   id: number;
//   title: string;
//   category: string;
//   description: string;
//   price: number;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// };

// type getProducts = {
//   data: Product[];
// };

// async function fetchProducts() {
//   const response = await axios.get<getProducts>(
//     "https://fakestoreapi.com/products"
//   );
//   const products = response.data;

//   return products;
// }

export default async  function Home() {
 // const res = await fetchProducts();

  return <main className="p-4">Pageeeeee</main>;
}
