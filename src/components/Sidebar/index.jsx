import { Link } from "react-router-dom";
import { useNewContext } from "../../context/ContextProvider";

const Sidebar = () => {
  const { session, size, sidebarOpen, setSidebarOpen } = useNewContext();
  return (
    <>
      <div
        className={`${
          sidebarOpen ? "visible bg-black" : "invisible"
        } fixed inset-0 z-10 overflow-hidden opacity-60 transition-[background-color,visibility] duration-500`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      ></div>
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed z-20 transform-gpu transition-transform duration-500`}
      >
        <div className="h-screen w-60 bg-white">
          <div className="w-full flex justify-end">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex justify-center items-center mx-1 my-1 text-red font-semibold text-xl h-9 w-9 rounded-full hover:bg-red hover:bg-opacity-15"
            >
              X
            </button>
          </div>
          <nav className="px-3">
            <div>
              <div
                className={`${
                  size.width <= 464 ? "block" : "hidden"
                } border-t-[1px] border-t-black`}
              >
                <div className="flex flex-col gap-1 my-2">
                  <div
                    className={`${
                      location.pathname === "/" && "bg-light-green text-white"
                    } flex rounded-md hover:bg-light-green hover:text-white`}
                  >
                    <Link
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      className="w-full mx-3 my-1"
                      to="/"
                    >
                      Inicio
                    </Link>
                  </div>
                  <div
                    className={`${
                      location.pathname === "/pharmacy" &&
                      "bg-light-green text-white"
                    } flex rounded-md hover:bg-light-green hover:text-white`}
                  >
                    <Link
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      className="w-full mx-3 my-1"
                      to="/pharmacy"
                    >
                      Farmacia
                    </Link>
                  </div>
                  <div
                    className={`${
                      location.pathname === "/glasses" &&
                      "bg-light-green text-white"
                    } flex rounded-md hover:bg-light-green hover:text-white`}
                  >
                    <Link
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      className="w-full mx-3 my-1"
                      to="/glasses"
                    >
                      Lentes
                    </Link>
                  </div>
                  <div
                    className={`${
                      location.pathname === "/about-us" &&
                      "bg-light-green text-white"
                    } flex rounded-md hover:bg-light-green hover:text-white`}
                  >
                    <Link
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      className="w-full mx-3 my-1"
                      to="about-us"
                    >
                      Sobre nosotros
                    </Link>
                  </div>
                  <div
                    className={`${
                      location.pathname === "/contact" &&
                      "bg-light-green text-white"
                    } flex rounded-md hover:bg-light-green hover:text-white`}
                  >
                    <Link
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      className="w-full mx-3 my-1"
                      to="/contact"
                    >
                      Contactenos
                    </Link>
                  </div>
                </div>
              </div>
              {session && (
                <div className="border-t-[1px] border-t-black">
                  <div
                    className={`${
                      location.pathname === "/admin" &&
                      "bg-light-green text-white"
                    } flex rounded-md hover:bg-light-green hover:text-white my-2`}
                  >
                    <Link
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      className="w-full mx-3 my-1"
                      to="/admin"
                    >
                      Panel de administracion
                    </Link>
                  </div>
                </div>
              )}
              <div className="border-t-[1px] border-t-black">
                <div className="flex flex-col gap-1 my-2">
                  {session ? (
                    <>
                      <div className="flex rounded-md text-red hover:bg-red hover:text-white">
                        <Link
                          className="w-full mx-3 my-1"
                          to="/login"
                          onClick={() => {
                            sessionStorage.removeItem("sessionId");
                          }}
                        >
                          LogOut
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className={`${
                          location.pathname === "/signin" &&
                          "bg-light-green text-white"
                        } flex rounded-md hover:bg-light-green hover:text-white`}
                      >
                        <Link
                          onClick={() => setSidebarOpen(!sidebarOpen)}
                          className="w-full mx-3 my-1"
                          to="/signin"
                        >
                          SignIn
                        </Link>
                      </div>
                      <div
                        className={`${
                          location.pathname === "/login" &&
                          "bg-light-green text-white"
                        } flex rounded-md hover:bg-light-green hover:text-white`}
                      >
                        <Link
                          onClick={() => setSidebarOpen(!sidebarOpen)}
                          className="w-full mx-3 my-1"
                          to="/login"
                        >
                          LogIn
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
