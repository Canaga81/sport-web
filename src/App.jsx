import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

      <Routes>

        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='plans' element={<Plans />} />
        <Route path='trainers' element={<Trainers />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;