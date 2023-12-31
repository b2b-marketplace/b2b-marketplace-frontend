import { useEffect } from 'react';

import IconClose from '../UI/Icon/Icon_close';

import Stepper from './Stepper/Stepper';

import './Popup.scss';

const Popup = (props) => {
  const {
    isOpen,
    onClose,
    children,
    step,
    isShowStepper,
    titleClassMode,
    title,
    popupContClassMode,
  } = props;
  const isOpenPopupTypeClass = `auth${isOpen ? ' auth_opened' : ''}`;
  const popupContClassName = `popup__container${
    popupContClassMode ? ` ${popupContClassMode}` : ''
  }`;
  const titleClassName = `popup__title${titleClassMode ? ` ${titleClassMode}` : ''}`;

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
        <div
          className={`popup__top-conainer${
            isShowStepper ? ' popup__top-conainer_with_content' : ''
          }`}
        >
          {isShowStepper && <Stepper step={step} />}
          <button type="button" onClick={onClose} className="popup__close">
            <IconClose className="popup__close-icon" />
          </button>
        </div>
        <div className={popupContClassName}>
          <h2 className={titleClassName}>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Popup;
