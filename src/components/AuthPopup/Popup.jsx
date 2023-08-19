import './Popup.scss';
import IconClose from '../UI/Icon/IconClose';

const Popup = ({ isOpen, onClose, children }) => {
  const isOpenPopupTypeClass = `auth${isOpen ? ' auth_opened' : ''}`;
  return (
    <section className={isOpenPopupTypeClass}>
      <div className="popup">
        <button type="button" onClick={onClose} className="popup__close">
          <IconClose className="popup__close-icon" />
        </button>
        {children}
      </div>
    </section>
  );
};

export default Popup;
