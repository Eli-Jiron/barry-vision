import { useContext, createContext, useState, useEffect } from "react";
import { getData } from "../services/fetch";
import { useLocation } from "react-router-dom";

export const Context = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useNewContext = () => useContext(Context);

export const ContextProvider = ({ children }) => {
  const [size, setSize] = useState({ //obtiene el tamaño de la ventana del usuario
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [products, setProducts] = useState([]);
  const [glasses, setGlasses] = useState([]);
  const [update, setUpdate] = useState(0); //variable que actualiza el useEffect
  const [sidebarOpen, setSidebarOpen] = useState(false); // variable que controla la apertura del sidebar
  const location = useLocation();
  const session = sessionStorage.getItem("sessionId") || null;
  const updateSize = () =>
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  useEffect(() => (window.onresize = updateSize), []);

  useEffect(() => {
    getData("http://localhost:3000/glasses/").then((data) => setGlasses(data));
    getData("http://localhost:3000/products/").then((data) =>
      setProducts(data)
    );
  }, [update]);

  return (
    <Context.Provider
      value={{ products, glasses, session, location, size, sidebarOpen, setSidebarOpen, update, setUpdate }} //exporta todos los valores para ser usados de forma global entre componentes
    >
      {children}
    </Context.Provider>
  );
};
