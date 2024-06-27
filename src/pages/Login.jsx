import Form from "../components/Form";
import Input from "../components/ui/Input";

const Login = () => {
  return (
    <>
      <Form className="w-1/2 flex flex-col gap-2" text="Iniciar Sesión">
        <div>
          <label htmlFor="email">Correo:</label>
          <Input id="email" type="email" placeholder="correo@hotmail.com" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
      </Form>
    </>
  );
};

export default Login;
