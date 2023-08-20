import { Button } from "../../UI/Button/Button";

const Form = ({ children, onSubmit, className, isVisibleSubmit, submitText }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const submitButtonClassName = `popup__submit${isVisibleSubmit ? ' popup__submit_visible' : ''}`;
  return (
    <form className={className} onSubmit={handleSubmit} >
      {children}
      <Button
        className={submitButtonClassName}
        size={'xxxl'}
        type="submit">
        {submitText}
      </Button>
    </form>
  );
};

export default Form;
