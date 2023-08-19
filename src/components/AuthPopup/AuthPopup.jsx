import './AuthPopup.scss';
import IconClose from '../UI/Icon/IconClose';
import SelectPopupType from './SelectPopupType/SelectPopupType';

const AuthPopup = ({ isOpen, authPopupType, onClose }) => {
  const isOpenPopupTypeClass = `auth${isOpen ? ' auth_opened' : ''}`;
  return (
    <section className={isOpenPopupTypeClass}>
      <div className="popup">
        <button type="button" onClick={onClose} className="popup__close">
          <IconClose className="popup__close-icon" />
        </button>
        <SelectPopupType />
        
      </div>
    </section>
  );
};

export default AuthPopup;
