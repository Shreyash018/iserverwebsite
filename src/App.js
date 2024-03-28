import './App.css';
import Navbar from './components/Navbar';
import Iserver from './components/Iserver';
import Services from './components/Services';
import Contact from './components/Contact';
import Company from './components/Company';
import Resources from './components/Resources';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

function App() {
  return (
   <Router>
   <div>
    <Navbar/>
     <Routes>
     <Route path="/" element={<Iserver/>}></Route>
     <Route path="/services" element={<Services/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
     <Route path="/company" element={<Company/>}></Route>
     <Route path="/resources" element={<Resources/>}></Route>
     

     </Routes>
     <Footer/>
    </div>
  </Router>
  );
}

export default App;
