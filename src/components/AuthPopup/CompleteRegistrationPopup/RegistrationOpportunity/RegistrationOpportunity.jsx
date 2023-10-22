import PopupParagraph from '../../PopupParagraph/PopupParagraph';
import IconComplele from '../../../UI/Icon/IconComplele';

const RegistrationOpportunity = ({ children }) => {
  return (
    <li className="popup__regiter-opportunity">
      <IconComplele />
      <PopupParagraph>{children}</PopupParagraph>
    </li>
  );
};

export default RegistrationOpportunity;
