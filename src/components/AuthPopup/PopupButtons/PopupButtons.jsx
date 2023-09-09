import { Button } from '../../UI/Button/Button';

const PopupButtons = ({ className, onClick, value1, value2, buttonText1, buttonText2, mode1, mode2 }) => {
  return (
    <div className="popup__buttons">
      <Button mode={mode1} value={value1} onClick={onClick} type="button" size="l">{buttonText1}</Button>
      <Button mode={mode2} value={value2} onClick={onClick} type="button" size="l">{buttonText2}</Button>
    </div>
  );
};

export default PopupButtons;
