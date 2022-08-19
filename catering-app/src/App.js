
import './App.scss';
import Menubar from "./component/Menubar";

import ContactUs from './component/ContactUs';
import Footer from './component/Footer';
import { DragDropContext } from 'react-beautiful-dnd';
import { BrowserRouter , Routes ,Route} from "react-router-dom";
import CateresApp from './CateresApp';
import DecoreApp from './DecoreApp';
import { useState, useEffect } from "react";
import axios from 'axios';
import dishListContext from './dishContext';
function App() {

  let [dish, setDish] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setDish(data);
    };
  
    fetchProducts();
  }, []);



  return (
    <dishListContext.Provider value={{dish}}>
    <BrowserRouter>
    <DragDropContext>
    <div>
      <Menubar />
      <Routes>

        <Route index element={<CateresApp/>} />
        <Route path="/" element={<CateresApp/>} />
        <Route path="/caterers" element={<CateresApp/>}/>
        <Route path="/decor" element={<DecoreApp/>} />

      </Routes>
      <ContactUs/><Footer/>
     
    </div>
    </DragDropContext>
    </BrowserRouter>
    </dishListContext.Provider>
  );
}

export default App;
