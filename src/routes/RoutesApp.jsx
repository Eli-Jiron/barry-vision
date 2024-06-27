import { Route, Routes } from "react-router-dom";
import Signin from "../pages/Signin";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Pharmacy from "../pages/Pharmacy";
import Glasses from "../pages/Glasses";
import ErrorPage from "../pages/ErrorPage";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pharmacy" element={<Pharmacy />} />
      <Route path="/glasses" element={<Glasses />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesApp;
