import Form from "../components/ui/Form";
import Input from "../components/ui/Input";

const Eyetest = () => {
  return (
    <main>
      <div className="flex flex-col gap-3 items-center my-4 mx-4">
        <div className="flex flex-col items-center gap-10">
          <div>
            <img
              className="w-auto h-20"
              src="https://autumn.revolt.chat/attachments/zEy8VnPHRo88yUPA9176gBGJkA4u_Cs9mr7M54GLk8/1%20sin%20título_20240701224347.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="flex justify-center ring-1 rounded-lg w-4/5 ring-black ring-opacity-30">
          <div className="px-6 py-10 mt-8 mb-2 w-full">
            <p className="flex justify-center font-bold text-2xl">
              Solicita una cita
            </p>
            <Form className="flex flex-col gap-2 mt-2" text="Enviar">
              <p className="font-semibold text-center">
                indica tus datos personales
              </p>
              <div>
                <label htmlFor="id">Cédula:</label>
                <Input id="id" placeholder="0-0000-0000" />
              </div>
              <div>
                <label htmlFor="name">Nombre:</label>
                <Input id="name" placeholder="L.Ryuzaki" />
              </div>
              <div>
                <label htmlFor="lastname">Apellido:</label>
                <Input id="lastname" placeholder="Lawliet" />
              </div>
              <div>
                <label htmlFor="phoneNumber">Número de télefono:</label>
                <Input id="phoneNumber" placeholder="3033-3003" />
              </div>
              <div>
                <label htmlFor="Email">Correo:</label>
                <Input id="Email" placeholder="correo@hotmail.com" />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Eyetest;
