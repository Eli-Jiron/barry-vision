const AdminCard = (props) => {
  return (
    <li>
      <div className="mx-auto px-5">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img
            className="w-full rounded-lg object-cover object-center"
            src={props.url}
            alt="product"
          />
          <div className="py-2 px-2">
            <div>
              <p className="text-lg font-semibold text-blue-gray-900">Nombre:</p>
              <p className="font-semibold text-blue-gray-700">{props.name}</p>
              <div>
                <p className="text-lg font-semibold text-blue-gray-900">Precio:</p>
                <p className="font-semibold text-blue-gray-700">
                  {`₡${props.price}`}
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-blue-gray-900">Descuento:</p>
                <p className="font-semibold text-blue-gray-700">
                  {`${props.discount}%`}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 mt-2">
              <button className="rounded-lg bg-light-blue text-white w-full py-1 font-semibold text-center" onClick={props.editClick}>Editar</button>
              <button className="rounded-lg bg-red text-white w-full py-1 font-semibold text-center" onClick={props.deleteClick}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default AdminCard;
