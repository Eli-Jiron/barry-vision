const Button = (props) => {
  const defaultColor =
    "bg-blue-gray-800 hover:bg-blue-gray-900 text-white rounded-sm";
  return (
    <button
      onClick={props.handleClick}
      type={props.type}
      className={`${props.className ? props.className : defaultColor} flex justify-center items-center content-center w-full py-1.5`}
    >
      {props.txt}
    </button>
  );
};

export default Button;
