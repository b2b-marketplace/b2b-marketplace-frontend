import EntityRegistration from './EntityRegistration/EntityRegistration';
import PersonRegistration from './PersonRegistration/PersonRegistration';

const RegistrationThirdStep = ({ isEntity, ...props }) => {
  if (isEntity) {
    return (<EntityRegistration {...props} />);
  }
  return (
    <PersonRegistration {...props} />
  );
};

export default RegistrationThirdStep;
