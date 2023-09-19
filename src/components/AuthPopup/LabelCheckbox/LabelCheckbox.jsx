const LabelCheckbox = ({ id, text, ...props }) => {
  return (

    <label className="popup__label" htmlFor={id}>
      <input
        className={`popup__checkbox popup__checkbox_type_${props.type}`}
        id={id}
        required
        {...props}
      />
      <span className="popup__checkbox-span">{text}</span>
    </label>
  );
};

export default LabelCheckbox;
