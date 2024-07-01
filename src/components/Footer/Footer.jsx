import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <img src="" alt="logo" />
        </div>
        <div>
          <div>
            <div>
              <img src="" alt="icon" />
              <h3>Contactanos</h3>
            </div>
            <ul>
              <li>
                <p>+506 6009 5500</p>
              </li>
              <li>
                <p>barryvision@hotmail.com</p>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <img src="" alt="icon" />
              <h3>Siguenos</h3>
            </div>
            <ul>
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
          <div>
            <div>
              <img src="" alt="icon" />
              <h3>Legal</h3>
            </div>
            <ul>
              <li>
                <p>Política de Privacidad</p>
              </li>
              <li>
                <p>Términos y Condiciones</p>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <img src="" alt="icon" />
              <h3>Horarios de atención</h3>
            </div>
            <div>
              <h3>Lunes a Viernes</h3>
              <p>de 8:00 a.m a 7:00 p.m</p>
            </div>
            <div>
              <h3>Sábado</h3>
              <p>de 8:00 a.m a 5:00 p.m</p>
            </div>
            <div>
              <h3>Domingo</h3>
              <p>de 9:00 a.m a 4:00 p.m</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p></p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
