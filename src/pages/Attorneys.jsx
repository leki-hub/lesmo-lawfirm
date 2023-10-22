
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Appointment from '../components/Appointment';

const Attorneys = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <>
        {/* <!-- Page Header Start --> */}
    <div className="container-fluid bg-page-header" style={{marginBottom: "90px"}}>
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "400px"}}>
                <h3 className="display-3 text-white text-uppercase">Attorney</h3>
                <div className="d-inline-flex text-white">
                    <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">Attorney</p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Page Header End --> */}
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="text-center pb-2">
          <h6 className="text-uppercase">Our Attorneys</h6>
          <h1 className="mb-4">Meet Our Attorneys</h1>
        </div>
        <Slider {...settings} className="owl-carousel team-carousel position-relative">
          {[1, 2, 3, 4, 5].map(index => (
            <div key={index} className="team-item text-center bg-white rounded overflow-hidden pt-4">
              <h5 className="mb-2 px-4">Attorney Name</h5>
              <p className="mb-3 px-4">Practice Area</p>
              <div className="team-img position-relative">
                <img className="img-fluid" src={`img/team-${index}.jpg`} alt={`Attorney ${index}`} />
                <div className="team-social">
                  <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Appointment />
    </div>
    </>
  );
};

export default Attorneys;
