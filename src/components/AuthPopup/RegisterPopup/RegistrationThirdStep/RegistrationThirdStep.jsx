
import EntityRegistration from './EntityRegistration/EntityRegistration';
import PersonRegistration from './PersonRegistration/PersonRegistration';

const RegistrationThirdStep = ({ isEntity, onChange, values }) => {
  if (isEntity) {
    return (<EntityRegistration onChange={onChange} values={values} />);
  }
  return (
    <PersonRegistration/>
  );
};

export default RegistrationThirdStep;
