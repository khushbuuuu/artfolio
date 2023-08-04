
import './App.css';
import { NavBarog } from './components/NavBarog';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import {Footer} from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Aboutme } from './components/Aboutme';


function App() {
  return (
    <div className="App">
      
      <NavBarog/>
      <Banner/>
      <Projects/>
      <Aboutme/>
      <Contact/>
     
      <Footer/>
     
    </div>
  );
}

export default App;
