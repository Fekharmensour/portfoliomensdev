import React from "react";
import { FaBeer } from 'react-icons/fa';
import { MdDataObject } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { GrCode } from "react-icons/gr";
const Services = () => {
  return (
    <div className="service d-flex justify-content-center align-items-center" id="service">
      <div className="container">
        <div className="title mb-3">Exceptional Services</div>
        <div className="text">
          Experience exceptional services for a groundbreaking digital journey
        </div>
        <div className="row mt-5 text-center">
          <div className="col-sm-6 col-md-4 col-lg-4 ">
            <div className="box ">
              <div className="icon pt-3 fs-1">
              <GrCode />
              </div>
              <div className="titer fs-3">Web Devlopment</div>
              <div className="desc px-4 fs-6">
              Elevate your digital presence with state-of-the-art web development. I design and develop custom websites that blend eye-catching visuals with smooth, intuitive functionality, leaving a lasting impression on your audience
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 ">
          <div className="box">
              <div className="icon pt-3 fs-1">
              <MdDataObject/>
              </div>
              <div className="titer fs-3">Api Devlopment</div>
              <div className="desc px-4 fs-6">
              Optimize your application’s connectivity with powerful RESTful APIs. I develop efficient, scalable APIs that streamline data exchange and enhance system integration, and elevate overall performance.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 ">
          <div className="box">
              <div className="icon pt-3  fs-1">
                <CgWebsite />
              </div>
              <div className="titer fs-3">E-commerce</div>
              <div className="desc px-4 fs-6">
              Elevate your business with stunning e-commerce websites designed to boost sales, enhance user experiences, and maximize conversions. Experience seamless product catalogs and secure payment gateways that drive results.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
                  <div className="col-sm-6 col-md-4 col-lg-4 ">
                    <div className="box mb-3 bg-white"  data-work="Application ">
                     
                    </div>
                  </div> 
                  <div className="col-sm-6 col-md-4 col-lg-4 " >
                    <div className="box mb-3 bg-white " data-work="Desktop-Work ">
                      
                    </div>
                  </div> 
                  <div className="col-sm-6 col-md-4 col-lg-4 ">
                    <div className="box mb-3 bg-white" data-work="Desktop-Gaming ">
                      
                    </div>
                  </div> 
                  
              </div> */}
      </div>
    </div>
  );
};

export default Services;
