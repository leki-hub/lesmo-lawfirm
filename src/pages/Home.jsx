
import React, { useState, useEffect } from "react";
import Experience from "../components/Experience";
import Appointment from "../components/Appointment";
import Testimonial from "../components/Testimonial";
import ServiceCarousel from "../components/Service";
import TeamAttorneys from "../components/attorneys/TeamAttorneys";

const Home = () => {
  // Add state to manage visibility of the button
  const [showButton, setShowButton] = useState(false);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  // Attach scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
     {/* Carousel Start */}
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
             <a className="carousel-control-next" href="#header-carousel" data-slide="next">                <div className="btn btn-lg btn-secondary btn-lg-square">
                     <span className="carousel-control-next-icon"></span>
                 </div>
            </a>
         </div>
     </div>
      {/* Carousel End */}

      {/* About Start */}
      <Experience />
      {/* About End */}

      {/* Services Start */}
      <ServiceCarousel />
      {/* Services End */}

      <Appointment />

      {/* Action Start */}
      <div className="container-fluid py-5">
        {/* ... (rest of your Action section) */}
      </div>
      {/* Action End */}

      {/* Team Start */}
      <TeamAttorneys />
      {/* Team End */}

      {/* Testimonial Start */}
      <Testimonial />
      {/* Testimonial End */}
      
      
      {/* Floating button */}
      {showButton && (
        <button 
          className="btn btn-secondary btn-floating"
          style={{ position: 'fixed', bottom: '20px', right: '20px',zIndex:999 }} // Adjust the position here
          onClick={scrollToTop}
        >
          <i className="fa fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default Home;






