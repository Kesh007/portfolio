import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
    <Routes>
      <Route path="/portfolio/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='skills' element={<Skills />} />
        <Route path='journey' element={<Journey />} />
        <Route path='gallery' element={<Gallery />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
