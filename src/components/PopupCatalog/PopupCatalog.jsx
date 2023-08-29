import CatalogBar from '../CatalogBar/CatalogBar';
import CatalogClothes from './CatalogClothes/CatalogClothes';
import './PopupCatalog.scss';

const PopupCatalog = () => {
  return <div className="popup-catalog">
    <CatalogBar/>
    <CatalogClothes/>
  </div>;
};

export default PopupCatalog;
