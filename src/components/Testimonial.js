
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
            "I was impressed by the expertise and professionalism of the team at Lesmo Advocates.
            Their dedication to our case was evident, and we're grateful for their outstanding service.". 
            </div>
            <div className="d-flex align-items-center pt-3">
              <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" style={{width: "80px", height: "80px"}} alt="" />
              <div className="pl-4">
                <h5>Bill</h5>
                <p className="m-0">Farmer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 m-4">
            "I hired Lesmo Advocates for a property dispute, and they exceeded my expectations. 
            Their attention to detail and strategic approach were instrumental in resolving the issue efficiently. 
            </div>
            <div className="d-flex align-items-center pt-3">
              <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" style={{width: "80px", height: "80px"}} alt="" />
              <div className="pl-4">
                <h5>Gates</h5>
                <p className="m-0">Doctor</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 m-4">
            "The team at Lesmo Advoacates handled our family's estate planning with care and expertise. 
            They took the time to understand our unique needs and provided comprehensive guidance throughout the process". 
            </div>
            <div className="d-flex align-items-center pt-3">
              <img className="img-fluid rounded-circle" src="img/testimonial-3.jpg" style={{width: "80px", height: "80px"}} alt="" />
              <div className="pl-4">
                <h5>Nicola</h5>
                <p className="m-0">Real Estate</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 m-4">
            "When I needed criminal defense, Lesmo Advocates provided unwavering support and expert representation. 
            Their team navigated the legal process with skill and dedication, resulting in a positive outcome for my case."
            </div>
            <div className="d-flex align-items-center pt-3">
              <img className="img-fluid rounded-circle" src="img/testimonial-4.jpg" style={{width: "80px", height: "80px"}} alt="" />
              <div className="pl-4">
                <h5>Warren</h5>
                <p className="m-0">Entrepreneur</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
