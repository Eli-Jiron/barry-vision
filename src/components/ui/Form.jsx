import Button from "./Button";

const Form = ({ children, text, className, handleClick }) => {
  return (
    <form className={className}>
      {children}
      <Button type={"button"} txt={text} handleClick={handleClick} />
    </form>
  );
};

export default Form;
