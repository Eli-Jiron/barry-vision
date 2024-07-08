import { Link } from "react-router-dom";
import { useNewContext } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ Open, Close }) => {
  const { session, size, update, setUpdate } = useNewContext();
  const navigate = useNavigate();
  return (
    <div
      className={`${
        Open ? "left-0" : "-left-full"
      } fixed z-10 transition-all duration-1000`}
    >
      <div className=" bg-white">
        <button
          onClick={Close}
          className="text-red text-end w-full font-semibold text-2xl px-2"
        >
          X
        </button>
        <div className="flex flex-col sm:flex-row sm:justify-around">
          <div className="h-screen w-72">
            <nav className="mt-10 px-6 ">
              <ul>
                {size.width <= 464 && (
                  <>
                    <li>
                      <Link
                        onClick={Close}
                        to="/"
                        className="hover:bg-ice-blue flex items-center p-2 my-6 transition-colors rounded-lg"
                      >
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={Close}
                        to="/pharmacy"
                        className="hover:bg-ice-blue flex items-center p-2 my-6 transition-colors rounded-lg"
                      >
                        Farmacia
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={Close}
                        to="/glasses"
                        className="hover:bg-ice-blue flex items-center p-2 my-6 transition-colors rounded-lg"
                      >
                        Lentes
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={Close}
                        to="/about-us"
                        className="hover:bg-ice-blue flex items-center p-2 my-6 transition-colors rounded-lg"
                      >
                        Sobre nosotros
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={Close}
                        to="/contact"
                        className="hover:bg-ice-blue flex items-center p-2 my-6 transition-colors rounded-lg"
                      >
                        Contactenos
                      </Link>
                    </li>
                  </>
                )}
                {session ? (
                  <>
                    <li>
                      <Link
                        onClick={Close}
                        to="/admin"
                        className="hover:bg-ice-blue flex items-center p-2 my-6 transition-colors rounded-lg"
                      >
                        Panel de administrador
                      </Link>
                    </li>
                    <li>
                      <p
                        onClick={() => {
                          sessionStorage.removeItem("sessionId");
                          setUpdate(update + 1);
                          navigate("/login");
                          Close();
                        }}
                        className="hover:bg-ice-blue flex items-center p-2 my-6 transition-colors rounded-lg text-red"
                      >
                        LogOut
                      </p>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        onClick={Close}
                        to="/signin"
                        className="hover:bg-ice-blue flex items-center p-2 my-6 transition-colors rounded-lg"
                      >
                        SignIn
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={Close}
                        to="/login"
                        className="hover:bg-ice-blue flex items-center p-2 my-6 transition-colors rounded-lg"
                      >
                        LogIn
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
