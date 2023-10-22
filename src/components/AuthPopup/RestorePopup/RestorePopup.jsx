import Popup from '../Popup';
import Input from '../Input/Input';
import Form from '../Form/Form';

const RestorePopup = (props) => {
  const {
    isOpen,
    onClose,
    onSubmit,
    formDisabled,
    title,
    inputPlaceholder,
    inputType,
    inputName,
    text,
    titleClassMode,
    ...inputProps
  } = props;
  const handleSubmit = () => {
    onSubmit && onSubmit();
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose} title={title} popupContClassMode={titleClassMode}>
      <Form
        className="popup__form"
        onSubmit={handleSubmit}
        btnText="Далее"
        btnType="submit"
        formDisabled={formDisabled}
      >
        <Input
          placeholder={inputPlaceholder}
          type={inputType}
          size="m"
          name={inputName}
          text={text}
          {...inputProps}
        />
      </Form>
    </Popup>
  );
};

export default RestorePopup;
