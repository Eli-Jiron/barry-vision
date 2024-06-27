import { useRef, useState } from "react";
import Form from "../components/Form";
import Input from "../components/ui/Input";
import { Link, useNavigate } from "react-router-dom";
import { validar } from "../utils/validaciones";
import { getData } from "../services/fetch";

const Login = () => {
  ////////////////Variables////////////////
  const [msj, setMsj] = useState();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const apiUrl = "http://localhost:3000/users";
  const navigate = useNavigate();

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
        alert("Ha ocurrido un error, intentelo más tarde");
      } else {
        const data = promise.find(
          (e) => e.email === email && e.password === password
        );
        if (data) {
          sessionStorage.setItem("id", data.id);
          navigate("/");
        } else {
          setMsj("Correo o contraseña no coinciden");
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/2">
        <p className="flex justify-center font-bold text-2xl">
          Inicio de Sesión
        </p>
        <Form
          className="flex flex-col gap-2"
          text="Iniciar Sesión"
          handleClick={() =>
            logIn(inputEmail.current.value, inputPassword.current.value)
          }
        >
          <div>
            <label htmlFor="email">Correo:</label>
            <Input
              inputRef={inputEmail}
              id="email"
              type="email"
              placeholder="correo@hotmail.com"
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <Input
              inputRef={inputPassword}
              id="password"
              type="password"
              placeholder="••••••••"
            />
          </div>
          <p className="h-6 flex items-center text-red-700 text-sm">{msj}</p>
        </Form>
        <Link className="h-12 flex justify-center items-center text-amber-600 font-semibold" to="/signin">Registrese</Link>
      </div>
    </div>
  );
};

export default Login;
