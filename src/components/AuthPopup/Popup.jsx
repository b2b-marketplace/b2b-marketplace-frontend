import { useEffect } from 'react';
import './Popup.scss';
import IconClose from '../UI/Icon/IconClose';

const Popup = ({ isOpen, onClose, children }) => {
  const isOpenPopupTypeClass = `auth${isOpen ? ' auth_opened' : ''}`;
  const closeByEvent = (event) => {
    if(event.key === 'Escape' || event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {

    const closeByEvent = (event) => {
      if(event.key === 'Escape' || event.target === event.currentTarget) {
        onClose();
      }
    };
    document.addEventListener('keyup', closeByEvent);

    return () => {
      document.removeEventListener('keyup', closeByEvent);
    };
  }, []);
  
  return (
    <section className={isOpenPopupTypeClass} onMouseDown={closeByEvent}>
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
