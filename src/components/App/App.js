import { useState } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from "../Page/HomePage/HomePage";
import SelectPopup from '../AuthPopup/SelectPopup/SelectPopup';
import RegisterPopup from '../AuthPopup/RegisterPopup/RegisterPopup';
import LoginPopup from '../AuthPopup/LoginPopup/LoginPopup';
import CompleteRegistrationPopup from '../AuthPopup/CompleteRegistrationPopup/CompleteRegistrationPopup';
import CompleteLoginPopup from '../AuthPopup/CompleteLoginPopup/CompleteLoginPopup';
import SelectRestorePopup from '../AuthPopup/SelectRestorePopup/SelectRestorePopup';
import RestoreByEmailPopup from '../AuthPopup/RestoreByEmailPopup/RestoreByEmailPopup';
import RestoreByPhonePopup from '../AuthPopup/RestoreByPhonePopup/RestoreByPhonePopup';
import ConfirmRestoreByPhonePopup from '../AuthPopup/ConfirmRestoreByPhonePopup/ConfirmRestoreByPhonePopup';
import ConfirmRestoreByEmailPopup from '../AuthPopup/ConfirmRestoreByEmailPopup/ConfirmRestoreByEmailPopup';
import NewPasswordPopup from '../AuthPopup/NewPasswordPopup/NewPasswordPopup';

function App() {
  const [isSelectPopupOpen, setIsSelectPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isCompleteRegistrationPopupOpen, setIsCompleteRegistrationPopupOpen] = useState(false);
  const [isCompleteLoginPopupOpen, setIsCompleteLoginPopupOpen] = useState(false);
  const [isRestorePopupOpen, setIsRestorePopupOpen] = useState(false);
  const [isRestoreByPhonePopupOpen, setIsRestoreByPhonePopupOpen] = useState(false);
  const [isRestoreByEmailPopupOpen, setIsRestoreByEmailPopupOpen] = useState(false);
  const [isConfirmRestoreByEmailPopupOpen, setIsConfirmRestoreByEmailPopupOpen] = useState(false);
  const [isConfirmRestoreByPhonePopupOpen, setIsConfirmRestoreByPhonePopupOpen] = useState(false);
  const [isNewPasswordPopupOpen, setIsNewPasswordPopupOpen] = useState(false);

  const handlePopupsOpen = (event) => {
    if (event.target.value === 'register') {
      setIsSelectPopupOpen(false);
      setIsRegisterPopupOpen(true);
    }
    if (event.target.value === 'login') {
      setIsSelectPopupOpen(false);
      setIsLoginPopupOpen(true);
    }
    if (event.target.value === 'select') {
      setIsSelectPopupOpen(true);
    }
    if (event.target.value === 'email') {
      setIsRestorePopupOpen(false);
      setIsRestoreByEmailPopupOpen(true);
    }
    if (event.target.value === 'tel') {
      setIsRestorePopupOpen(false);
      setIsRestoreByPhonePopupOpen(true);
    }

  };

  const handleRestorePopupOpen = () => {
    handlePopupsClose();
    setIsRestorePopupOpen(true);
  };

  const handlePopupsClose = () => {
    setIsSelectPopupOpen(false);
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsCompleteRegistrationPopupOpen(false);
    setIsCompleteLoginPopupOpen(false);
    setIsRestorePopupOpen(false);
    setIsRestoreByEmailPopupOpen(false);
    setIsRestoreByPhonePopupOpen(false);
    setIsConfirmRestoreByEmailPopupOpen(false);
    setIsConfirmRestoreByPhonePopupOpen(false);
    setIsNewPasswordPopupOpen(false);
  };

  const handleRegistration = (formData) => {
    setIsCompleteRegistrationPopupOpen(true);
  };

  const handleLogin = (formData) => {
    setIsCompleteLoginPopupOpen(true);
  };

  const handleRestoreByPhone = (formData) => {
    setIsConfirmRestoreByPhonePopupOpen(true);
  };

  const handleRestoreByEmail = (formData) => {
    setIsConfirmRestoreByEmailPopupOpen(true);
  };

  const handleNewPassword = () => {
    setIsNewPasswordPopupOpen(true);
  };

  return (
    <div className="app">
      <Header />
      <HomePage onAuth={handlePopupsOpen} />
      <Footer />
      <SelectPopup onSelectType={handlePopupsOpen} onClose={handlePopupsClose} isOpen={isSelectPopupOpen} />
      <RegisterPopup onClose={handlePopupsClose} isOpen={isRegisterPopupOpen} onSubmit={handleRegistration} />
      <LoginPopup onClose={handlePopupsClose} onRestore={handleRestorePopupOpen} isOpen={isLoginPopupOpen} onSubmit={handleLogin} />
      <CompleteRegistrationPopup onClose={handlePopupsClose} isOpen={isCompleteRegistrationPopupOpen} />
      <CompleteLoginPopup onClose={handlePopupsClose} isOpen={isCompleteLoginPopupOpen} />
      <SelectRestorePopup onSelectType={handlePopupsOpen} isOpen={isRestorePopupOpen} onClose={handlePopupsClose} />
      <RestoreByEmailPopup isOpen={isRestoreByEmailPopupOpen} onClose={handlePopupsClose} onSubmit={handleRestoreByEmail} />
      <RestoreByPhonePopup isOpen={isRestoreByPhonePopupOpen} onClose={handlePopupsClose} onSubmit={handleRestoreByPhone} />
      <ConfirmRestoreByPhonePopup isOpen={isConfirmRestoreByPhonePopupOpen} onClose={handlePopupsClose} onSubmit={handleNewPassword} />
      <ConfirmRestoreByEmailPopup isOpen={isConfirmRestoreByEmailPopupOpen} onClose={handlePopupsClose} />
      <NewPasswordPopup isOpen={isNewPasswordPopupOpen} onClose={handlePopupsClose} />
    </div>
  );
}

export default App;
