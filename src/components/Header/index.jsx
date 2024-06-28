import Navbar from "../Navbar";
import { useNewContext } from "../../context/ContextProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { session, setUpdate } = useNewContext();
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="flex justify-between">
          <img
            className="h-12"
            src="https://autumn.revolt.chat/attachments/dINXkcOPGRiKjFqcjBoJFZGulzXNwsIXeuMtnrmrLt/1000_yard_stair_patapon.jpeg"
            alt="a"
          />
          <div className="flex gap-2">
            {session ? (
              <p
                onClick={() => {
                  sessionStorage.removeItem("sessionId");
                  setUpdate(0);
                  navigate("/login");
                }}
              >
                LogOut
              </p>
            ) : (
              <>
                <Link to="/signin">SignIn</Link>
                <Link to="/login">LogIn</Link>
              </>
            )}
          </div>
        </div>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
