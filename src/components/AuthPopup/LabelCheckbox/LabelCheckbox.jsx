const LabelCheckbox = ({ id, text }) => {
  return (

    <label className="popup__label" htmlFor={id}>
      <input id={id} type="checkbox" className={`popup__checkbox popup__checkbox_type${id}`} />
      <span className="popup__checkbox-span">{text}</span>
    </label>
  );
};

export default LabelCheckbox;
