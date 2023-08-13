import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import AccountProductAdd from '../Account/AccountProductAdd/AccountProductAdd';


function App() {
  return (
    <div className="app">
      
      <Header />
      <AccountProductAdd/>
     
      <Main />
      <Footer />
    </div>
  );
}

export default App;
