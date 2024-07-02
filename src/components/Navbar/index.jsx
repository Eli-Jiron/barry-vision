import { Link } from "react-router-dom";

const Navbar = () => {
  const hoverStyle =
    "hover:text-light-green hover:border-b-light-green hover:border-b-2";
  return (
    <nav className="border-b-2 border-b-ice-blue h-7 drop-shadow-sm">
      <div>
        <ul className="flex justify-center gap-5 font-semibold">
          <li>
            <Link className={hoverStyle} to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className={hoverStyle} to="/pharmacy">
              Farmacia
            </Link>
          </li>
          <li>
            <Link className={hoverStyle} to="/glasses">
              Lentes
            </Link>
          </li>
          <li>
            <Link className={hoverStyle} to="/about-us">
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link className={hoverStyle} to="/contact">
              Contactenos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
