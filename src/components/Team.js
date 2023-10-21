import React from 'react'

const Team = () => {
  return (
    <div>
      {/* <!-- Team Start --> */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center pb-2">
                <h6 className="text-uppercase">Our Attorneys</h6>
                <h1 className="mb-4">Meet Our Attorneys</h1>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="bg-primary rounded" style={{ height: '200px' }}></div>
                    <div className="owl-carousel team-carousel position-relative" style={{marginTop: "-97px", padding: "0 30px"}}>
                        <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                            <h5 className="mb-2 px-4">Attorney Name</h5>
                            <p className="mb-3 px-4">Practice Area</p>
                            <div className="team-img position-relative">
                                <img className="img-fluid" src="img/team-1.jpg" alt="" />
                                <div className="team-social">
                                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                            <h5 className="mb-2 px-4">Attorney Name</h5>
                            <p className="mb-3 px-4">Practice Area</p>
                            <div className="team-img position-relative">
                                <img className="img-fluid" src="img/team-2.jpg" alt="" />
                                <div className="team-social">
                                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                            <h5 className="mb-2 px-4">Attorney Name</h5>
                            <p className="mb-3 px-4">Practice Area</p>
                            <div className="team-img position-relative">
                                <img className="img-fluid" src="img/team-3.jpg" alt="" />
                                <div className="team-social">
                                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                            <h5 className="mb-2 px-4">Attorney Name</h5>
                            <p className="mb-3 px-4">Practice Area</p>
                            <div className="team-img position-relative">
                                <img className="img-fluid" src="img/team-4.jpg" alt="" />
                                <div className="team-social">
                                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                            <h5 className="mb-2 px-4">Attorney Name</h5>
                            <p className="mb-3 px-4">Practice Area</p>
                            <div className="team-img position-relative">
                                <img className="img-fluid" src="img/team-5.jpg" alt=""/>
                                <div className="team-social">
                                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Team End --> */}
    </div>
  )
}

export default Team
