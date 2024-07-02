import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-gray-900 text-white mt-auto">
      <div className="flex flex-col flex-wrap gap-2 px-5 py-6 mx-auto md:items-center md:flex-no-wrap">
        <div className="w-full flex flex-col gap-5 md:justify-around md:flex-row md:gap-0 border-b-2 border-b-blue-gray-600">
          <div className="flex justify-center">
            <img
              className="w-auto h-14"
              src="https://autumn.revolt.chat/attachments/DNtH4twyzoZwAn3-DuBGfN5W8DKdiPw_vjD9i96_4V/1%20sin%20título_20240701224350.png"
              alt="logo"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-3">
              <img
                className="h-8"
                src="https://autumn.revolt.chat/attachments/zC1UIFriAUVX5MJE6dHfxE2E3NSplPkUlAT8NXD4ao/call_24dp_FILL0_wght400_GRAD0_opsz24.png"
                alt="icon"
              />
              <h3 className=" text-xl font-semibold">Contactanos</h3>
            </div>
            <ul className="text-center">
              <li>
                <p>+506 6009 5500</p>
              </li>
              <li>
                <p>barryvision@hotmail.com</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-3">
              <img
                className="h-8"
                src="https://autumn.revolt.chat/attachments/pH-j6cRC9hdq9JqFJJavbytNR9dQdmcATGc-vOuubs/person_add_24dp_FILL0_wght400_GRAD0_opsz24.png"
                alt="icon"
              />
              <h3 className="text-xl font-semibold">Seguinos</h3>
            </div>
            <ul className="text-center">
              <li>
                <Link>Facebook</Link>
              </li>
              <li>
                <Link>Instagram</Link>
              </li>
              <li>
                <Link>Twitter</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-3">
              <img
                className="h-8"
                src="https://autumn.revolt.chat/attachments/9wNYWLn7n1o7T1LPuoWhPpxF1wkipgCr0msmajctzc"
                alt="icon"
              />
              <h3 className="text-xl font-semibold">Legal</h3>
            </div>
            <ul className="text-center">
              <li>
                <p>Política de Privacidad</p>
              </li>
              <li>
                <p>Términos y Condiciones</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-3">
              <img
                className="h-8"
                src="https://autumn.revolt.chat/attachments/qS3o_oS5mNMPKIo9r6hS-5vWSA29LFqeJAsBEisJxR"
                alt="icon"
              />
              <h3 className="text-xl font-semibold">Horarios de atención</h3>
            </div>
            <ul className="text-center">
              <li>
                <h3>Lunes a Viernes</h3>
                <p>de 8:00 a.m a 7:00 p.m</p>
              </li>
              <li>
                <h3>Sábado</h3>
                <p>de 8:00 a.m a 5:00 p.m</p>
              </li>
              <li>
                <h3>Domingo</h3>
                <p>de 9:00 a.m a 4:00 p.m</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <div>
            <p>Copyright © 2024 Todos los Derechos Reservados</p>
          </div>
          <div>
            <p>Barry Visión™</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
