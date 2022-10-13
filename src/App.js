import './App.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Normalize from 'react-normalize';

import Home from './pages/home'
import Hydrotreating from './pages/hydrotreating'
import Intro from './pages/intro'

import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className='wrapper'>
      <Normalize/>
    <Navbar/>
    <div className='content'> 
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hydrotreating" element={<Hydrotreating />} />
        <Route path="/intro" element={<Intro />} />
    </Routes>
    </div>
    <Footer/>
    </div>
  )

}

export default App;
