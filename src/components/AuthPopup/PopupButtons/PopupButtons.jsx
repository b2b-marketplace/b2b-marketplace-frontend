import { Button } from '../../UI/Button/Button';

const PopupButtons = ({
  onClick,
  value1,
  value2,
  buttonText1,
  buttonText2,
  dark1,
  dark2,
  name,
}) => {
  return (
    <div className="popup__buttons">
      <Button
        dark={dark1}
        value={value1}
        onClick={onClick}
        type="button"
        size="l"
        extraClass={'popup__extra-button'}
        name={name}
      >
        {buttonText1}
      </Button>
      <Button
        dark={dark2}
        value={value2}
        onClick={onClick}
        type="button"
        size="l"
        extraClass={'popup__extra-button'}
        name={name}
      >
        {buttonText2}
      </Button>
    </div>
  );
};

export default PopupButtons;
