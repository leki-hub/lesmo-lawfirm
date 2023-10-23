import React from 'react'

const AttorneyHeader = () => {
  return (
    <div>
              {/* <!-- Page Header Start --> */}
    <div className="container-fluid bg-page-header" style={{marginBottom: "90px"}}>
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "400px"}}>
                <h3 className="display-3 text-white text-uppercase">Attorney</h3>
                <div className="d-inline-flex text-white">
                    <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">Attorney</p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Page Header End --> */}
    </div>
  )
}

export default AttorneyHeader
