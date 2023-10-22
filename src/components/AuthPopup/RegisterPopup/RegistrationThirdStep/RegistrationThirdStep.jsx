import PersonRegistration from './PersonRegistration/PersonRegistration';
import EntityRegistration from './EntityRegistration/EntityRegistration';

const RegistrationThirdStep = ({ isEntity, ...props }) => {
  if (isEntity) {
    return <EntityRegistration {...props} />;
  }
  return <PersonRegistration {...props} />;
};

export default RegistrationThirdStep;
