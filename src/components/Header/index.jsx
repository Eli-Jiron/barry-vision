import hamburgerIcon from "../../assets/hamburgerIcon.svg";
import { useNewContext } from "../../context/ContextProvider";

const Header = () => {
  const { sidebarOpen, setSidebarOpen  } = useNewContext();
  return (
    <>
      <header className="bg-light-green">
        <div className="flex justify-between">
          <div className="flex items-center ml-2">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              <img src={hamburgerIcon} alt="icon" />
            </button>
          </div>
          <div className="flex items-center">
            <img
              className="h-14 m-2"
              src="https://autumn.revolt.chat/attachments/DNtH4twyzoZwAn3-DuBGfN5W8DKdiPw_vjD9i96_4V/1%20sin%20título_20240701224350.png"
              alt="a"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
