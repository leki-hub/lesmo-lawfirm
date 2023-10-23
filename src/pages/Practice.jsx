import React from 'react'
import Testimonial from '../components/Testimonial'
import ServiceCarousel from '../components/Service'

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



        {/* Service start */}
<ServiceCarousel />
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
    <Testimonial />
{/* Testimonials end */}


    </div>
  )
}

export default Practice
