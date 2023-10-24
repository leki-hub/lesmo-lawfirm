import React from 'react'

const Experience = () => {
  return (
    <div>
          {/* <!-- About Start --> */} 
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-5">
                    <img className="img-fluid rounded" src="img/about.jpg" alt="" />
                </div>
                <div className="col-lg-7 mt-4 mt-lg-0">
                    <h2 className="position-relative text-center bg-white text-primary rounded p-3 mt-4 mb-4 d-none d-lg-block" style={{width: "350px", marginLeft: "-205px"}}>25 Years Experience</h2>
                    <h6 className="text-uppercase">Learn About Us</h6>
                    <h1 className="mb-4">We Provide Reliable And Effective Legal Services</h1>
                    <p>At <b>Lesmo Advoacates</b> we are dedicated to providing exceptional legal services with a commitment to integrity, excellence, and client-centered advocacy.</p>
                    <p> With a team of experienced attorneys, we stand as a pillar of support for individuals, businesses, and organizations navigating the complex landscape of law.</p>
                    <a href="" className="btn btn-primary mt-2">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    {/* About End */}
    </div>
  )
}

export default Experience
