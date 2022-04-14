import './sass/app.scss'
import Navbar from "./components/Navbar";
import Header from './components/Header';
import ItemSlider from './components/ItemSlider';
import About from './components/About';
import MyBio from './components/MyBio';
import Contact from './components/Contact';
import Form from './components/Form';
function App() {
  return (
  
  <main id='home'>
    <Navbar/>
    <section className='header' id='home'>
     <Header />
    </section>
      <section className='container' id='tattoos'>
     <ItemSlider  />
    </section>
      <section className='about' id='about'>
        <About  />
       
    </section>
     <MyBio/>
    <section className='contact' id='contact'>
      <Contact/>
    </section>
     <Form/>
     
    
    </main>
  );
}

export default App;
