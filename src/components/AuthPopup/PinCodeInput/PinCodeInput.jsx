import Input from '../Input/Input';

const PinCodeInput = ({ digits, changeHandler }) => {
  const handleChange = (event) => {
    const { target } = event;

    const newDigits = [...digits];
    newDigits[target.name] = target.value;
    changeHandler(newDigits);
  };

  return (
    <div className="popup__pin">
      {digits.map((digit, index) => (
        <Input
          size="s"
          key={index}
          name={index}
          value={digit}
          onChange={handleChange}
          autoComplete="off"
          placeholder="0"
          maxLength="1"
        />
      ))}
    </div>
  );
};

export default PinCodeInput;
