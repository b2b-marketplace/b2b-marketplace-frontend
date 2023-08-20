import IconNext from "../../UI/Icon/IconNext";

const NextButton = ({ onNext }) => {
  return (
    <button className='popup__next' onClick={onNext}>
      <IconNext />
    </button>
  );
};

export default NextButton;
