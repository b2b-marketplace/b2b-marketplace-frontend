import './AuthPopup.scss';
import IconClose from '../UI/Icon/IconClose';
import SelectPopup from './SelectPopup/SelectPopup';

const AuthPopup = ({ isOpen, onClose, children }) => {
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

export default AuthPopup;
