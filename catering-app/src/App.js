
import './App.scss';
import Menubar from "./component/Menubar";
import ContactUs from './component/ContactUs';
import Footer from './component/Footer';
import CateresApp from './CateresApp';

function App() {
  return (
    <div>
      <Menubar />
      <CateresApp />
      <ContactUs/>
      <Footer/>
    </div>
  
  );
}

export default App;