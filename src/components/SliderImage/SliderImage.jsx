import './SliderImage.scss';
import Dot from '../Dot/Dot';

export default function SliderImage({ images }) {
  const width = 100 / images.length;

  const getCurrentSlider = (event) => {
    return event.target.closest('.slider');
  };

  const handleMouseEnter = (event) => {
    const card = getCurrentSlider(event);
    card.querySelector('.slider__images').style.transform = `translateX(${
      -100 * event.target.id
    }%)`;
    [...card.querySelectorAll('.dot')].map((item) => item.classList.remove('dot_fill'));
    [...card.querySelectorAll('.dot')]
      .filter((item) => item.id === event.target.id)[0]
      .classList.add('dot_fill');
  };

  const handleMouseLeave = (event) => {
    const card = getCurrentSlider(event);
    [...card.querySelectorAll('.dot')]
      .filter((item) => item.id === event.target.id)[0]
      .classList.remove('dot_fill');
  };

  const handleStartState = (event) => {
    const card = getCurrentSlider(event);
    card.querySelector('.dot').classList.add('dot_fill');
    card.querySelector('.slider__images').style.transform = `translateX(0%)`;
  };

  return (
    <div className="slider" onMouseLeave={handleStartState}>
      <div className="slider__images">
        {images.map((image, idx) => (
          <img key={idx} id={idx} className="slider__image" src={image} alt="" />
        ))}
      </div>
      <div className="slider__nav">
        {images.map((image, idx) => (
          <div
            key={idx}
            id={idx}
            className="slider__nav_column"
            style={{ width: `${width}%` }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
      <div className="slider__dots">
        {images.map((image, idx) =>
          idx === 0 ? (
            <Dot className="dot dot_fill" key={idx} id={idx} />
          ) : (
            <Dot className="dot" key={idx} id={idx} />
          )
        )}
      </div>
    </div>
  );
}