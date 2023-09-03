const PopupButton = ({ children, ...props}) => {
  return (
    <button {...props}>{children}</button>
  );
};

export default PopupButton;
