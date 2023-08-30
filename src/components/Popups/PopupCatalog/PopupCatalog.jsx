function PopupCatalog({ isOpen, onClose, children }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__content">
        <button className="popup__close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default PopupCatalog;
