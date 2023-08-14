import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
import Introduction from './components/intro';
import Value from './components/value';
import BestCategories from './components/bestCategories';
import Regular from './components/regularMenu';
import Adverts from './components/adverts';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar/>  
      <Introduction/>   
      <Value/> 
      <BestCategories/>
      <Regular/>
      <Adverts/>
      <Footer/>
    </div>
  );
}

export default App;
