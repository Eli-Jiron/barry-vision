const Button = (props) => {
  return (
    <button
    onClick={props.handleClick}
    type={props.type}
    className="flex justify-center content-center w-full py-1.5 bg-slate-500 hover:bg-slate-600 text-gray-200 rounded-sm"
    >
      {props.txt}
    </button>
  );
};

export default Button;
