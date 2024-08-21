import React from 'react';
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";
import "../assets/css/responsive.css";
import serviceimg1 from "../assets/images/s1.png"; 
import serviceimg2 from "../assets/images/s2.png"; 
import serviceimg3 from "../assets/images/s3.png"; 
import serviceimg4 from "../assets/images/s4.png"; 
import serviceimg5 from "../assets/images/s5.png"; 
import serviceimg6 from "../assets/images/s6.png"; 

const Services = () => {
  const servicesData = [
    {
      imgSrc: serviceimg1,
      title: 'Wedding Planning',
      description: 'Voluptates consequatur, fugiat quisquam sit sed perferendis laborum eaque, totam inventore sint nam doloribus libero quo. Molestiae numquam perspiciatis id.',
    },
    {
      imgSrc: serviceimg2,
      title: 'Wedding Decor',
      description: 'Voluptates consequatur, fugiat quisquam sit sed perferendis laborum eaque, totam inventore sint nam doloribus libero quo. Molestiae numquam perspiciatis id.',
    },
    {
      imgSrc: serviceimg3,
      title: 'Wedding Photography',
      description: 'Voluptates consequatur, fugiat quisquam sit sed perferendis laborum eaque, totam inventore sint nam doloribus libero quo. Molestiae numquam perspiciatis id.',
    },
    {
      imgSrc: serviceimg4,
      title: 'Wedding Venues',
      description: 'Voluptates consequatur, fugiat quisquam sit sed perferendis laborum eaque, totam inventore sint nam doloribus libero quo. Molestiae numquam perspiciatis id.',
    },
    {
      imgSrc: serviceimg5,
      title: 'Catering',
      description: 'Voluptates consequatur, fugiat quisquam sit sed perferendis laborum eaque, totam inventore sint nam doloribus libero quo. Molestiae numquam perspiciatis id.',
    },
    {
      imgSrc: serviceimg6,
      title: 'Bridal Styling',
      description: 'Voluptates consequatur, fugiat quisquam sit sed perferendis laborum eaque, totam inventore sint nam doloribus libero quo. Molestiae numquam perspiciatis id.',
    },
  ];

  return (
    <section className="service_section layout_padding-bottom">
      <div className="service_container">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Services</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
          </div>
          <div className="row">
            {servicesData.map((service, index) => (
              <div className="col-sm-6" key={index}>
                <div className="box">
                  <div className="img-box">
                    <img src={service.imgSrc} alt={service.title} /> 
                  </div>
                  <div className="detail-box">
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-box">
            <a href="#">View More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
