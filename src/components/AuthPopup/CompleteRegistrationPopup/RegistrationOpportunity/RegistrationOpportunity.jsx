import IconComplele from "../../../UI/Icon/IconComplele";
import PopupCompleteParagraph from "../../PopupCompleteParagraph/PopupCompleteParagraph";

const RegistrationOpportunity = ({ children }) => {
  return (
    <li className="popup__regiter-opportunity">
      <IconComplele />
      <PopupCompleteParagraph>{children}</PopupCompleteParagraph>
    </li>
  );
};

export default RegistrationOpportunity;
