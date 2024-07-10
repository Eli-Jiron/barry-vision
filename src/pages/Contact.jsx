import Form from "../components/ui/Form";
import Input from "../components/ui/Input";

const Contact = () => {
  return (
    <main>
      <div className=" m-4 flex flex-col items-center gap-10">
        <div className="flex justify-center bg-blue-gray-800 rounded-lg">
          <div className="m-12 flex flex-col items-center gap-10">
            <div>
              <img
                className="w-auto h-20"
                src="https://autumn.revolt.chat/attachments/DNtH4twyzoZwAn3-DuBGfN5W8DKdiPw_vjD9i96_4V/1%20sin%20t%C3%ADtulo_20240701224350.png"
                alt="logo"
              />
            </div>
            <div>
              <p className="text-white text-lg text-center">
                Nos especializamos en ofrecer productos y servicios de alta
                calidad, y a un buen precio, que cuidan de tu salud y bienestar
                integral. Además de contar con una amplia gama de medicamentos y
                productos de cuidado personal, también ofrecemos servicios
                ópticos profesionales para atender todas tus necesidades
                visuales.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-blue-gray-700 rounded-lg w-2/3">
          <div className="flex flex-col md:flex-row items-center gap-10 m-12">
            <h2 className="text-2xl text-white font-semibold">
              Información de contacto
            </h2>
            <div className=" text-center">
              <h3 className="text-lg font-semibold text-white">
                correo de contacto:
              </h3>
              <p className="text-lg text-white">barryvision@hotmail.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white">
                número de contacto:
              </h3>
              <p className="text-lg text-white">+506 6009 5500</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center ring-1 rounded-lg w-4/5 ring-black ring-opacity-30">
          <div className="px-6 py-10 mt-8 mb-2 w-full">
            <p className="flex justify-center font-bold text-2xl">
              Contactanos
            </p>
            <Form className="flex flex-col gap-2" text="Enviar">
              <div>
                <label htmlFor="name">Nombre:</label>
                <Input placeholder="L.Ryuzaki" id="name" />
              </div>
              <div>
                <label htmlFor="email">Correo:</label>
                <Input placeholder="correo@hotmail.com" id="email" />
              </div>
              <div>
                <label htmlFor="commentary">Comentario:</label>
                <Input placeholder="comentario..." id="commentary" />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
