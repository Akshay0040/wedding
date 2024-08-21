import React, { useState } from 'react';
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";
import "../assets/css/responsive.css";
import galleryimg1 from "../assets/images/g1.jpg"; 
import galleryimg2 from "../assets/images/g2.jpg"; 
import galleryimg3 from "../assets/images/g3.jpg"; 
import galleryimg4 from "../assets/images/g4.jpg"; 

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    galleryimg1,
    galleryimg2,
    galleryimg3,
    galleryimg4,
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  onClick={() => openModal(image)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="see_btn">
          <a href="#gallery">See More</a>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={closeModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={selectedImage} className="img-fluid" alt="Selected" />
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={closeModal}></div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
