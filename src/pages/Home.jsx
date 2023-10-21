import React from "react";
import Experience from "../components/Experience";
import Appointment from "../components/Appointment";
import Team from "../components/Team";
import Header from "../components/Header";

const Home = () => {
  return <div>

    {/* <!-- Carousel Start -->  */}
    <div className="container-fluid p-0 mb-5 pb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item position-relative active" style={{height: "100vh", minHeight: "400px"}}>
                    <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{objectFit: "cover"}} alt="" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            <h4 className="text-white text-uppercase mb-4" style={{letterSpacing: "3px"}}>Best Law Agency</h4>
                            <h3 className="display-2 text-capitalize text-white mb-4">Our fighting Is for your justice</h3>
                            <a className="btn btn-primary py-3 px-5 mt-2" href="#">Get An Appointment</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item position-relative" style={{height: "100vh", minHeight: "400px"}}>
                    <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{objectFit: "cover"}} alt="" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            <h4 className="text-white text-uppercase mb-4" style={{letterSpacing: "3px"}}>Results You Deserve</h4>
                            <h3 className="display-2 text-capitalize text-white mb-4">We prepared to oppose for you</h3>
                            <a className="btn btn-primary py-3 px-5 mt-2" href="#">Call Us Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div className="btn btn-lg btn-secondary btn-lg-square">
                    <span className="carousel-control-prev-icon"></span>
                </div>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                <div className="btn btn-lg btn-secondary btn-lg-square">
                    <span className="carousel-control-next-icon"></span>
                </div>
            </a>
        </div>
    </div>
    {/* <!-- Carousel End --> */}


    {/* <!-- About Start --> */}
    <Experience />
    {/* <!-- About End --> */}


    {/* <!-- Services Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-3">
                    <h6 className="text-uppercase">Our Practice</h6>
                    <h1 className="mb-4">Our Practice Areas</h1>
                    <p>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
                    <a href="" className="btn btn-primary mt-2">More Services</a>
                </div>
                <div className="col-lg-9 pt-5 pt-lg-0">
                    <div className="bg-primary rounded" style={{height: "200px"}}></div>
                    <div className="owl-carousel service-carousel position-relative" style={{marginTop: "-100px", padding:" 0 30px"}}>
                        <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                            <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                                <i className="fa fa-2x fa-landmark"></i>
                            </div>
                            <h5 className="mb-4 px-4">Civil Law</h5>
                            <p className="m-0">Takim stet justo elitr sea eirmod vero ipsum. Sed Stet clita sit duo dolor stet at at. Tempor dolor sit ipsum</p>
                        </div>
                        <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                            <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                                <i className="fa fa-2x fa-users"></i>
                            </div>
                            <h5 className="mb-4 px-4">Family Law</h5>
                            <p className="m-0">Takim stet justo elitr sea eirmod vero ipsum. Sed Stet clita sit duo dolor stet at at. Tempor dolor sit ipsum</p>
                        </div>
                        <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                            <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                                <i className="fa fa-2x fa-hand-holding-usd"></i>
                            </div>
                            <h5 className="mb-4 px-4">Business Law</h5>
                            <p className="m-0">Takim stet justo elitr sea eirmod vero ipsum. Sed Stet clita sit duo dolor stet at at. Tempor dolor sit ipsum</p>
                        </div>
                        <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                            <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                                <i className="fa fa-2x fa-gavel"></i>
                            </div>
                            <h5 className="mb-4 px-4">Criminal Law</h5>
                            <p className="m-0">Takim stet justo elitr sea eirmod vero ipsum. Sed Stet clita sit duo dolor stet at at. Tempor dolor sit ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Services End --> */}

 <Appointment/>
{/* 
    <!-- Action Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="bg-action rounded" style={{height: "500px"}}>
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-lg-7 text-center">
                        <h1 className="text-white mb-4">Let's get started. Call us now for a Free Consultation</h1>
                        <a className="btn btn-primary py-3 px-5 mt-2" href="#">Call Us Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Action End --> */}


    {/* <!-- Team Start --> */}
    <Team />
    {/* <!-- Team End --> */}
{/* 

    <!-- Testimonial Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center pb-5">
                <h6 className="text-uppercase">Testimonial</h6>
                <h1 className="mb-5">What Our Clients Say</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item">
                    <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
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
                    <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
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
                    <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
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
                    <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
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
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --> */}



  </div>;
};

export default Home;
