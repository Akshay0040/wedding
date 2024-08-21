import React from 'react';
import aboutimg1 from "../assets/images/a1.jpg"
import aboutimg2 from "../assets/images/a2.jpg"
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";
import "../assets/css/responsive.css";

const About = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>About Us</h2>
              </div>
              <p>
                Quas ab excepturi fuga magni dolor libero id error dolore quo laborum. Facilis atque architecto fugiat laboriosam eaque tempore sed, facere dicta labore eum vero, porro in minima quae corrupti!
                Earum, nam? Nostrum illum, maxime, eligendi soluta iste doloremque quae magnam necessitatibus ipsum, porro molestiae quasi quos totam facilis rem rerum sint voluptatibus. Molestias iure perspiciatis ipsam, esse nemo architecto?
              </p>
              <div className="btn-box">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 img_container">
            <div className="row">
              <div className="col-6">
                <img src={aboutimg1}className="about_img1" alt="About us" />
              </div>
              <div className="col-6 px-0">
                <img src={aboutimg2}className="about_img2" alt="About us" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
