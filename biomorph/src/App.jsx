import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./03-Pages/Home/Home";
import AboutUs from "./03-Pages/About-Us/About-Us";
// import Shop from './03-Pages/Shop/Shop';
import ContactUs from "./03-Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path="/shop" element={<Shop />} />*/}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
