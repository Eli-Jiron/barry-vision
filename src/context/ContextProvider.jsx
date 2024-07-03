import { useContext, createContext, useState, useEffect } from "react";
import { getData } from "../services/fetch";

export const Context = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useNewContext = () => useContext(Context);

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [session, setSession] = useState();
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    setSession(sessionStorage.getItem("sessionId") || null);
    getData("http://localhost:3000/products/").then((data) => setProducts(data));
  }, [update]);

  return (
    <Context.Provider value={{products, session, setSession, update, setUpdate }}>
      {children}
    </Context.Provider>
  );
};
