import { Link } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel/";
import CarouselCard from "../components/ui/CarouselCard";
import { useNewContext } from "../context/ContextProvider";

const Home = () => {
  const { products, glasses } = useNewContext();

  return (
    <main>
      <div>
        <div className="flex justify-center my-4 mx-1 bg-light-green">
          <h2 className="text-white font-semibold text-2xl my-1">
            Productos en oferta.
          </h2>
        </div>
        <div>
          <div>
            <div className="flex justify-between items-center mx-4 bg-blue-gray-800">
              <h3 className="text-white font-semibold text-lg my-1 ml-2">
                Medicamentos
              </h3>
              <Link className="text-white font-semibold mr-2" to="/pharmacy">
                ver más →
              </Link>
            </div>
            <ProductCarousel>
              {products.map((e) => {
                if (e.discount > 0) {
                  return (
                    <CarouselCard
                      key={e.id}
                      name={e.name}
                      url={e.url}
                      info={e.info}
                      price={e.price}
                      discount={e.discount}
                    />
                  );
                }
              })}
            </ProductCarousel>
          </div>
          <div>
            <div className="flex justify-between items-center mx-4 bg-blue-gray-800">
              <h4 className="text-white font-semibold text-lg my-1 ml-2">
                Lentes
              </h4>
              <Link className="text-white font-semibold mr-2" to="/glasses">
                ver más →
              </Link>
            </div>
            <ProductCarousel>
              {glasses.map((e) => {
                if (e.discount > 0) {
                  return (
                    <CarouselCard
                      key={e.id}
                      name={e.name}
                      url={e.url}
                      info={e.info}
                      price={e.price}
                      discount={e.discount}
                    />
                  );
                }
              })}
            </ProductCarousel>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
