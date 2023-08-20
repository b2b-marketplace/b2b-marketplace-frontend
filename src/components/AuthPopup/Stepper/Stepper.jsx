const Stepper = ({ step }) => {
  return (
    <div className="popup__steper">
      <div className={`popup__step${step === 1 ? ' popup__step_active' : ''}`}></div>
      <div className={`popup__step${step === 2 ? ' popup__step_active' : ''}`}></div>
      <div className={`popup__step${step === 3 ? ' popup__step_active' : ''}`}></div>
    </div>
  );
};

export default Stepper;
