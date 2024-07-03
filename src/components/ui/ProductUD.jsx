const ProductUD = (props) => {
  return (
    <li>
      <div className="mx-auto px-5">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img
            className="w-full rounded-lg object-cover object-center"
            src={props.url}
            alt="product"
          />
          <p className="my-4 pl-4 font-bold text-light-green">{props.name}</p>
          <div className="flex gap-6">
            <button onClick={props.editHandleClick}>Editar</button>
            <button onClick={props.deleteHandleClick}>Eliminar</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductUD;
