import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul className="flex justify-center gap-5 text-slate-500 font-semibold">
          <li>
            <Link className="hover:text-amber-500 hover:border-b-amber-500 hover:border-b-2" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="hover:text-amber-500 hover:border-b-amber-500 hover:border-b-2" to="/pharmacy">
              Farmacia
            </Link>
          </li>
          <li>
            <Link className="hover:text-amber-500 hover:border-b-amber-500 hover:border-b-2" to="/glasses">
              Lentes
            </Link>
          </li>
          <li>
            <Link className="hover:text-amber-500 hover:border-b-amber-500 hover:border-b-2" to="/about-us">
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link className="hover:text-amber-500 hover:border-b-amber-500 hover:border-b-2" to="/contact">
              Contactenos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
