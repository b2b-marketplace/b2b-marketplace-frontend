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
        <input
          className="popup__digit"
          key={index}
          name={index}
          value={digit}
          onChange={handleChange}
          autoComplete="off"
          placeholder="0"
        />
      ))}
    </div>
  );
};

export default PinCodeInput;
