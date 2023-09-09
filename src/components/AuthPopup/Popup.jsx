import { useEffect } from 'react';
import './Popup.scss';
import IconClose from '../UI/Icon/IconClose';
import Stepper from './Stepper/Stepper';

const Popup = ({ isOpen, onClose, children, step, isShowStepper }) => {
  const isOpenPopupTypeClass = `auth${isOpen ? ' auth_opened' : ''}`;
  const closeByEvent = (event) => {
    if (event.key === 'Escape' || event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {

    const closeByEvent = (event) => {
      if (event.key === 'Escape' || event.target === event.currentTarget) {
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
        <div className={`popup__top-conainer${isShowStepper ? ' popup__top-conainer_with_content' : ''}`}>
          {isShowStepper && <Stepper step={step} />}
          <button type="button" onClick={onClose} className="popup__close">
            <IconClose className="popup__close-icon" />
          </button>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Popup;
