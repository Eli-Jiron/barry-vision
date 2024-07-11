import { Navigate } from "react-router-dom";
import { useNewContext } from "../context/ContextProvider";

const PrivateRoutes = ({ children }) => { //rutas privadas
  const { session } = useNewContext();

  if (session) { //valida que haya una sesión iniciada, si la hay deja entrar a la ruta, si no lo redirecciona al inicio
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoutes;
