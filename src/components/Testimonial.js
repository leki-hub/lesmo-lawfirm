
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three items at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992, // Medium screens
        settings: {
          slidesToShow: 2, // Show two items at a time
        }
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1, // Show one item at a time
        }
      }
    ]
  };

  return (
    <div className="container-fluid py-5">
     <div className="container py-5">
        <div className="text-center pb-5">
          <h6 className="text-uppercase">Testimonial</h6>
          <h1 className="mb-5">What Our Clients Say</h1>
        </div>
        <Slider {...settings} className="testimonial-carousel">
          <div className="testimonial-item">
            <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 m-4">
              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr clita lorem
            </div>
            <div className="d-flex align-items-center pt-3">
              <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" style={{width: "80px", height: "80px"}} alt="" />
              <div className="pl-4">
                <h5>Client Name</h5>
                <p className="m-0">Profession</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 m-4">
              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr clita lorem
            </div>
            <div className="d-flex align-items-center pt-3">
              <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" style={{width: "80px", height: "80px"}} alt="" />
              <div className="pl-4">
                <h5>Client Name</h5>
                <p className="m-0">Profession</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 m-4">
              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr clita lorem
            </div>
            <div className="d-flex align-items-center pt-3">
              <img className="img-fluid rounded-circle" src="img/testimonial-3.jpg" style={{width: "80px", height: "80px"}} alt="" />
              <div className="pl-4">
                <h5>Client Name</h5>
                <p className="m-0">Profession</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 m-4">
              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr clita lorem
            </div>
            <div className="d-flex align-items-center pt-3">
              <img className="img-fluid rounded-circle" src="img/testimonial-4.jpg" style={{width: "80px", height: "80px"}} alt="" />
              <div className="pl-4">
                <h5>Client Name</h5>
                <p className="m-0">Profession</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
