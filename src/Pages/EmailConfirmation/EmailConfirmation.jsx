import React, { useEffect, useState } from 'react';
import './EmailConfirmation.scss';
import { useParams } from 'react-router-dom';
import authApi from '../../utils/authApi';

const EmailConfirmation = () => {
  const [confirmationStatus, setConfirmationStatus] = useState('pending');
  const [error, setError] = useState(null); // Добавляем состояние для отслеживания ошибки
  const { token } = useParams(); 
  const { uid } = useParams();

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        // Используйте метод activate из AuthApi для подтверждения почты
        const response = await authApi.activate({ token, uid });

        if (response.status === 'success') {
          setConfirmationStatus('success');
        } else {
          if (response.error === 'Token expired') {
            // Обработка устаревшего токена: предложите пользователю войти заново.
            setConfirmationStatus('error');
            setError('Ваш сеанс завершен. Пожалуйста, выполните вход снова.');
          } else {
            // Обработка других ошибок.
            setConfirmationStatus('error');
            setError(response.error || 'Произошла ошибка при выполнении запроса.');
          }
        }
      } catch (error) {
        console.error('Ошибка подтверждения почты', error);
        setConfirmationStatus('error');
        setError('Произошла ошибка при выполнении запроса.');
      }
    };

    confirmEmail();
  }, [token]);

  return (
    <div className="email-confirmation">
      {confirmationStatus === 'success' ? (
        <p className="email-confirmation__text">
          Ваш адрес электронной почты был успешно подтвержден.
        </p>
      ) : confirmationStatus === 'error' ? (
        <div>
          {error === 'Ваш сеанс завершен. Пожалуйста, выполните вход снова.' ? (
            <p className="email-confirmation__text">{error}</p>
          ) : (
            <p className="email-confirmation__text">
              Упс! Что-то пошло не так во время подтверждения по электронной почте.
            </p>
          )}
        </div>
      ) : (
        <p className="email-confirmation__text">Подтверждаю ваш адрес электронной почты...</p>
      )}
    </div>
  );
};

export default EmailConfirmation;
