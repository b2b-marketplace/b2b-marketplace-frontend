const PopupParagraph = ({ children, className }) => {
  return <p className={`popup__paragraph ${className || ''}`}>{children}</p>;
};

export default PopupParagraph;
