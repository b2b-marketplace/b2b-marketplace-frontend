import { Button } from "../../UI/Button/Button";

const Form = ({ children, onSubmit, btnOnClick, className, btnText, btnType }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit && onSubmit();

  };

  return (
    <form className={className} onSubmit={handleSubmit} >

      {children}
      {btnText &&
        <div className="popup__buttons">
          <Button
            size="l"
            type={btnType}
            onClick={btnOnClick}
            mode="secondary"
          >
            {btnText}
          </Button>
        </div>
      }
    </form>
  );
};

export default Form;
