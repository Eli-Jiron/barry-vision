import ProductCard from "../components/ui/ProductCard";
import { useNewContext } from "../context/ContextProvider";

const Pharmacy = () => {
  const { products } = useNewContext();

  return (
    <main>
      <div className="container px-6 py-10 mx-auto">
        <ul className="grid grid-cols-1 gap-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          {products.map((e) => (
            <ProductCard key={e.id} name={e.name} price={e.price} url={e.url} discount={e.discount} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Pharmacy;
