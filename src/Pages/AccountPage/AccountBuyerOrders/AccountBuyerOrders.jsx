import "./AccountBuyerOrders.scss";
import AccountTitle from "../../../components/UI/Account/AccountTitle/AccountTitle";
import IconPencil from "../../../components/UI/Icon/Icon_pencil";
import { Button } from "../../../components/UI/Button/Button";
import logo from '../../../images/logofooter.svg';
import IconPlus from "../../../components/UI/Icon/Icon_plus";
import IconCalendar from "../../../components/UI/Icon/Icon_calendar";
import IconSearch from "../../../components/UI/Icon/Icon_search";
import { Outlet } from "react-router-dom";
import AccountTabNavigation from "../../../components/Account/AccountTabNavigation/AccountTabNavigation";
import Input from "../../../components/UI/Input/Input";


const AccountBuyerOrders = () => {

  const menuItemBuyer = [
    { key: 1, name: "Все", link: "" },
    { key: 2, name: "В пути", link: "in-transit" },
    { key: 3, name: "Полученные", link: "received" },
    { key: 4, name: "Отмененные", link: "canceled" },
  ];
  const menuItemSeller = [
    { key: 1, name: "Все", link: "" },
    { key: 2, name: "На модерации", link: "" },
    { key: 3, name: "Опубликованные", link: "" },
  ];

  return (
    <section className="account-buyer-orders">
      <div className="account-buyer-orders__header">
        <div className="account-buyer-orders__profile-info">
          <AccountTitle logoSrc={logo} name="ООО «Компания»" title="Покупатель"/>
        </div>
        <div className="account-buyer-orders__control">
          {/*<Link to="/account/product/add">*/}
          <Button extraClass="account-buyer-orders__control-button" mode="tertiary" border={false} type="button" size="m">
            <IconPlus className="account-buyer-orders__icon-plus"/>
            Заявка на закупку
          </Button>
          {/*</Link>*/}
          <div className="account-buyer-orders__search">
            <IconCalendar/>
            <Input mode="primary" type="text" placeholder="Поиск...."/>
            <button className="account-buyer-orders__search-button" type="submit" >
              <IconSearch/>
            </button>
          </div>
        </div>
      </div>

      <div className="account-buyer-orders__main">
        <div className="account-buyer-orders__navigation">
          <AccountTabNavigation menuList={menuItemBuyer}/>
        </div>

        <Outlet/>
      </div>
    </section>
  );
};

export default AccountBuyerOrders;
