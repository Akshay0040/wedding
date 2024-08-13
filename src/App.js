import React from 'react';

import "../src/components/assets/css/style.css";
import Hero from "../src/components/pages/Hero.jsx"
// import Slider from './components/pages/Slider.jsx';
import About from './components/pages/About';
import Services from './components/pages/Services.jsx';
import Gallery from './components/pages/Gallery.jsx';
import Contact from './components/pages/Contact.jsx';
import Testimonial from './components/pages/Testimonial.jsx';
import Footer from './components/pages/Footer.jsx';

// import "../src/assets/css/bootstrap.css"
// import "../src/assets/css/responsive.css"
// import "../src/assets/css/style.css.map"

function App() {
  return (
    <div className="App">

      <Hero />
      {/* <Slider />  */}
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Testimonial />
      <Footer />

    </div>
  );
}

export default App;