import EntityRegistration from './EntityRegistration/EntityRegistration';
import PersonRegistration from './PersonRegistration/PersonRegistration';

const RegistrationThirdStep = ({ isEntity, onChange, values, errors, isDirtyInputs }) => {
  if (isEntity) {
    return (<EntityRegistration onChange={onChange} values={values} errors={errors} isDirtyInputs={isDirtyInputs} />);
  }
  return (
    <PersonRegistration onChange={onChange} values={values} errors={errors} isDirtyInputs={isDirtyInputs} />
  );
};

export default RegistrationThirdStep;
