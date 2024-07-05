import ProductCarousel from "../components/ProductCarousel/";
import CarouselCard from "../components/ui/CarouselCard";
import ProductCard from "../components/ui/ProductCard";
import { useNewContext } from "../context/ContextProvider";

const Home = () => {
  const { products, glasses } = useNewContext();

  return (
    <main>
      <ProductCarousel>
        {products.map((e) => {
          return (
            <CarouselCard key={e.id} name={e.name} url={e.url} info={e.info} price={e.price} />
          )
        })}
      </ProductCarousel>
      <div className="container px-6 py-10 mx-auto">
        <ul className="grid grid-cols-2 gap-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          {products.map((e) => (
            <ProductCard key={e.id} name={e.name} price={e.price} url={e.url} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
