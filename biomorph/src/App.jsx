import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './03-Pages/Home/Home';
// import Shop from './03-Pages/Shop/Shop';
// import Contact from './03-Pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
