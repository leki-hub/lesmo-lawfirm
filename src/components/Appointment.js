// appointment and why choose us
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };



  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };
  
  return (
    <div>
      {/* <!-- Appointment Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="bg-appointment rounded">
            <div className="row h-100 align-items-center justify-content-center">
              <div className="col-lg-6 py-5">
                <div
                  className="rounded p-5 my-5"
                  style={{ background: "rgba(55, 55, 63, .7)" }}
                >
                  <h1 className="text-center text-white mb-4">
                    Get An Appointment
                  </h1>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control border-0 p-4"
                        placeholder="Your Email"
                        required="required"
                      />
                    </div>
                    <div className="form-row">
                      <div className="col-6">
                        <div className="form-group">
                          <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            className="form-control border-0 p-4"
                            placeholderText="Select Date"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <DatePicker
                            selected={selectedTime}
                            onChange={handleTimeChange}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            className="form-control border-0 p-4"
                            placeholderText="Select Time"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">

                      <select
                        className="custom-select border-0 px-4"
                        style={{ height: "47px" }}
                        value={selectedService}
                        onChange={handleServiceChange}
                      >
                        <option value="" disabled>
                          Select A Service
                        </option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                      </select>
                    </div>
                    <div>
                      <button
                        className="btn btn-primary btn-block border-0 py-3"
                        type="submit"
                      >
                        Get An Appointment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Appointment End -->


    <!-- Features Start --> */}
      <div className="container-fluid pb-0">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100 rounded overflow-hidden">
                <img
                  className="position-absolute w-100 h-100"
                  src="img/feature.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 pt-5 pb-lg-5">
              <div className="feature-text bg-white rounded p-lg-5">
                <h6 className="text-uppercase">Our Features</h6>
                <h1 className="mb-4">Why Choose Us</h1>
                <div className="d-flex mb-4">
                  <div
                    className="btn-primary btn-lg-square px-3"
                    style={{ borderRadius: "50px" }}
                  >
                    <h5 className="text-secondary m-0">01</h5>
                  </div>
                  <div className="ml-4">
                    <h5>Best Law Practices</h5>
                    <p className="m-0">
                     Our team of attorneys brings a diverse range of expertise,
                     ensuring that we are equipped to handle various legal challenges. 
                     Each member is driven by a passion for justice and a 
                     commitment to achieving the best outcomes for our clients. 
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div
                    className="btn-primary btn-lg-square px-3"
                    style={{ borderRadius: "50px" }}
                  >
                    <h5 className="text-secondary m-0">02</h5>
                  </div>
                  <div className="ml-4">
                    <h5>Efficiency & Trust</h5>
                    <p className="m-0">
                    We believe in the power of community and actively engage in pro bono work and community outreach. 
                    By providing legal assistance to those in need, we aim to make a positive impact on the lives of individuals and families.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div
                    className="btn-primary btn-lg-square px-3"
                    style={{ bordeRadius: "50px" }}
                  >
                    <h5 className="text-secondary m-0">03</h5>
                  </div>
                  <div className="ml-4">
                    <h5>Results You Deserve</h5>
                    <p className="m-0">
                    By providing legal assistance to those in need, we aim
                    to make a positive impact on the lives of individuals and families.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features End --> */}
    </div>
  );
};

export default Appointment;
