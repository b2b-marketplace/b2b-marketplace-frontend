import { useLocation, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

import { Preloader } from '../../shared/ui/Preloader';
import usePopup from '../../shared/hooks/usePopup';
import { AppApi } from '../../shared/api';

import './Activation.scss';

const Activation = () => {
  const [init, setInit] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { openPopup } = usePopup('login');

  useEffect(() => {
    setInit(false);
  }, []);

  useEffect(() => {
    if (init) return;
    const [uid, token] = pathname.replace('/activate/', '').split('/');
    AppApi.auth
      .activate({ uid, token })
      .then(() => {
        navigate('/', { replace: true });
        openPopup();
      })
      .catch((err) => {
        console.log(err);
        navigate('/', { replace: true });
      });
  }, [init]);

  return (
    <main className="main">
      <section className="activation">
        <h1 className="activation__title">Активация аккаунта</h1>
        <Preloader />
        <p className="activation__subtitle">Это займёт несколько секунд</p>
      </section>
    </main>
  );
};

export default Activation;
