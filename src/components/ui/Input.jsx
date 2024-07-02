const Input = (props) => {
  return (
    <input
    id={props.id}
    ref={props.inputRef}
    placeholder={props.placeholder}
    type={props.type}
    className="block w-full py-0.5 rounded-sm border-0 ring-2 ring-ice-blue ring-inset focus:border-0 focus:ring-3 focus:ring-blue-gray-100 focus:ring-inset focus:outline-none"
    />
  );
};

export default Input;
