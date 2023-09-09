
import EntityRegistration from './EntityRegistration/EntityRegistration';
import PersonRegistration from './PersonRegistration/PersonRegistration';

const RegistrationThirdStep = ({ onNext, isEntity }) => {
  if (isEntity === 'yes') {
    return (<EntityRegistration onNext={onNext} />);
  }
  return (
    <PersonRegistration onNext={onNext} />
  );
};

export default RegistrationThirdStep;
