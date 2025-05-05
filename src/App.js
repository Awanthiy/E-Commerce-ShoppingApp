import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Women from './components/Women/Women';
import Men from './components/Men/Men';
import Footer from './components/Footer/Footer';
import PDetail from './components/PDetail/PDetail';  
import Cart from './components/Cart/Cart'; 
import Signin from './components/Signin/Signin'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/PDetail/:id" element={<PDetail />} />  
          <Route path="/Cart" element={<Cart />} /> 
          <Route path="/Signin" element={<Signin />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
