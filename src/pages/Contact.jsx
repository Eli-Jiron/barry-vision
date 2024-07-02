import Form from "../components/Form";
import Input from "../components/ui/Input";
import SectionTitle from "../components/ui/SectionTitle";

const Contact = () => {
  return (
    <main>
      <SectionTitle txt="Contacto" />
      <div className="min-h-screen flex items-center justify-around">
        <div className="w-2/5">
          <p className="flex justify-center font-semibold text-xl">
            Contactanos
          </p>
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

        <div className="w-1/3 min-h-full bg-slate-100">
          <div>
            <div>
              <p>correo de contacto:</p>
              <p>barryvision@hotmail.com</p>
            </div>
            <div>
              <p>número de contacto:</p>
              <p>+506 6009 5500</p>
            </div>
          </div>
          <p>
            En nuestra farmacia, nos especializamos en ofrecer productos y
            servicios que cuidan de tu salud y bienestar integral. Además de
            contar con una amplia gama de medicamentos y productos de cuidado
            personal, también ofrecemos servicios ópticos profesionales para
            atender todas tus necesidades visuales.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
