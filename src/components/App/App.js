import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from "../Page/HomePage/HomePage";
import AccountCompanyBuyer from "../Page/AccountPage/AccountCompanyIndividual/AccountCompanyIndividual";

function App() {
  return (
    <div className="app">
      <Header />
      <AccountCompanyBuyer />
      <Footer />
    </div>
  );
}

export default App;
