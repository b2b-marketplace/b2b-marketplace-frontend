const PopupParagraph = ({ children, className }) => {
  return <p className={`popup__paragraph ${className ? className : ''}`}>{children}</p>;
};

export default PopupParagraph;
