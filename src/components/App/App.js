import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';

function App() {
  return (
    <div className="app">
      <Header />
      <Promo/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
