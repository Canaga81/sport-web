import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Plans from './pages/plans';
import Trainers from './pages/trainers';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar';

function App () {

  return (
    <BrowserRouter>
      
      <Navbar />

      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainers />
      <NotFound />

    </BrowserRouter>
  );
}

export default App;