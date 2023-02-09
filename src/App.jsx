import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';

function App() {

  return (
    <div className="App">
      <h1 className='text-red-500'>React App</h1>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/testimonial" element={<Testimonials/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>

    </div>
  )
}

export default App
