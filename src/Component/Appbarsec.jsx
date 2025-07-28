import React, { useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
const Appbarsec = () => {
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(false);
    const Navigate = useNavigate()
    const handlechange = (x) => {
        setOpen(false);
        setClose(true)
        setActive(x);
        console.log(open, close, x);


    };
    const handlechangeLarge = (x) => {
        setActive(x);
    }
    const handelopen = () => {
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
                                <Link onClick={() => Navigate('/')} to="landing" smooth={true} duration={500} className={active === "home" ? "active" : ""}>
                                    Go back
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className="right d-flex justify-content-center align-items-center">
                        {/* <div className="icon-light me-3"><MdOutlineLightMode/></div> */}
                        <Link to="contact landing">
                            <button type="button" className="btn-h ">
                                {" "}
                                Hire Me{" "}
                            </button>
                        </Link>
                    </div>
                    <div className="menu fs-4 icon" style={{ cursor: "pointer" }}>
                        {
                            open ? <IoMdClose onClick={() => handelopen()} /> : <FiMenu onClick={() => handelopen()} />
                        }

                    </div>
                </div>
                <div className={open ? "smAppbar d-flex justify-content-center align-items-center open " : close ? "smAppbar d-flex justify-content-center align-items-center close " : "smAppbar d-flex justify-content-center align-items-center  "}>
                    <ul className="list d-flex flex-column justify-content-center align-item-center text-center">
                        <li >
                            {" "}
                            <Link onClick={() => Navigate('/')} to="landing" smooth={true} duration={500} className={active === "home" ? "active" : ""}>
                                Go back
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Appbarsec;
