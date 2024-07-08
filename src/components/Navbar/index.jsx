import { Link } from "react-router-dom";
import { useNewContext } from "../../context/ContextProvider";

const Navbar = () => {
  const { location, size } = useNewContext();

  if (size.width <= 464) {
    return null;
  } else {
    return (
      <nav className="border-b-2 border-b-ice-blue h-7 drop-shadow-sm">
        <div>
          <ul className="flex justify-center gap-5 font-semibold">
            <li>
              <Link
                className={`${
                  location.pathname === "/" &&
                  "text-light-green border-b-2 border-b-light-green"
                } hover:text-light-green hover:border-b-light-green hover:border-b-2`}
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  location.pathname === "/pharmacy" &&
                  "text-light-green border-b-2 border-b-light-green"
                } hover:text-light-green hover:border-b-light-green hover:border-b-2`}
                to="/pharmacy"
              >
                Farmacia
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  location.pathname === "/glasses" &&
                  "text-light-green border-b-2 border-b-light-green"
                } hover:text-light-green hover:border-b-light-green hover:border-b-2`}
                to="/glasses"
              >
                Lentes
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  location.pathname === "/about-us" &&
                  "text-light-green border-b-2 border-b-light-green"
                } hover:text-light-green hover:border-b-light-green hover:border-b-2`}
                to="/about-us"
              >
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  location.pathname === "/contact" &&
                  "text-light-green border-b-2 border-b-light-green"
                } hover:text-light-green hover:border-b-light-green hover:border-b-2`}
                to="/contact"
              >
                Contactenos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Navbar;
