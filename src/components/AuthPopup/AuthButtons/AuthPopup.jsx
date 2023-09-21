import CancelAddProductPopup from '../CancelAddProductPopup/CancelAddProductPopup';
import CompleteLoginPopup from '../CompleteLoginPopup/CompleteLoginPopup';
import CompleteRegistrationPopup from '../CompleteRegistrationPopup/CompleteRegistrationPopup';
import ConfirmRestoreByEmailPopup from '../ConfirmRestoreByEmailPopup/ConfirmRestoreByEmailPopup';
import ConfirmRestoreByPhonePopup from '../ConfirmRestoreByPhonePopup/ConfirmRestoreByPhonePopup';
import LoginPopup from '../LoginPopup/LoginPopup';
import ModerationNewProductPopup from '../ModerationNewProductPopup/ModerationNewProductPopup';
import NewPasswordPopup from '../NewPasswordPopup/NewPasswordPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import RestoreByEmailPopup from '../RestoreByEmailPopup/RestoreByEmailPopup';
import RestoreByPhonePopup from '../RestoreByPhonePopup/RestoreByPhonePopup';
import SelectPopup from '../SelectPopup/SelectPopup';
import SelectRestorePopup from '../SelectRestorePopup/SelectRestorePopup';

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
      {/* <CancelAddProductPopup /> */}
    </>
  );
};

export default AuthPopup;
