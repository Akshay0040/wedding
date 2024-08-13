import React from 'react';
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";


const Slider = () => {
  return (
    <section className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
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
          <div className="carousel-item">
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
          <div className="carousel-item">
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
        </div>
        <div className="carousel_btn-box">
          <a
            className="carousel-control-prev"
            href="#customCarousel1"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#customCarousel1"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slider;
