const PopupCompleteParagraph = ({ children, className }) => {
  return (
    <p className={`popup__complete-paragraph ${className ? className : ''}`}>{children}</p>
  );
};

export default PopupCompleteParagraph;
