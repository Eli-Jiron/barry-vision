import { useState } from "react";
import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import { getData, postData } from "../services/fetch";
import { validar } from "../utils/validaciones";
import { Link, useNavigate } from "react-router-dom";
import uuid from "react-uuid";

const Signin = () => {
  ////////////////Variables////////////////
  const [msj, setMsj] = useState();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        setMsj("Ha ocurrido un error, intentelo más tarde");
      } else {
        const findUser = promise.find((e) => e.user === user); //verifica que el nombre de usuario no exista aun
        const findEmail = promise.find((e) => e.email === email); //verifica que el correo no exista aun
        if (findUser) {
          setMsj("Nombre de usuario no disponible");
        } else if (findEmail) {
          setMsj("Correo no disponible");
        } else {
          await postData(apiUrl, { //Una vez pasadas las validaciones, sube los datos del registro a la api de usuario
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
    <main className="m-4 flex items-center justify-center">
      <div className="ring-1 rounded-lg ring-black ring-opacity-30">
        <div className="px-6 py-10 mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <p className="flex justify-center font-bold text-2xl">Registro</p>
          <Form
            className="flex flex-col gap-2"
            text="Registrarse"
            handleClick={() => sigIn(username, email, password)}
          >
            <div>
              <label htmlFor="name">Nombre de usuario:</label>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                id="name"
                type="text"
                placeholder="L.Ryuzaki"
              />
              <p className="text-light-blue text-sm">
                Solo letras, números . y _
              </p>
            </div>
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
            <p className="h-6 text-red text-sm">{msj}</p>
          </Form>
          <Link
            className="h-12 flex justify-center items-center text-light-blue font-semibold"
            to="/login"
          >
            Inicie sesión
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Signin;
