import { Routes } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Routes/Home";
import Services from "./Components/Routes/Services";
import About from "./Components/Routes/About";
import Contactus from "./Components/Routes/Contactus";
import Signup from "./Components/Routes/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
