import { Button } from '../../UI/Button/Button';

const Form = ({ children, onSubmit, btnOnClick, className, btnText, btnType, formDisabled }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit && onSubmit();
  };

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      {children}
      {btnText && (
        <div className="popup__buttons">
          <Button
            primary
            size="l"
            type={btnType}
            onClick={btnOnClick}
            mode="secondary"
            dark
            disabled={formDisabled}
          >
            {btnText}
          </Button>
        </div>
      )}
    </form>
  );
};

export default Form;
