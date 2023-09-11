
import EntityRegistration from './EntityRegistration/EntityRegistration';
import PersonRegistration from './PersonRegistration/PersonRegistration';

const RegistrationThirdStep = ({ isEntity }) => {
  if (isEntity) {
    return (<EntityRegistration />);
  }
  return (
    <PersonRegistration/>
  );
};

export default RegistrationThirdStep;
