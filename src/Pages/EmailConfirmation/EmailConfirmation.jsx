import React, { useEffect, useState } from 'react';
import './EmailConfirmation.scss';
import { useParams } from 'react-router-dom';
import authApi from '../../utils/authApi'; 

const EmailConfirmation = () => {
  const [confirmationStatus, setConfirmationStatus] = useState('pending');
  const { token } = useParams(); // Получаем параметр "token" из URL

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        // Используйте метод activate из AuthApi для подтверждения почты
        const response = await authApi.activate({ token });

        if (response.status === 'success') {
          setConfirmationStatus('success');
        } else {
          setConfirmationStatus('error');
        }
      } catch (error) {
        console.error('Ошибка подтверждения почты', error);
        setConfirmationStatus('error');
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
        <p className="email-confirmation__text">
          Упс! Что-то пошло не так во время подтверждения по электронной почте.
        </p>
      ) : (
        <p className="email-confirmation__text">Подтверждаю ваш адрес электронной почты...</p>
      )}
    </div>
  );
};

export default EmailConfirmation;


