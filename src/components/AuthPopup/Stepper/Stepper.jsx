import './Stepper.scss';

const Stepper = ({ step }) => {
  return (
    <div className="steps">
      <div className={`step${step === 1 ? ' step_active' : ''}`}></div>
      <div className={`step${step === 2 ? ' step_active' : ''}`}></div>
      <div className={`step${step === 3 ? ' step_active' : ''}`}></div>
      <div className={`step${step === 4 ? ' step_active' : ''}`}></div>
    </div>
  );
};

export default Stepper;
