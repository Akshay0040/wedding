import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "../src/components/assets/css/style.css";
import Hero from "../src/components/pages/Hero.jsx"
import About from './components/pages/About';
import Services from './components/pages/Services.jsx';
import Gallery from './components/pages/Gallery.jsx';
import Contact from './components/pages/Contact.jsx';
import Testimonial from './components/pages/Testimonial.jsx';
import Footer from './components/pages/Footer.jsx';


function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;