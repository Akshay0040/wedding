import React from 'react';
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";

const InfoAndFooterSection = () => {
  return (
    <section className="info_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="info_contact_container">
              <h5>Get in touch</h5>
              <div className="info_contact">
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Location</span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +01 1234567890</span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>demo@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info_social_container">
              <h5>Follow Us</h5>
              <div className="info_social">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-vimeo" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear">{new Date().getFullYear()}</span> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </section>
    </section>
  );
};

export default InfoAndFooterSection;
