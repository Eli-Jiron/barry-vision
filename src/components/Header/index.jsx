import { useNewContext } from "../../context/ContextProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { session, setUpdate, update } = useNewContext();
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-light-green">
        <div className="flex justify-between">
          <img
            className="h-14 m-2"
            src="https://autumn.revolt.chat/attachments/DNtH4twyzoZwAn3-DuBGfN5W8DKdiPw_vjD9i96_4V/1%20sin%20título_20240701224350.png"
            alt="a"
          />
          <div className="flex gap-2 m-2">
            {session ? (
              <p
                className="flex justify-center items-center font-semibold text-black cursor-pointer"
                onClick={() => {
                  sessionStorage.removeItem("sessionId");
                  setUpdate(update + 1);
                  navigate("/login");
                }}
              >
                LogOut
              </p>
            ) : (
              <>
                <Link
                  className="flex justify-center items-center font-semibold text-black cursor-pointer"
                  to="/signin"
                >
                  SignIn
                </Link>
                <Link
                  className="flex justify-center items-center font-semibold text-white cursor-pointer"
                  to="/login"
                >
                  LogIn
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
