export default (currentProductNumber: number): any => {
    const products = [];
  
    for (let i = 1; i <= currentProductNumber; i++) {
      const count = window.localStorage.getItem("count" + i);
      const src = window.localStorage.getItem("src" + i);
      const title = window.localStorage.getItem("title" + i);
      const artist = window.localStorage.getItem("artist" + i);
      const price = window.localStorage.getItem("price" + i);
      if (src && title && artist && price && count) {
        const product = {
          src,
          title,
          artist,
          price: parseInt(price),
          count: parseInt(count),
        };
        products.push(product);
      }
    }
  
    return products;
  };
  