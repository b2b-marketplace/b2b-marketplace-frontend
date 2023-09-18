
import EntityRegistration from './EntityRegistration/EntityRegistration';
import PersonRegistration from './PersonRegistration/PersonRegistration';

const RegistrationThirdStep = ({ isEntity, onFormChange }) => {
  if (isEntity) {
    return (<EntityRegistration onFormChange={onFormChange} />);
  }
  return (
    <PersonRegistration onFormChange={onFormChange} />
  );
};

export default RegistrationThirdStep;
