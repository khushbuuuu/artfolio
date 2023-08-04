
import './App.css';
import { NavBarog } from './components/NavBarog';
import { Banner } from './components/Banner';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import {Footer} from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Aboutme } from './components/Aboutme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
    <Route path="/"/>{<div className="App">
      
      <NavBarog/>
      <Banner/>
      <Projects/>
      <Aboutme/>
      <Contact/>
     
      <Footer/>
     
    </div>}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
