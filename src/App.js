import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import AboutMe from './components/aboutMe';
import Catalog from './components/catalog';
import ShoppingList from './components/shoppingList';
import Home from './components/home';
import Cart from './components/cart';
import Admin from './components/admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/list" element={<ShoppingList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
