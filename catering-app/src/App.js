
import './App.scss';
import Menubar from "./component/Menubar";

import ContactUs from './component/ContactUs';
import Footer from './component/Footer';
import { BrowserRouter , Routes ,Route} from "react-router-dom";
import CateresApp from './CateresApp';
import DecoreApp from './DecoreApp';
import { useState, useEffect } from "react";
import axios from 'axios';
import dishListContext from './dishContext';
import LoginComp from './component/LoginComp';
import RegisterComp from './component/RegisterComp';
import AccountHome from './component/Accounts/AccountHome';
function App() {

  let [dish, setDish] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setDish(data);
    };
  
    fetchProducts();
  }, [dish]);



  return (
    <dishListContext.Provider value={{dish}}>
    <BrowserRouter>

 
    <div>
      <Menubar />
      <Routes>

        <Route index element={<CateresApp/>} />
        <Route path="/" element={<CateresApp/>} />
        <Route path="/caterers" element={<CateresApp/>}/>
        <Route path="/decor" element={<DecoreApp/>} />
        <Route path="/login" element={<LoginComp/>} />
        <Route path="/register" element={<RegisterComp/>} />
        <Route path="/account" element={<AccountHome/>} />


      </Routes>
      <ContactUs/><Footer/>
     
    </div>
    </BrowserRouter>
    </dishListContext.Provider>
  );
}

export default App;
