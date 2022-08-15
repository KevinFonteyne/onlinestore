import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import AboutMe from './components/aboutMe';
import Catalog from './components/catalog';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ShoppingList from './components/shoppingList';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      
      <Catalog />
    
      <AboutMe></AboutMe>

      <ShoppingList/>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
