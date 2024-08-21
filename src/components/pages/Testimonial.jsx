import React, { useEffect } from 'react';
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";
import clientImage from "../assets/images/client.jpg"; // Assuming the image is stored in this path

const TestimonialSection = () => {
  useEffect(() => {
    // Automatically start the Bootstrap carousel with an interval of 2 seconds
    const carouselElement = document.querySelector('#carouselExample2Indicators');
    if (carouselElement) {
      const bootstrap = require('bootstrap');
      new bootstrap.Carousel(carouselElement, {
        interval: 2000, // 2 seconds
        ride: "carousel",
      });
    }
  }, []);

  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Testimonial</h2>
        </div>
        <div id="carouselExample2Indicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="client_box">
                <div className="img-box">
                  <img src={clientImage} alt="Client" />
                </div>
                <div className="detail-box">
                  <h5>Ram & Lakhan</h5>
                  <p>
                    Numquam animi sit minus sequi veniam quisquam laborum quibusdam cupiditate debitis corrupti a voluptate placeat eligendi officiis recusandae laboriosam maxime quis dolore soluta doloremque, vel aliquid repudiandae assumenda. Aliquam, necessitatibus.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="client_box">
                <div className="img-box">
                  <img src={clientImage} alt="Client" />
                </div>
                <div className="detail-box">
                  <h5>Ethan & Laila</h5>
                  <p>
                    Numquam animi sit minus sequi veniam quisquam laborum quibusdam cupiditate debitis corrupti a voluptate placeat eligendi officiis recusandae laboriosam maxime quis dolore soluta doloremque, vel aliquid repudiandae assumenda. Aliquam, necessitatibus.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="client_box">
                <div className="img-box">
                  <img src={clientImage} alt="Client" />
                </div>
                <div className="detail-box">
                  <h5>Ethan & Laila</h5>
                  <p>
                    Numquam animi sit minus sequi veniam quisquam laborum quibusdam cupiditate debitis corrupti a voluptate placeat eligendi officiis recusandae laboriosam maxime quis dolore soluta doloremque, vel aliquid repudiandae assumenda. Aliquam, necessitatibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExample2Indicators" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExample2Indicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExample2Indicators" data-bs-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
