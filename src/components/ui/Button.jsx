const Button = (props) => {
  return (
    <button
    onClick={props.handleClick}
    type={props.type}
    className="flex justify-center w-full bg-slate-500 hover:bg-slate-600 text-gray-200 rounded-sm"
    >
      {props.txt}
    </button>
  );
};

export default Button;
