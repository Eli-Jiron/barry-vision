import { Link } from "react-router-dom";
import { useNewContext } from "../../context/ContextProvider";

const Navbar = () => {
  const { location, size } = useNewContext();

  return (
    <nav
      className={`${
        size.width <= 464 ? "hidden" : "block"
      } border-b-2 border-b-ice-blue h-7 drop-shadow-sm sticky bg-white`}
    >
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
                location.pathname === "/eye-test" &&
                "text-light-green border-b-2 border-b-light-green"
              } hover:text-light-green hover:border-b-light-green hover:border-b-2`}
              to="/eye-test"
            >
              Examen de la vista
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
};

export default Navbar;
