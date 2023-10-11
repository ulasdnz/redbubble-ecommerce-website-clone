type Product = {
  src: string;
  title: string;
  artist: string;
  price: number;
  count: number;
};

export default function setProducts(products: Product[]) {
  const oldProductNumber = products.length + 1;

  for (let i = 1; i <= oldProductNumber; i++) {
    window.localStorage.removeItem("count" + i);
    window.localStorage.removeItem("src" + i);
    window.localStorage.removeItem("title" + i);
    window.localStorage.removeItem("artist" + i);
    window.localStorage.removeItem("price" + i);
  }

  window.localStorage.setItem("totalItemNumber", products.length.toString());

  for (let i = 1; i <= products.length; i++) {
    window.localStorage.setItem("count" + i, products[i - 1].count.toString());
    window.localStorage.setItem("src" + i, products[i - 1].src);
    window.localStorage.setItem("title" + i, products[i - 1].title);
    window.localStorage.setItem("artist" + i, products[i - 1].artist);
    window.localStorage.setItem("price" + i, products[i - 1].price.toString());
  }

  window.dispatchEvent(new Event("storage"));
}
