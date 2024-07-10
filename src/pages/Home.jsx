import { Link } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel/";
import CarouselCard from "../components/ui/CarouselCard";
import { useNewContext } from "../context/ContextProvider";

const Home = () => {
  const { products, glasses } = useNewContext();

  return (
    <main>
      <div className="flex flex-col gap-2">
        <div className="flex justify-center bg-blue-gray-800 rounded-lg mx-4 mt-6">
          <div className="m-12 flex flex-col items-center gap-10">
            <div>
              <img
                className="w-auto h-20"
                src="https://autumn.revolt.chat/attachments/DNtH4twyzoZwAn3-DuBGfN5W8DKdiPw_vjD9i96_4V/1%20sin%20t%C3%ADtulo_20240701224350.png"
                alt="logo"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white text-xl text-center font-semibold">
                “Tu visión, nuestra pasión: salud y bienestar en cada mirada”
              </p>
              <p className="text-white text-lg text-center">
                Estamos comprometidos a proporcionarte soluciones ópticas y
                farmacéuticas de la más alta calidad para mejorar tu calidad de
                vida. Visítanos y descubre cómo podemos ayudarte a ver y
                sentirte mejor.
              </p>
              <p className="text-white text-lg text-center">
                Puedes encontrarnos en Alajuela, 200m N del mercado central.
              </p>
              <p className="text-white text-lg text-center">
                Nuestros horarios son de Lunes a Viernes de 8:00 a.m a 7:00 p.m,
                Sabados de 8:00 a.m a 5:00 p.m y Domingos de 9:00 a.m a 4:00
                p.m.
              </p>
            </div>
          </div>
        </div>
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
      </div>
    </main>
  );
};

export default Home;
