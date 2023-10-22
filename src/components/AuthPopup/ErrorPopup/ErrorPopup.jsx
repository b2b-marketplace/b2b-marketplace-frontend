import Popup from '../Popup';
import usePopup from '../../../shared/hooks/usePopup';
import useError from '../../../shared/hooks/useError';

const ErrorPopup = () => {
  const { isOpen, closePopup } = usePopup('error');

  const { error, clearError } = useError();

  useError(() => {
    if (!isOpen) {
      clearError();
    }
  }, [isOpen]);

  return (
    <Popup isOpen={isOpen} onClose={closePopup} title="Ошибка">
      {typeof error === 'object' && error !== null && !Array.isArray(error) ? (
        Object.values(error).map((errValue, index) => (
          <p key={index} className="popup__subtitle">
            {errValue}
          </p>
        ))
      ) : (
        <p className="popup__subtitle">{error}</p>
      )}
    </Popup>
  );
};

export default ErrorPopup;
