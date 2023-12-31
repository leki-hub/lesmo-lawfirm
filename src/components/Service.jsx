import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ServiceCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 items on large screens
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 768, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 2, // Show 2 items on medium screens
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // Show 1 item on small screens
        },
      },
    ],
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h6 className="text-uppercase">Our Practice</h6>
            <h1 className="mb-4">Our Practice Areas</h1>
            <p>
             At <strong>Lesmo Advoacates</strong> we specializes in a wide range of practice areas, 
             including;Civil Law,Family Law,Business Law  and Criminal Law.
             
            </p>
            <a href="" className="btn btn-primary mt-2">
              More Services
            </a>
          </div>
          <div className="col-lg-9 pt-5 pt-lg-0 bg-primary ">
            <Slider {...settings}>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-landmark"></i>
                </div>
                <h5 className="mb-4 px-4">Civil Law</h5>
                <p className="m-0">
                In matters of Civil Law, we offer a range of services including:
                Contract Disputes,Property Disputes,Personal Injury and Employment Law.
                </p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-users"></i>
                </div>
                <h5 className="mb-4 px-4">Family Law</h5>
                <p className="m-0">
                Providing compassionate guidance in divorce, child custody, support, and related matters in accordance with law provisions.
                </p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-hand-holding-usd"></i>
                </div>
                <h5 className="mb-4 px-4">Business Law</h5>
                <p className="m-0">
                Navigating the complexities of property transactions, zoning, and land use issues and business compliance issues.
                </p>
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                  <i className="fa fa-2x fa-gavel"></i>
                </div>
                <h5 className="mb-4 px-4">Criminal Law</h5>
                <p className="m-0">
                We provide comprehensive representation in areas such as:
                Defense Against Charges,Investigations and Pre-Trial Strategy.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ServiceCarousel;



