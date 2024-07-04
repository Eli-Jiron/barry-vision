import { useNewContext } from "../../context/ContextProvider";

const Product = (props) => {
  const { location } = useNewContext();

  return (
    <>
      <li>
        <div className="mx-auto px-5">
          <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <img
              className="w-full rounded-lg object-cover object-center"
              src={props.url}
              alt="product"
            />
            <p className="my-4 pl-4 font-bold text-light-green">{props.name}</p>
            <p className="mb-4 ml-4 text-xl font-semibold text-blue-gray-700">
              {`₡${props.price}`}
            </p>
            {location.pathname === "/admin" && (
              <div className="flex justify-center gap-3">
                <button onClick={props.editClick}>Editar</button>
                <button onClick={props.deleteClick}>Eliminar</button>
              </div>
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default Product;
