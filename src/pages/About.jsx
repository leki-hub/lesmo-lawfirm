import React from 'react'
import Appointment from '../components/Appointment'
import Experience from '../components/Experience'
// import Header from '../components/Header'

const About = () => {
  return (
    <div>
        {/* <Header /> */}
          {/* <!-- Page Header Start --> */}
    <div class="container-fluid bg-page-header" style={{marginBottom: "90px"}}>
        <div class="container">
            <div class="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "400px"}}>
                <h3 class="display-3 text-white text-uppercase">About</h3>
                <div class="d-inline-flex text-white">
                    <p class="m-0 text-uppercase"><a class="text-white" href="">Home</a></p>
                    <i class="fa fa-angle-double-right pt-1 px-3"></i>
                    <p class="m-0 text-uppercase">About</p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Page Header End -->


    <!-- About Start --> */}
    <Experience />

    <Appointment />

    </div>
  )
}

export default About
