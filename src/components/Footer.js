import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-secondary text-white pt-5 px-sm-3 px-md-5"
        style={{ marginTop: "90px" }}
      >
        <div className="row mt-5">
          <div className="col-lg-4">
            <div
              className="d-flex justify-content-lg-center p-4"
              style={{ background: 'rgba(256, 256, 256, 0.05)' }}
            >
              <i className="fa fa-2x fa-map-marker-alt text-primary"></i>
              <div className="ml-3">
                <h5 className="text-white">Our Office</h5>
                <p className="m-0">123 Street, New York, USA</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="d-flex justify-content-lg-center p-4"
              style={{ background: 'rgba(256, 256, 256, 0.05)' }}
            >
              <i className="fa fa-2x fa-envelope-open text-primary"></i>
              <div className="ml-3">
                <h5 className="text-white">Email Us</h5>
                <p className="m-0">info@example.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="d-flex justify-content-lg-center p-4"
              style={{ background: 'rgba(256, 256, 256, 0.05)' }}
            >
              <i className="fa fa-2x fa-phone-alt text-primary"></i>
              <div className="ml-3">
                <h5 className="text-white">Call Us</h5>
                <p className="m-0">+012 345 6789</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <a href="index.html" className="navbar-brand">
              <h1 className="m-0 mt-n2 display-4 text-primary text-uppercase">
                Justice
              </h1>
            </a>
            <p>
            We are dedicated to delivering results-driven representation while providing the
             personalized attention and support our clients deserve.
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                href="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-lg btn-outline-light btn-lg-square"
                href="#"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-semi-bold text-primary mb-4">
              Popular Links
            </h4>
            <div className="d-flex flex-column justify-content-start">
              <Link className="text-white mb-2" to="/">
                <i className="fa fa-angle-right mr-2"></i>Home
              </Link>
              <Link className="text-white mb-2" to="/about">
                <i className="fa fa-angle-right mr-2"></i>About
              </Link>
              <Link  className="text-white mb-2" to="/practice">
                <i className="fa fa-angle-right mr-2"></i>Services
              </Link>
              <Link className="text-white mb-2" to="/attorneys">
                <i className="fa fa-angle-right mr-2"></i>Attorney
              </Link>
              <Link  className="text-white" to="/contact">
                <i className="fa fa-angle-right mr-2"></i>Contact
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-semi-bold text-primary mb-4">
              Quick Links
            </h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>FAQs
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Help
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Terms
              </a>
              <a className="text-white mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Privacy
              </a>
              <a className="text-white" href="#">
                <i className="fa fa-angle-right mr-2"></i>Site Map
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="font-weight-semi-bold text-primary mb-4">
              Newsletter
            </h4>
            <p>
            We invite you to connect with us and explore how <b>Lesmo Advocates </b> 
            can serve your legal needs. Whether you require strong representation in a civil dispute 
             or criminal defense, we are here to stand by your side.
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0"
                  style={{ padding: "25px" }}
                  placeholder="Your Email"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row p-4 mt-5 mx-0"
          style={{ background: 'rgba(256, 256, 256, 0.05)' }}
        >
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy;{" "}
              <a className="font-weight-bold" href="#">
                lesmo-lawfirm
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <p className="m-0 text-white">
              Designed by Leki 
              <a className="font-weight-bold" href="https://www.linkedin.com/in/leki-emmanuel-8b7540157/" target="_blank">
               linkedin
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </div>
  );
};

export default Footer;
