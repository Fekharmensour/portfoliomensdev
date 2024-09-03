import React, { useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
const Appbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const handlechange = (x) => {
    setActive(x);
  };
  return (
    <>
    <div className="appbar">
      <div class=" container d-flex justify-content-between align-items-center">
        <div className="left">
          <span className="right_logo">MensourDev</span>
        </div>
        <div className="middle">
          <ul className="list d-flex justify-content-center align-item-center">
            <li onClick={() => handlechange("home")}>
              {" "}
              <a href="#landing" className={active === "home" ? "active" : ""}>
                Home
              </a>
            </li>
            <li onClick={() => handlechange("about")}>
              <a href="#about" className={active === "about" ? "active" : ""}>
                About
              </a>
            </li>
            <li onClick={() => handlechange("service")}>
              <a
                href="#service"
                className={active === "service" ? "active" : ""}
              >
                Services
              </a>
            </li>
            <li onClick={() => handlechange("skill")}>
              <a href="#skill" className={active === "skill" ? "active" : ""}>
                Skills
              </a>
            </li>
            <li onClick={() => handlechange("portfolio")}>
              <a
                href="#portfolio"
                className={active === "portfolio" ? "active" : ""}
              >
                Portfolio
              </a>
            </li>
            <li onClick={() => handlechange("contact")}>
              <a
                href="#contact"
                className={active === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="right d-flex justify-content-center align-items-center">
          {/* <div className="icon-light me-3"><MdOutlineLightMode/></div> */}
          <a href="#contact">
            <button type="button" className="btn-h ">
              {" "}
              Hire Me{" "}
            </button>
          </a>
        </div>
        <div className="menu fs-4 icon" style={{ cursor: "pointer" }}>
            {
                open ? <IoMdClose onClick={()=>setOpen(false)}/> :  <FiMenu onClick={()=>setOpen(true)}/>
            }
         
        </div>
      </div>
      <div className={open?"smAppbar d-flex justify-content-center align-items-center  ":"smAppbar d-flex justify-content-center align-items-center close "}>
      <ul className="list d-flex flex-column justify-content-center align-item-center text-center">
            <li className="mb-3 " onClick={() => {handlechange("home") , setOpen(false)}} >
              {" "}
              <a href="#landing" className={active === "home" ? "active" : ""}>
                Home
              </a>
            </li>
            <li className="mb-3" onClick={() => {handlechange("about") , setOpen(false) }}>
              <a href="#about" className={active === "about" ? "active" : ""}>
                About
              </a>
            </li>
            <li className="mb-3" onClick={() => {handlechange("service") , setOpen(false)}}>
              <a
                href="#service"
                className={active === "service" ? "active" : ""}
              >
                Services
              </a>
            </li>
            <li className="mb-3" onClick={() => {handlechange("skill") , setOpen(false)}}>
              <a href="#skill" className={active === "skill" ? "active" : ""}>
                Skills
              </a>
            </li>
            <li className="mb-3" onClick={() => {handlechange("portfolio") ,setOpen(false) }}>
              <a
                href="#portfolio"
                className={active === "portfolio" ? "active" : ""}
              >
                Portfolio
              </a>
            </li>
            <li className="mb-3" onClick={() => {handlechange("contact") , setOpen(false)}}>
              <a
                href="#contact"
                className={active === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
    </div>
    </>
  );
};

export default Appbar;
