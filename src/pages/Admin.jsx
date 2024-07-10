import Input from "../components/ui/Input";
import Form from "../components/ui/Form";
import ProductCard from "../components/ui/ProductCard";
import Modal from "../components/ui/Modal";
import { useState } from "react";
import { validar } from "../utils/validaciones";
import { postData, putData, deleteData } from "../services/fetch";
import uuid from "react-uuid";
import { useNewContext } from "../context/ContextProvider";
import Button from "../components/ui/Button";

const Admin = () => {
  const { setUpdate, update, products, glasses } = useNewContext();

  const [inputName, setInputName] = useState("");
  const [inputInfo, setInputInfo] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputDiscount, setInputDiscount] = useState(0);

  const [editName, setEditName] = useState("");
  const [editInfo, setEditInfo] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editDiscount, setEditDiscount] = useState("")
  const [editUrl, setEditUrl] = useState("");
  const [id, setId] = useState();

  const [modalMsg, setModalMsg] = useState();
  const [msg, setMsg] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [openModalDos, setOpenModalDos] = useState(false);
  const [apiUrl, setApiUrl] = useState("http://localhost:3000/products/");

  const changeUrl = () => {
    apiUrl === "http://localhost:3000/products/"
      ? setApiUrl("http://localhost:3000/glasses/")
      : setApiUrl("http://localhost:3000/products/");
  };

  const addProduct = async (name, info, price, discount, url) => {
    if (validar.vacio(name, info, price, discount, url)) {
      setMsg("Debe completar todos lo campos");
    } else if (validar.numeros(price, discount)) {
      setMsg("No se pueden ingresar valores negativos");
    } else if (discount > 95) {
      setMsg("El descuento no puede ser mayor a 95%");
    } else if (price == 0) {
      setMsg("El precio debe ser mayor a 0");
    } else {
      const promise = await postData(apiUrl, {
        name: name,
        info: info,
        price: price,
        discount: discount,
        url: url,
        id: uuid(),
      });
      if (!promise) {
        setMsg("Ha ocurrido un error, intentelo más tarde");
      }
      setUpdate(update + 1);
    }
  };

  const editProduct = async (name, info, price, discount, url) => {
    if (validar.vacio(name, info, price, discount, url)) {
      setModalMsg("Debe completar todos lo campos");
    } else if (validar.numeros(price, discount)) {
      setModalMsg("No se pueden ingresar valores negativos");
    } else if (discount > 95) {
      setModalMsg("El descuento no puede ser mayor a 95%");
    } else if (price == 0) {
      setModalMsg("El precio debe ser mayor a 0");
    } else {
      const promise = await putData(apiUrl, id, {
        name: name,
        info: info,
        price: price,
        discount: discount,
        url: url,
        id: id,
      });
      if (!promise) {
        setModalMsg("Ha ocurrido un error, intentelo más tarde");
      }
      setOpenModal(!openModal);
      setUpdate(update + 1);
    }
  };

  return (
    <main className="py-4 px-4">
      <button onClick={() => changeUrl()}>Cambiar lol</button>
      <div>
        <Form
          handleClick={() =>
            addProduct(
              inputName,
              inputInfo,
              inputPrice,
              inputDiscount,
              inputUrl
            )
          }
          text="Agregar"
        >
          <div>
            <label htmlFor="name">Nombre:</label>
            <Input
              type="text"
              onChange={(e) => setInputName(e.target.value)}
              id="name"
            />
          </div>
          <div>
            <label htmlFor="info">Descripción:</label>
            <Input
              type="text"
              onChange={(e) => setInputInfo(e.target.value)}
              id="info"
            />
          </div>
          <div>
            <label htmlFor="price">Precio:</label>
            <Input
              type="number"
              onChange={(e) => setInputPrice(e.target.value)}
              id="price"
            />
          </div>
          <div>
            <label htmlFor="discount">Descuento:</label>
            <Input
              value={inputDiscount}
              type="number"
              onChange={(e) => setInputDiscount(e.target.value)}
              id="discount"
            />
          </div>
          <div>
            <label htmlFor="url">Imagen url:</label>
            <Input
              type="text"
              onChange={(e) => setInputUrl(e.target.value)}
              id="url"
            />
          </div>
          <p>{msg}</p>
        </Form>
      </div>
      <div className="container px-6 py-10 mx-auto">
        <ul className="grid grid-cols-2 gap-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          {apiUrl === "http://localhost:3000/products/" ? (
            <>
              {products.map((e) => (
                <ProductCard
                  key={e.id}
                  name={e.name}
                  price={e.price}
                  url={e.url}
                  deleteClick={() => {
                    setOpenModalDos(!openModalDos);
                    setId(e.id);
                  }}
                  editClick={() => {
                    setOpenModal(!openModal);
                    setEditName(e.name);
                    setEditInfo(e.info);
                    setEditPrice(e.price);
                    setEditDiscount(e.discount)
                    setEditUrl(e.url);
                    setId(e.id);
                  }}
                />
              ))}
            </>
          ) : (
            <>
              {glasses.map((e) => (
                <ProductCard
                  key={e.id}
                  name={e.name}
                  price={e.price}
                  url={e.url}
                  deleteClick={() => {
                    setOpenModalDos(!openModalDos);
                    setId(e.id);
                  }}
                  editClick={() => {
                    setOpenModal(!openModal);
                    setEditName(e.name);
                    setEditInfo(e.info);
                    setEditPrice(e.price);
                    setEditUrl(e.url);
                    setEditDiscount(e.discount)
                    setId(e.id);
                  }}
                />
              ))}
            </>
          )}
        </ul>
      </div>

      <Modal
        Open={openModal}
        Close={() => setOpenModal(!openModal)}
        title="Editar producto"
      >
        <div>
          <Form
            text="Editar"
            handleClick={() =>
              editProduct(editName, editInfo, editPrice, editDiscount, editUrl)
            }
          >
            <div>
              <label htmlFor="name">Nombre:</label>
              <Input type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                id="name"
              />
            </div>
            <div>
              <label htmlFor="info">Descripción:</label>
              <Input type="text"
                value={editInfo}
                onChange={(e) => setEditInfo(e.target.value)}
                id="info"
              />
            </div>
            <div>
              <label htmlFor="price">Precio:</label>
              <Input type="number"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
                id="price"
              />
            </div>
            <div>
              <label htmlFor="discount">Descuento:</label>
              <Input type="number"
                value={editDiscount}
                onChange={(e) => setEditDiscount(e.target.value)}
                id="discount"
              />
            </div>
            <div>
              <label htmlFor="url">Imagen url:</label>
              <Input type="text"
                value={editUrl}
                onChange={(e) => setEditUrl(e.target.value)}
                id="url"
              />
            </div>
            <p>{modalMsg}</p>
          </Form>
        </div>
      </Modal>
      <Modal
        Open={openModalDos}
        Close={() => setOpenModalDos(!openModalDos)}
        title="¿Desea eliminar este producto?"
      >
        <Button
          txt="Eliminar"
          handleClick={async () => {
            await deleteData(apiUrl, id);
            setOpenModalDos(false);
            setUpdate(update + 1);
          }}
        />
      </Modal>
    </main>
  );
};

export default Admin;
