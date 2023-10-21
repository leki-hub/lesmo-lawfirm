import React from 'react'

const Practice = () => {
  return (
    <div>
       {/* <!-- Page Header Start --> */}
    <div className="container-fluid bg-page-header" style={{marginBottom: "90px"}}>
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "400px"}}>
                <h3 className="display-3 text-white text-uppercase">Practice</h3>
                <div className="d-inline-flex text-white">
                    <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">Practice</p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Page Header End --> */}




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
                    <div className="owl-carousel service-carousel position-relative" style={{marginTop: "-100px", padding: "0 30px"}}>
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


    {/* <!-- Testimonial Start --> */}
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
                        <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" style={{width: "80px", height: "80px"}} alt=""/>
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
                        <img className="img-fluid rounded-circle" src="img/testimonial-3.jpg" style={{width: "80px" ,height: "80px"}} alt=" " />
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
{/* Testimonials end */}
      
    </div>
  )
}

export default Practice
