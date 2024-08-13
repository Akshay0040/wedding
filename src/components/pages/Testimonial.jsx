import React from 'react';
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";
import clientImage from "../assets/images/client.jpg"; // Assuming the image is stored in this path

const TestimonialSection = () => {
  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Testimonial</h2>
        </div>
        <div id="carouselExample2Indicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
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
            <li data-target="#carouselExample2Indicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExample2Indicators" data-slide-to="1"></li>
            <li data-target="#carouselExample2Indicators" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
