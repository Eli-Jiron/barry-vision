const Input = (props) => {
  return (
    <input
    id={props.id}
    ref={props.inputRef}
    placeholder={props.placeholder}
    type={props.type}
    className="block w-full py-0.5 rounded-sm border-0 ring-1 ring-slate-400 ring-inset focus:border-0 focus:ring-2 focus:ring-amber-400 focus:ring-inset focus:outline-none"
    />
  );
};

export default Input;
