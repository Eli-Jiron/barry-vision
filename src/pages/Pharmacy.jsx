import { useEffect, useState } from "react";
import { getData } from "../services/fetch";
import Product from "../components/ui/Product";
import SectionTitle from "../components/ui/SectionTitle";

const Pharmacy = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = "http://localhost:3000/products/";
  useEffect(() => {
    getData(apiUrl).then((data) => setProducts(data));
  }, []);

  return (
    <main>
      <SectionTitle txt="Farmacia" />
      <ul className="flex justify-center flex-wrap gap-5">
        {products.map((e) => (
          <Product key={e.name} name={e.name} price={e.price} url={e.url} />
        ))}
      </ul>
    </main>
  );
};

export default Pharmacy;
