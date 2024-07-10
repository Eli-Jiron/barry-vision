import { useState } from "react";
import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import { Link, useNavigate } from "react-router-dom";
import { validar } from "../utils/validaciones";
import { getData } from "../services/fetch";
import { useNewContext } from "../context/ContextProvider.jsx";

const Login = () => {
  ////////////////Variables////////////////
  const [msj, setMsj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const apiUrl = "http://localhost:3000/users";
  const navigate = useNavigate();
  const { setUpdate, update } = useNewContext();
  ////////////////Funciones////////////////
  const logIn = async (email, password) => {
    if (validar.vacio(email, password)) {
      setMsj("Debe llenar todos lo campos");
    } else if (validar.espacios(email, password)) {
      setMsj("No ingrese espacios");
    } else if (validar.email(email)) {
      setMsj("Ingrese un correo valido");
    } else {
      const promise = await getData(apiUrl);
      if (!promise) {
        setMsj("Ha ocurrido un error, intentelo más tarde");
      } else {
        const data = promise.find(
          (e) => e.email === email && e.password === password
        );
        if (data) {
          sessionStorage.setItem("sessionId", data.id);
          setUpdate(update + 1);
          navigate("/");
        } else {
          setMsj("Correo o contraseña no coinciden");
        }
      }
    }
  };

  return (
    <main className="m-4 flex items-center justify-center">
      <div className="ring-1 rounded-lg ring-black ring-opacity-30">
        <div className="px-6 py-10 mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <p className="flex justify-center font-bold text-2xl">
            Inicio de Sesión
          </p>
          <Form
            className="flex flex-col gap-2"
            text="Iniciar Sesión"
            handleClick={() =>
              logIn(email, password)
            }
          >
            <div>
              <label htmlFor="email">Correo:</label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="correo@hotmail.com"
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña:</label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <p className=" h-6 text-red text-sm">{msj}</p>
          </Form>
          <Link
            className="h-12 flex justify-center items-center text-light-blue font-semibold"
            to="/signin"
          >
            Registrese
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
