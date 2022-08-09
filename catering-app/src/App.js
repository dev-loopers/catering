
import './App.scss';
import Menubar from "./component/Menubar";

import ContactUs from './component/ContactUs';
import Footer from './component/Footer';
import { DragDropContext } from 'react-beautiful-dnd';
import { BrowserRouter , Routes ,Route} from "react-router-dom";
import CateresApp from './CateresApp';
import DecoreApp from './DecoreApp';
function App() {

  return (
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
  );
}

export default App;
