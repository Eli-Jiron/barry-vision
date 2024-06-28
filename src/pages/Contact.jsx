import Form from "../components/Form";
import Input from "../components/ui/Input";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-around">
      <div className="w-2/5">
        <p className="flex justify-center font-semibold text-xl">Contactanos</p>
        <Form className="flex flex-col gap-4" text="Enviar">
          <div>
            <label htmlFor="name">Nombre completo:</label>
            <Input id="name" type="text" />
          </div>
          <div>
            <label htmlFor="email">Correo:</label>
            <Input id="email" type="email" />
          </div>
          <div>
            <label htmlFor="msj">Comentario:</label>
            <Input id="msj" type="text" />
          </div>
        </Form>
      </div>

      <div className="w-2/5 min-h-full bg-slate-100">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo
          quis deleniti corrupti, illo tempore porro non consequuntur beatae
          blanditiis, provident exercitationem nulla, ut mollitia dolore. Odit
          quam cumque laboriosam.
        </p>
      </div>
    </div>
  );
};

export default Contact;
