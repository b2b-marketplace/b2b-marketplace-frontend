import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AccountBuyerCompany from "../Page/AccountPage/AccountBuyerCompany/AccountBuyerCompany";

function App() {
  return (
    <div className="app">
      <Header />
      <AccountBuyerCompany />
      <Footer />
    </div>
  );
}

export default App;
