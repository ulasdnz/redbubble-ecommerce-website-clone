import Product from "../../../cards/product";

type Product = {
  artistName: string;
  src: string;
  title: string;
  price: number;
};

type Props = {
  products: Product[];
};

const page: React.FC<Props> = ({ products }) => {
  return (
    <div>
      <div className="grid gap-4 grid-rows-[auto] grid-cols-4  grid-flow-dense px-4 py-2">
        {products.map((product, i) => (
          <Product
            key={i}
            artistName={product.artistName}
            src={product.src}
            title={product.title}
            productNumber={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
