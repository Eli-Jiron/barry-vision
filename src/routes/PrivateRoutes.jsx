import { Navigate } from "react-router-dom";
import { useNewContext } from "../context/ContextProvider";

const PrivateRoutes = ({ children }) => {
  const { session } = useNewContext();

  if (session) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoutes;
