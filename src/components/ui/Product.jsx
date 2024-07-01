const Product = (props) => {
  return (
    <li key={props.key}>
      <div>
        <div className="flex flex-col items-center gap-1">
          <img className="w-24 md:w-32 lg:w-48 cursor-pointer hover:scale-105" src={props.url} alt={props.name} />
          <div className="flex flex-col items-center">
            <p className="font-bold">{props.name}</p>
            <p className="font-semibold">{props.price}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Product;
