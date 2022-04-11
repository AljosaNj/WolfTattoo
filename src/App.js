import './sass/app.scss'
import Navbar from "./components/Navbar";
import Header from './components/Header';
import ItemSlider from './components/ItemSlider';
import About from './components/About';
import MyBio from './components/MyBio';
function App() {
  return (
  
  <>
     <Navbar/>
     <Header />
     <ItemSlider  />
     <About  />
     <MyBio/>
    
    </>
  );
}

export default App;
