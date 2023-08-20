import { Button } from '../../UI/Button/Button';

const PopupButtons = ({ className, onClick, value1, value2, buttonText1, buttonText2, primary1, primary2 }) => {
  return (
    <div className={`popup__buttons${className ? ` ${className}` : ''}`}>
      <Button primary={primary1} value={value1} onClick={onClick} type="button" size="xxxxl">{buttonText1}</Button>
      <Button primary={primary2} value={value2} onClick={onClick} type="button" size="xxxxl">{buttonText2}</Button>
    </div>
  );
};

export default PopupButtons;
