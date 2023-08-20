// import { Button } from "../../UI/Button/Button";

const Form = ({ children, onSubmit, className, submitText }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  return (
    <form className={className} onSubmit={handleSubmit} >
      {children}
      {/* <Button
        className="popup__submit"
        size={'xxxl'}
        type="submit">
        {submitText}
      </Button> */}
    </form>
  );
};

export default Form;
