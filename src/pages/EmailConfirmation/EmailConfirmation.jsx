import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { AppApi } from '../../shared/api';

import './EmailConfirmation.scss';

const EmailConfirmation = () => {
  const [confirmationStatus, setConfirmationStatus] = useState('pending');
  const [error, setError] = useState(null);
  const { token, uid } = useParams();

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const response = await AppApi.auth.activate({ token, uid });

        if (response.token) {
          setConfirmationStatus('error');
          setError('Ваш токен активации истек. Пожалуйста, запросите новый.');
        } else if (response.uid) {
          setConfirmationStatus('error');
          setError('Неверный идентификатор пользователя или пользователь не существует.');
        } else {
          setConfirmationStatus('success');
        }
      } catch (error) {
        console.error('Ошибка подтверждения почты', error);
        setConfirmationStatus('error');
        setError(error.messages.error || 'Произошла ошибка при выполнении запроса.');
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
          <p className="email-confirmation__error">{error}</p>
          {error === 'Ваш токен активации истек. Пожалуйста, запросите новый.' ? (
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
