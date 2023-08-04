import "./App.css";
import { NavBarog } from "./components/NavBarog";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Aboutme } from "./components/Aboutme";
import { Routes, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="App">
      <NavBarog />
      <Banner />
      <Projects />
      <Aboutme />
      <Contact />

      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/something" element={<div> New Page </div>} />
    </Routes>
  );
}

export default App;
