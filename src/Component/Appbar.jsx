import React, { useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
const Appbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const handlechange = (x) => {
    setOpen(false);
    setClose(true)
    setActive(x);
    console.log(open , close , x);
    
    
  };
  const handlechangeLarge = (x)=>{
    setActive(x);
  }
  const handelopen = ()=>{
    setOpen(!open);
    setClose(true);
  }
  return (
    <>
    <div className="appbar">
      <div class=" container d-flex justify-content-between align-items-center">
        <div className="left">
          <span className="right_logo">MensourDev</span>
        </div>
        <div className="middle">
          <ul className="list d-flex justify-content-center align-item-center">
            <li >
              {" "}
              <Link onClick={() => handlechangeLarge("home")} to="landing" smooth={true} duration={500} className={active === "home" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li >
              <Link onClick={() => handlechangeLarge("about")} to="about" smooth={true} duration={500} className={active === "about" ? "active" : ""}>
                About
              </Link>
            </li>
            <li >
              <Link
                to="service"
                onClick={() => handlechangeLarge("service")}
                smooth={true} duration={500}
                className={active === "service" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li >
              <Link onClick={() => handlechangeLarge("skill")} to="skill" smooth={true} duration={500} className={active === "skill" ? "active" : ""}>
                Skills
              </Link>
            </li>
            <li >
              <Link
              onClick={() => handlechangeLarge("portfolio")}
              smooth={true} duration={500}
                to="portfolio"
                className={active === "portfolio" ? "active" : ""}
              >
                Portfolio
              </Link>
            </li>
            <li >
              <Link
              onClick={() => handlechangeLarge("contact")}
                to="contact"
                smooth={true} duration={500}
                className={active === "contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="right d-flex justify-content-center align-items-center">
          {/* <div className="icon-light me-3"><MdOutlineLightMode/></div> */}
          <Link to="contact">
            <button type="button" className="btn-h ">
              {" "}
              Hire Me{" "}
            </button>
          </Link>
        </div>
        <div className="menu fs-4 icon" style={{ cursor: "pointer" }}>
            {
                open ? <IoMdClose onClick={()=>handelopen()}/> :  <FiMenu onClick={()=>handelopen()}/>
            }
         
        </div>
      </div>
      <div className={open?"smAppbar d-flex justify-content-center align-items-center open ": close ? "smAppbar d-flex justify-content-center align-items-center close " :"smAppbar d-flex justify-content-center align-items-center  "}>
      <ul className="list d-flex flex-column justify-content-center align-item-center text-center">
            <li className="mb-3 "  >
              {" "}
              <Link onClick={() => {handlechange("home") , setOpen(false)}} to="landing" smooth={true} duration={500}  className={active === "home" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li className="mb-3" >
              <Link onClick={() => {handlechange("about") , setOpen(false) }} to="about" smooth={true} duration={500} className={active === "about" ? "active" : ""}>
                About
              </Link>
            </li>
            <li className="mb-3" >
              <Link
              onClick={() => {handlechange("service") , setOpen(false)}}
                to="service"
                smooth={true} duration={500}
                className={active === "service" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li className="mb-3" >
              <Link onClick={() => {handlechange("skill") , setOpen(false)}} to="skill" smooth={true} duration={500} className={active === "skill" ? "active" : ""}>
                Skills
              </Link>
            </li>
            <li className="mb-3" onClick={() => { handlechange("contact") , setOpen(true)}}>
              <Link
                smooth={true} duration={500}
                to="portfolio"
                className={active === "portfolio" ? "active" : ""}
                onClick={() => { handlechange("portfolio") , setOpen(false)}}
              >
                Portfolio
              </Link>
            </li>
            <li className="mb-3" >
              <Link
                to="contact"
                smooth={true} duration={500}
                className={active === "contact" ? "active" : ""}
                onClick={() => {handlechange("contact") , setOpen(false)}}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
    </div>
    </>
  );
};

export default Appbar;
