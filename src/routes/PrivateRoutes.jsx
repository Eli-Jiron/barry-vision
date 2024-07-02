import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const sessionId = sessionStorage.getItem("sessionId")

  if (sessionId) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoutes;
