import IconStarAccount from '../UI/Icon/Icon_star-account';
import './AccountPating.scss';

const AccountPating = () => {
  return (
    <div className="account-pating">
      <IconStarAccount />
      <span className="account-pating__rating">5,0</span>
    </div>
  );
};

export default AccountPating;
