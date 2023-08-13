import IconInfo from '../Icon/Icon_info';
import './InfoToolTip.scss';

const InfoToolTip = () => {
  return (
    <div className="info-tooltip__conteiner">
      <IconInfo />
      <span className="info-tooltip__text">
        Эти данные видите только&nbsp;вы, они скрыты от&nbsp;покупателей
      </span>
    </div>
  );
};

export default InfoToolTip;
