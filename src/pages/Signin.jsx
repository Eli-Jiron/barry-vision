import { useRef, useState } from "react";
import Form from "../components/Form";
import Input from "../components/ui/Input";
import { getData, postData } from "../services/fetch";
import { validar } from "../utils/validaciones";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

const Signin = () => {
  ////////////////Variables////////////////
  const [msj, setMsj] = useState();
  const inputUser = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const apiUrl = "http://localhost:3000/users";
  const navigate = useNavigate();

  ////////////////Funciones////////////////
  const sigIn = async (user, email, password) => {
    if (validar.vacio(user, email, password)) {
      setMsj("Debe llenar todos lo campos");
    } else if (validar.espacios(user, email, password)) {
      setMsj("No ingrese espacios");
    } else if (validar.username(user)) {
      setMsj("Nombre de usuario no valido");
    } else if (validar.email(email)) {
      setMsj("Ingrese un correo valido");
    } else {
      const promise = await getData(apiUrl);
      if (!promise) {
        alert("Ha ocurrido un error, intentelo más tarde");
      } else {
        const findUser = promise.find((e) => e.user === user);
        const findEmail = promise.find((e) => e.email === email);
        if (findUser) {
          setMsj("Nombre de usuario no disponible");
        } else if (findEmail) {
          setMsj("Correo no disponible");
        } else {
          await postData(apiUrl, {
            user: user,
            email: email,
            password: password,
            id: uuid(),
          });
          navigate("/login");
        }
      }
    }
  };

  return (
    <Form
      className="w-1/2 flex flex-col gap-2"
      text="Registrarse"
      handleClick={() =>
        sigIn(
          inputUser.current.value,
          inputEmail.current.value,
          inputPassword.current.value
        )
      }
    >
      <div>
        <label htmlFor="name">Nombre de usuario:</label>
        <Input
          inputRef={inputUser}
          id="name"
          type="text"
          placeholder="L.Ryuzaki"
        />
        <p className="text-gray-500 text-sm">Solo letras, números . y _</p>
      </div>
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
      <p className="h-6 text-red-700">{msj}</p>
    </Form>
  );
};

export default Signin;
