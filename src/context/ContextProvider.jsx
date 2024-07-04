import { useContext, createContext, useState, useEffect } from "react";
import { getData } from "../services/fetch";
import { useLocation } from "react-router-dom";

export const Context = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useNewContext = () => useContext(Context);

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [glasses, setGlasses] = useState([])
  const [session, setSession] = useState();
  const [update, setUpdate] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setSession(sessionStorage.getItem("sessionId") || null);
    getData("http://localhost:3000/glasses/").then((data) => setGlasses(data));
    getData("http://localhost:3000/products/").then((data) => setProducts(data));
  }, [update]);

  return (
    <Context.Provider value={{products, glasses, session, location, update, setUpdate }}>
      {children}
    </Context.Provider>
  );
};
