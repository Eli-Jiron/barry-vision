import { Route, Routes } from "react-router-dom";
import Signin from "../pages/Signin";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Pharmacy from "../pages/Pharmacy";
import Glasses from "../pages/Glasses";
import Page404 from "../pages/Page404";
import Contact from "../pages/Contact";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pharmacy" element={<Pharmacy />} />
      <Route path="/glasses" element={<Glasses />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default RoutesApp;
