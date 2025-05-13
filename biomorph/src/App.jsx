import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./03-Pages/Home/Home";
import AboutUs from "./03-Pages/About-Us/About-Us";
import Shop from "./03-Pages/Shop/Shop";
import ContactUs from "./03-Pages/Contact/Contact";
import Account from "./03-Pages/Account/Account";
import Register from "./03-Pages/Register/Register";
import Cart from "./03-Pages/Cart/Cart";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/account" element={<Account />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
