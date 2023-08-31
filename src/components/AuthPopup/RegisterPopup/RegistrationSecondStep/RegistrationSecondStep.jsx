import EntityRegistration from "./EntityRegistration/EntityRegistration";
import PersonRegistration from "./PersonRegistration/PersonRegistration";

const RegistrationSecondStep = ({ onNext, isEntity }) => {
  if (isEntity) {
    return (<EntityRegistration onNext={onNext} />);
  }
  return (
    <PersonRegistration onNext={onNext} />
  );
};

export default RegistrationSecondStep;
