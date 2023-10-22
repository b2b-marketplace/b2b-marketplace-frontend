import SelectRestorePopup from '../SelectRestorePopup/SelectRestorePopup';
import SelectPopup from '../SelectPopup/SelectPopup';
import RestoreByPhonePopup from '../RestoreByPhonePopup/RestoreByPhonePopup';
import RestoreByEmailPopup from '../RestoreByEmailPopup/RestoreByEmailPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import NewPasswordPopup from '../NewPasswordPopup/NewPasswordPopup';
import ModerationNewProductPopup from '../ModerationNewProductPopup/ModerationNewProductPopup';
import LoginPopup from '../LoginPopup/LoginPopup';
import LinkingCardPopup from '../LinkingCardPopup/LinkingCardPopup';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import ConfirmRestoreByPhonePopup from '../ConfirmRestoreByPhonePopup/ConfirmRestoreByPhonePopup';
import ConfirmRestoreByEmailPopup from '../ConfirmRestoreByEmailPopup/ConfirmRestoreByEmailPopup';
import CompleteRegistrationPopup from '../CompleteRegistrationPopup/CompleteRegistrationPopup';
import CompleteLoginPopup from '../CompleteLoginPopup/CompleteLoginPopup';

const AuthPopup = () => {
  return (
    <>
      <SelectPopup />
      <RegisterPopup />
      <LoginPopup />
      <CompleteRegistrationPopup />
      <CompleteLoginPopup />
      <SelectRestorePopup />
      <RestoreByEmailPopup />
      <RestoreByPhonePopup />
      <ConfirmRestoreByPhonePopup />
      <ConfirmRestoreByEmailPopup />
      <NewPasswordPopup />
      <ModerationNewProductPopup />
      <ErrorPopup />
      <LinkingCardPopup />
      {/* <CancelAddProductPopup /> */}
    </>
  );
};

export default AuthPopup;
