import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const FoundItem = () => {
  
  return (
    <div>
      <Nav/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <h2
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "20px",
            color: "#dc3545", // 'danger' color
            fontWeight: "bold"
          }}
        >
          <strong>REPORT FOUND ITEMS</strong>
        </h2>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Label</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Label</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Label</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label className="form-label">Label</label>
                <input type="text" className="form-control" />
              </div>
              
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-danger">Report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoundItem