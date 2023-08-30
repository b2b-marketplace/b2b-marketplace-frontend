import IconComplele from "../../../UI/Icon/IconComplele";

const RegistrationOpportunity = ({ children }) => {
  return (
    <li className="popup__regiter-opportunity">
      <IconComplele />
      <p>{children}</p>
    </li>
  );
};

export default RegistrationOpportunity;
