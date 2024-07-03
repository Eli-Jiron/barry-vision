const Button = (props) => {
  return (
    <button
      onClick={props.handleClick}
      type={props.type}
      className="bg-blue-gray-800 hover:bg-blue-gray-900 text-white rounded-sm flex justify-center items-center content-center w-full py-1.5"
    >
      {props.txt}
    </button>
  );
};

export default Button;
