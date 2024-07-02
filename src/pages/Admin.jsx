import Input from "../components/ui/Input";
import Form from "../components/Form";
import { useRef, useState } from "react";
import { validar } from "../utils/validaciones";
import { postData } from "../services/fetch";
import uuid from "react-uuid";

const Admin = () => {
  const inputName = useRef();
  const inputInfo = useRef();
  const inputPrice = useRef();
  const inputUrl = useRef();
  const [msg, setMsg] = useState();
  const apiUrl = "http://localhost:3000/products";

  const addProduct = async (name, info, price, url) => {
    if (validar.vacio(name, info, price, url)) {
      setMsg("Debe completar todos lo campos");
    } else {
      const promise = await postData(apiUrl, {
        name: name,
        info: info,
        price: price,
        url: url,
        id: uuid(),
      });
      if (!promise) {
        alert("Ha ocurrido un error, intentelo más tarde");
      }
    }
  };

  return (
    <main className="m-4">
      <div>
        <Form
          handleClick={() =>
            addProduct(
              inputName.current.value,
              inputInfo.current.value,
              inputPrice.current.value,
              inputUrl.current.value
            )
          }
          text="Agregar"
        >
          <div>
            <label htmlFor="name">Nombre:</label>
            <Input inputRef={inputName} id="name" />
          </div>
          <div>
            <label htmlFor="info">Descripción:</label>
            <Input inputRef={inputInfo} id="info" />
          </div>
          <div>
            <label htmlFor="price">Precio:</label>
            <Input inputRef={inputPrice} id="price" />
          </div>
          <div>
            <label htmlFor="url">Imagen:</label>
            <Input inputRef={inputUrl} id="url" />
            <p>Debe ser un Url</p>
          </div>
          <p>{msg}</p>
        </Form>
      </div>
    </main>
  );
};

export default Admin;
