import Input from "../components/ui/Input";
import Form from "../components/ui/Form";
import { useState } from "react";
import { validar } from "../utils/validaciones";
import { postData, putData, deleteData } from "../services/fetch";
import uuid from "react-uuid";
import { useNewContext } from "../context/ContextProvider";
import Product from "../components/ui/Product";
import Modal from "../components/ui/Modal";

const Admin = () => {
  const { setUpdate, update, products } = useNewContext();

  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");

  const [editName, setEditName] = useState("");
  const [editInfo, setEditInfo] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const [id, setId] = useState();

  const [msg, setMsg] = useState();
  const [openModal, setOpenModal] = useState(false);

  const apiUrl = "http://localhost:3000/products/";

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
      setUpdate(update + 1);
    }
  };

  const editProduct = async () => {
    await putData(apiUrl, id, {
      name: editName,
      info: editInfo,
      price: editPrice,
      url: editUrl,
      id: id,
    });
    setOpenModal(false);
    setUpdate(update + 1);
  };

  return (
    <main className="py-4 px-4">
      <div>
        <Form
          handleClick={() => addProduct(name, info, price, url)}
          text="Agregar"
        >
          <div>
            <label htmlFor="name">Nombre:</label>
            <Input onChange={(e) => setName(e.target.value)} id="name" />
          </div>
          <div>
            <label htmlFor="info">Descripción:</label>
            <Input onChange={(e) => setInfo(e.target.value)} id="info" />
          </div>
          <div>
            <label htmlFor="price">Precio:</label>
            <Input onChange={(e) => setPrice(e.target.value)} id="price" />
          </div>
          <div>
            <label htmlFor="url">Imagen url:</label>
            <Input onChange={(e) => setUrl(e.target.value)} id="url" />
          </div>
          <p>{msg}</p>
        </Form>
      </div>
      <div className="container px-6 py-10 mx-auto">
        <ul className="grid grid-cols-2 gap-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
          {products.map((e) => (
            <Product
              key={e.id}
              name={e.name}
              price={e.price}
              url={e.url}
              deleteClick={async () => {
                await deleteData(apiUrl, e.id);
                setUpdate(update + 1);
              }}
              editClick={() => {
                setOpenModal(true);
                setEditName(e.name);
                setEditInfo(e.info);
                setEditPrice(e.price);
                setEditUrl(e.url);
                setId(e.id);
              }}
            />
          ))}
        </ul>
      </div>

      <Modal
        Open={openModal}
        Close={() => setOpenModal(false)}
        title="Editar producto"
      >
        <div>
          <Form text="Editar" handleClick={() => editProduct()}>
            <div>
              <label htmlFor="name">Nombre:</label>
              <Input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                id="name"
              />
            </div>
            <div>
              <label htmlFor="info">Descripción:</label>
              <Input
                value={editInfo}
                onChange={(e) => setEditInfo(e.target.value)}
                id="info"
              />
            </div>
            <div>
              <label htmlFor="price">Precio:</label>
              <Input
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
                id="price"
              />
            </div>
            <div>
              <label htmlFor="url">Imagen url:</label>
              <Input
                value={editUrl}
                onChange={(e) => setEditUrl(e.target.value)}
                id="url"
              />
            </div>
            <p></p>
          </Form>
        </div>
      </Modal>
    </main>
  );
};

export default Admin;
