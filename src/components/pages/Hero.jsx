import React, { useState } from 'react';
import heroimg from "../assets/images/hero-bg.jpg";
import "../assets/css/responsive.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import About from './About';
import Gallery from './Gallery';
import Services from './Services';
import TestimonialSection from './Testimonial';
import ContactSection from './Contact';
import Footer from './Footer';

const Hero = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    if (isNavOpen === false) {
      setIsNavOpen(true); 
    } else {
      setIsNavOpen(false);
    }
  };

  return (
    <div>

    <div className="hero_area">
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to="/">
              <span>Caree</span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={isNavOpen}
              aria-label="Toggle navigation"
              onClick={handleToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                <Link className="nav-link" to="/" onClick={handleToggle}>
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleToggle}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/services" onClick={handleToggle}>
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/gallery" onClick={handleToggle}>
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleToggle}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div className="hero_bg_box">
        <img src={heroimg} alt="Hero Background" />
      </div>

      <section className="slider_section">
        <div id="customCarousel1" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-xl-6 mx-auto">
                    <div className="detail-box">
                      <h1>
                        We Are <br />
                        Wedding Planners
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add additional carousel items here */}
          </div>
          {/* Uncomment if you want carousel controls */}
          {/* <div className="carousel_btn-box">
            <a className="carousel-control-prev" href="#customCarousel1" role="button" data-bs-slide="prev">
              <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#customCarousel1" role="button" data-bs-slide="next">
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div> */}
        </div>
      </section>
     
    </div>
    <About />
    <Gallery />
    <Services />
    <ContactSection />
    <TestimonialSection />
    <Footer />
    </div>
  );
};

export default Hero;
