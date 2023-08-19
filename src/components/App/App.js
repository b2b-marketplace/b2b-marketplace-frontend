import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomePage from "../Page/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import AccountPage from "../Page/AccountPage/AccountPage";

function App() {
  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/account/*" element={<AccountPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
