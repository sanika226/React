import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Mywork from './components/Mywork';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Home/>
      <About/>
      <Skills/>
      <Mywork/>
      <Contact/>
      
    </div>
  );
}

export default App;
