import React from 'react';
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";
import galleryimg1 from "../assets/images/g1.jpg"; 
import galleryimg2 from "../assets/images/g2.jpg"; 
import galleryimg3 from "../assets/images/g3.jpg"; 
import galleryimg4 from "../assets/images/g4.jpg"; 

const GallerySection = () => {
  const galleryItems = [
    galleryimg1,
    galleryimg2,
    galleryimg3,
    galleryimg4,
  ];

  return (
    <section className="gallery_section layout_padding" id="gallery">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Our Gallery</h2>
          <p>minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
        </div>
        <div className="row">
          {galleryItems.map((image, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3 mx-auto">
              <div className="box">
                <img src={image} alt={`Gallery ${index + 1}`} />
                <div className="btn-box">
                  <a href={image} data-toggle="lightbox" className="btn-1">
                    <i className="fa fa-picture-o" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="see_btn">
          <a href="">See More</a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
