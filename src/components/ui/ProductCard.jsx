import { useNewContext } from "../../context/ContextProvider";

const ProductCard = (props) => {
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
            <div className="py-2 px-2">
              <p className=" font-bold text-light-green">{props.name}</p>
              <div className="flex justify-between gap-3">
                <div>
                  {props.discount > 0 && (
                    <p className="text-base font-semibold text-blue-gray-700">
                      Antes:
                    </p>
                  )}
                  <p
                    className={`${
                      props.discount > 0 && "line-through"
                    } text-lg font-semibold text-blue-gray-700`}
                  >
                    {`₡${props.price}`}
                  </p>
                </div>
                {props.discount > 0 && (
                  <>
                    <div>
                      <p className="text-base font-semibold text-blue-gray-700">
                        Ahora:
                      </p>
                      <p className="text-lg font-semibold text-blue-gray-700">
                        {`₡${Math.floor(
                          props.price - props.price * (props.discount / 100)
                        )}`}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="flex justify-center items-center h-9 w-9 bg-red rounded-full  ml-auto text-sm font-semibold text-white">
                        {`-${props.discount}%`}
                      </p>
                    </div>
                  </>
                )}
              </div>
              {location.pathname === "/admin" && (
                <div className="flex justify-center gap-3">
                  <button onClick={props.editClick}>Editar</button>
                  <button onClick={props.deleteClick}>Eliminar</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProductCard;
