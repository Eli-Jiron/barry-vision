import { useContext, createContext, useState, useEffect } from "react";

export const Context = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useNewContext = () => useContext(Context);

export const ContextProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    setSession(sessionStorage.getItem("sessionId") || null);
  }, [update]);

  return (
    <Context.Provider value={{ session, setSession, update, setUpdate }}>
      {children}
    </Context.Provider>
  );
};
